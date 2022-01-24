import Button from '../../Component/button';
import { useRouter } from 'next/router';

export default function QnaDetail({data, page}) {
    const {qId, qTitle, qUser, qDetail} = data.attributes;
    const router = useRouter();

    return <div>
        <article>
            <div>글번호 : {qId}</div>
            <div>제목 : {qTitle}</div>
            <div>작성자 : {qUser}</div>
            <pre>{qDetail}</pre>
        </article>
        <footer>
            <Button text="목록" className="btn-action-contained" onClickBtn={()=>{
                router.push({
                    pathname: `/qna`,
                    query: {
                        page
                    }
                },`/qna`);
            }}/>
        </footer>
    </div>;
}

export async function getServerSideProps({query}){
    const {data} = await(
        await fetch(`http://localhost:3000/qnas/${query.qId}`)
    ).json();

    return {
        props: {
            data,
            page: query.page
        }
    }
}