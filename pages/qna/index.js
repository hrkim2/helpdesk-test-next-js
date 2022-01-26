import Button from '../../Component/button';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function QnaHome({meta, data}) {
    const router = useRouter();
    const {pagination} = meta;
    const [page, setPage] = useState(pagination.page);

    const tossPageNum = e=>{
        searchQna(e.target.value);
    }

    useEffect(()=>{
        if(page!=pagination.page){
            searchQna(pagination.page);
        }
    }, [meta]);

    const openDetailQustion = (id)=>{
        router.push({
            pathname: `/qna/${id}`,
            query: {
                page
            }
        },`/qna/${id}`);
    }
    const openQnaForm = (openName)=>{
        const pathname = '/qna/qnaForm';
        let checkList;
        let query;
        if(openName==='udt'){
            checkList = Array.from(document.querySelectorAll('.qnaCheck')).filter(c=>{
                return c.checked;
            });
            
            if(checkList.length==0){
                alert('수정할 글을 선택하세요');
                return false;
            }else if(checkList.length>1){
                alert('수정할 글을 하나만 선택하세요');
                return false;
            }

            query = {
                openName,
                id: checkList[0].id.split('-')[1],
                page
            }
        }else{
            query = {
                openName
            }
        }

        router.push({pathname, query}, pathname);
    }
    const deleteQna = ()=>{
        const checkList = Array.from(document.querySelectorAll('.qnaCheck')).filter(c=>{
            return c.checked;
        });

        if(checkList.length==0){
            alert('삭제할 글을 선택하세요');
        }else{
            let deleteCount=0;
            checkList.forEach((c, i, ths)=>{
                axios.delete(`http://localhost:3000/qnas/${c.id.split('-')[1]}`)
                .then(res=>{
                    if(res.status===200){
                        deleteCount++;
                    }
                    if(i===ths.length-1){
                        alert(`${deleteCount}건이 삭제되었습니다.`);
                        router.push({
                            pathname: `/qna`,
                            query: {
                                page
                            }
                        }, `/qna`);
                    }
                })
            });
        }
    }
    const searchQna = (page)=>{
        if(page && page<=pagination.pageCount){
            setPage(page);
        }else{
            setPage('');
        }

        const select = document.querySelector('#searchKey');
        const selectedKey = select[select.selectedIndex].value;
        const value = document.querySelector('[name="searchValue"]').value;
        
        const select2 = document.querySelector('#searchStatus');
        const value2 = select2[select2.selectedIndex].value;

        let query = {page};
        
        if(value.length!==0){
            if(selectedKey==='101'){
                query['filters[qUser][$containsi]'] = value;
            }else if(selectedKey==='102'){
                query['filters[qTitle][$containsi]'] = value;
            }else if(selectedKey==='103'){
                query['filters[$or][0][qTitle][$containsi]'] = value;
                query['filters[$or][1][qDetail][$containsi]'] = value;
            }
        }

        if(value2!==''){
            query['filters[qStatusCd][$eq]'] = value2;
        }

        router.push({
            pathname: `/qna`,
            query
        }, `/qna`);
    }

    const thead = <thead align={'center'}><tr>
        <td key={'0'}><input type='checkbox'/></td>
        <td key={'1'}>번호</td>
        <td key={'2'}>제목</td>
        <td key={'3'}>상태</td>
        <td key={'4'}>작성자</td>
    </tr></thead>;
    const tbody = <tbody align={'center'}>
        {data?.length==0 ?
            <tr><td colSpan={5} height={200}>조회된 데이터가 없습니다.</td></tr>
            :
            data.map(({id, attributes})=>{
                const qStatus = attributes.common_code.data.attributes.codeName;
                
                return <tr key={id}>
                    <td key={id+'0'}><input type="checkbox" id={`check-${id}`} className='qnaCheck'/></td>
                    <td key={id+'1'}>{attributes.qId}</td>
                    <td key={id+'2'} align={'left'} onClick={()=>openDetailQustion(id)}>
                        {attributes.qTitle}<br/>
                        <span className="textSmall">{'등록일 '+attributes.registDate+' / 조회 '+attributes.readCount}</span>
                    </td>
                    <td key={id+'3'}>
                        <Button
                            text={qStatus}
                            className={
                                attributes.qStatusCd=='103' ? 'btn-action-outlined' : 'btn-cancel-'.concat('',attributes.qStatusCd=='101' ? 'outlined' : 'contained')
                            }
                        />
                    </td>
                    <td key={id+'4'}>{attributes.qUser}</td>
                </tr>;
            })
        }
    </tbody>;

    return <div>
        <div className="search">
            <select id="searchKey">
                <option value="101">작성자</option>
                <option value="102">제목</option>
                <option value="103">제목+내용</option>
            </select>
            <input type="text" name="searchValue"></input>
            <Button
                text={'검색'}
                className={'btn-action-contained'}
                onClickBtn={()=>searchQna()}
            />
            <label>상태</label>
            <select id="searchStatus" onChange={e=>searchQna()}>
                <option value="">전체</option>
                <option value="101">접수대기</option>
                <option value="102">접수완료</option>
                <option value="103">답변완료</option>
            </select>
            <Button
                text={'새글'}
                className={'btn-action-outlined'}
                onClickBtn={()=>openQnaForm('new')}
            />
            <Button
                text={'수정'}
                className={'btn-action-outlined'}
                onClickBtn={()=>openQnaForm('udt')}
            />
            <Button
                text={'삭제'}
                className={'btn-cancel-outlined'}
                onClickBtn={()=>deleteQna()}
            />
        </div>
        <div className="lineClear"></div>
        <div className="tables">
            <table>
                {thead}
                {tbody}
            </table>
        </div>
        {pagination.pageCount>0 ? 
            <div className="paging">
                <input value={page} className="inputPage" onChange={e=>{tossPageNum(e)}}/> / {pagination.pageCount} | 총 {pagination.total}건
            </div>
        : ''}
        <style jsx>{`
            table{
                width: 100%;
            }
            .lineClear{
                border-bottom:1px solid #efefef;
                margin: 20px 0;
            }
            .inputPage{
                width: 30px;
            }
        `}</style>
    </div>;
}

export async function getServerSideProps({query}){
    const queryKeys = Object.keys(query);
    const page = query.page ? query.page : 1;
    let requestUrl = `http://localhost:3000/qnas?pagination%5Bpage%5D=${page}`;
    
    queryKeys.forEach(qk=>{
        if(qk.indexOf('filters')>=0){
            requestUrl += `&${qk}=${encodeURI(query[qk])}`;
        }
    });

    let res = await axios.get(requestUrl);
    let {meta, data} = res.data;

    if(page>1 && data.length==0){
        meta.pagination.page = (page-1);
    }

    return {
        props: {
            meta,
            data
        }
    }
}