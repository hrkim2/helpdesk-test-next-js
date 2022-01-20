import qnaList from '../../pages/api/qna.json';
import Button from '../../Component/button';
import { useRouter } from 'next/router';

export default function QnaHome() {
    const router = useRouter();
    const openDetailQustion = ({qId, qTitle, qUser})=>{
        router.push({
            pathname: `/qna/${qId}`,
            query: {
                title: qTitle,
                user: qUser
            }
        }, `/qna/${qId}`);
    }

    const thead = <thead align={'center'}>
        <td key={0}><input type="checkbox"/></td>
        <td key={1}>번호</td>
        <td key={2}>제목</td>
        <td key={3}>상태</td>
        <td key={4}>작성자</td>
    </thead>;
    const tbody = <tbody align={'center'}>
        {qnaList?.length==0 ?
            <tr><td colSpan={5}>조회된 데이터가 없습니다.</td></tr>
            :
            qnaList.map(qna=>{
                return <tr key={qna.qId}>
                    <td key={qna.qId+'0'}><input type="checkbox"/></td>
                    <td key={qna.qId+'1'}>{qna.qId}</td>
                    <td key={qna.qId+'2'} align={'left'} onClick={()=>openDetailQustion(qna)}>
                        {qna.qTitle}<br/>
                        <span className="textSmall">{'등록일 '+qna.registDate+' / 조회 '+qna.readCount}</span>
                    </td>
                    <td key={qna.qId+'3'}>
                        <Button
                            text={qna.qStatus}
                            className={qna.qStatusCd=='103' ? 'btn-action-outlined' : 'btn-cancel-'+(qna.qStatusCd=='101' ? 'outlined' : 'contained')}
                        />
                    </td>
                    <td key={qna.qId+'4'}>{qna.qUser}</td>
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
        <style jsx>{`
            table{
                width: 100%;
            }
            .lineClear{
                border-bottom:1px solid #efefef;
                margin: 20px 0;
            }
        `}</style>
    </div>;
}