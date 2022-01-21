import Button from '../../Component/button';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function QnaHome({meta, data}) {
    const router = useRouter();
    const openDetailQustion = (id)=>{
        router.push({
            pathname: `/qna/${id}`,
            query: {
                page
            }
        },`/qna/${id}`);
    }

    const {pagination} = meta;
    const [page, setPage] = useState(pagination.page);
    const reloadQna = e=>{
        const _page = e.target.value;
        
        if(_page && _page<=pagination.pageCount){
            setPage(_page);
            router.push({
                pathname: `/qna`,
                query: {
                    page: _page
                }
            }, `/qna`);
        }else{
            setPage('');
        }
    }

    const thead = <thead align={'center'}><tr>
        <td key={'0'}><input type="checkbox"/></td>
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
                    <td key={id+'0'}><input type="checkbox"/></td>
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
            <select>
                <option value="101">작성자</option>
                <option value="102">제목</option>
                <option value="103">제목+내용</option>
            </select>
            <input type="text" name=""></input>
            <Button text={'검색'} className={'btn-action-contained'}/>
            <label>상태</label>
            <select>
                <option value="">전체</option>
                <option value="101">접수대기</option>
                <option value="102">접수완료</option>
                <option value="103">답변완료</option>
            </select>
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
                <input value={page} className="inputPage" onChange={e=>{reloadQna(e)}}/> / {pagination.pageCount} | 총 {pagination.total}건
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
    const page = query.page ? query.page : 1;
    const {meta, data} = await(
        await fetch(`http://localhost:3000/qnas?pagination%5Bpage%5D=${page}`)
    ).json();

    return {
        props: {
            meta, data
        }
    }
}