import Button from '../../Component/button';
import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';

export default function CreateQna({ data, page }) {
  const router = useRouter();
  const [qna, setQna] = useState(data ? data.attributes : undefined);

  function updateInputform(e) {
    setQna({ [e.target.name]: e.target.value });
  }

  function submitData(update) {
    const title = document.querySelector('#title').value;
    const detail = document.querySelector('#detail').value;

    if (title.length * detail.length > 0) {
      if (!update) {
        axios.get('/qnas').then((res) => {
          const qIdList = res.data.data.map((d) => d.attributes.qId);
          const qId = qIdList.length > 0 ? Math.max(...qIdList) + 1 : 1;

          axios
            .post(`/qnas`, {
              data: {
                boardCd: 'q',
                qId: qId,
                qTitle: title,
                qStatusCd: 101,
                qUser: '김혜리',
                registDate: new Date().getDay(),
                readCount: 0,
                qDetail: detail,
                common_code: '1',
              },
            })
            .then((res) => {
              if (res.status === 200) {
                router.push('/qna');
              }
            });
        });
      } else {
        axios
          .put(`http://localhost:1337/api/qnas/${data.id}`, {
            data: {
              boardCd: qna.boardCd,
              qId: qna.qId,
              qTitle: title,
              qStatusCd: qna.qStatusCd,
              qUser: qna.qUser,
              registDate: qna.registDate,
              readCount: qna.readCount,
              qDetail: detail,
            },
          })
          .then((res) => {
            if (res.status === 200) {
              router.push(
                {
                  pathname: `/qna/${data.id}`,
                  query: {
                    page,
                  },
                },
                `/qna/${data.id}`,
              );
            }
          });
      }
    } else if (title.length == 0) {
      alert('제목을 입력하세요');
    } else {
      alert('내용을 입력하세요');
    }
  }

  return (
    <div>
      <table>
        <thead>
          <tr key={'1'}>
            <td key={'1'}>제목</td>
            <td key={'2'}>
              {!qna ? (
                <input type="text" id="title" />
              ) : (
                <input type="text" id="title" name="qTitle" value={qna.qTitle} onChange={(e) => updateInputform(e)} />
              )}
            </td>
          </tr>
        </thead>
        <tbody>
          <tr key={'3'}>
            <td key={'5'} colSpan={2}>
              문의 내용
            </td>
          </tr>
          <tr key={'4'}>
            <td key={'6'} colSpan={2}>
              {!qna ? (
                <textarea id="detail" cols={50} rows={25} />
              ) : (
                <textarea
                  id="detail"
                  name="qDetail"
                  cols={50}
                  rows={25}
                  value={qna.qDetail}
                  onChange={(e) => updateInputform(e)}
                />
              )}
            </td>
          </tr>
        </tbody>
      </table>
      <Button text="등록" className="btn-action-outlined" onClickBtn={() => submitData(qna ? true : false)} />
      <style jsx>{`
        table {
          width: 100%;
        }
        textarea {
          resize: none;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const { openName, id, page } = query;

  if (openName === 'udt') {
    if (id) {
      const { data } = await (await fetch(`http://localhost:3000/qnas/${id}`)).json();

      return {
        props: {
          data,
          page,
        },
      };
    } else {
      return {
        notFound: true,
      };
    }
  } else {
    return {
      props: {},
    };
  }
}
