import Button from '../../Component/button';
import { useRouter } from 'next/router';

export default function QnaDetail({params}) {
    const {qId, title, user} = params;
    const router = useRouter();

    return <div>
        <article>
            <div>글번호 : {qId}</div>
            <div>제목 : {title}</div>
            <div>작성자 : {user}</div>
            <div>글내용~~~~~</div>
        </article>
        <footer>
            <Button text="목록" className="btn-cancel-outlined" onClickBtn={()=>{
                router.push(`/qna`);
            }}/>
        </footer>
    </div>;
}

export function getServerSideProps(data){

    return {
        props: {
            params: data.query
        }
    }
}