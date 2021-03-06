import Button from '../../Component/button';
import { useRouter } from 'next/router';
import { saveAs } from "file-saver";

export default function QnaDetail({ data, page }:any) {
  const { qId, qTitle, qUser, qDetail } = data.attributes;
  const router = useRouter();

  const saveFile = () => {
    saveAs(
      "../../public/SG_Logo_Default.png",
      "SG_Logo_Default.png"
    );
  }

  return (
    <div>
      <article>
        <div>글번호 : {qId}</div>
        <div>제목 : {qTitle}</div>
        <div>작성자 : {qUser}</div>
        <pre>{qDetail}</pre>
      </article>
      <footer>
        <Button
          text="목록"
          className="btn-action-contained"
          onClickBtn={() => {
            router.push(
              {
                pathname: `/qna`,
                query: {
                  page,
                },
              },
              `/qna`,
            );
          }}
        />
        <a onClick={saveFile} download>down test</a>
      </footer>
    </div>
  );
}

export async function getServerSideProps({ query }:any) {
  const { data } = await (await fetch(`http://localhost:3000/qnas/${query.qId}`)).json();

  if (!data) {
    return {
      redirect: {
        permanent: false,
        destination: '/404',
      },
    };
  } else if (query.page) {
    return {
      props: {
        data,
        page: query.page,
      },
    };
  } else {
    return {
      props: {
        data,
      },
    };
  }
}
