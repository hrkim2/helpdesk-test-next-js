import Button from '../../Component/button';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function CreateQna() {
    const router = useRouter();
    async function submitData(){
        axios.get('http://localhost:1337/api/qnas')
        .then(res=>{
            const qId = Math.max(...res.data.data.map(d=>d.attributes.qId))+1;

            axios.post(`http://localhost:1337/api/qnas`, {
                "data": {
                    "boardCd": 'q',
                    "qId": qId,
                    "qTitle": document.querySelector('#title').value,
                    "qStatusCd": 101,
                    "qUser": '김혜리',
                    "registDate": new Date().getDay(),
                    "readCount": 0,
                    "qDetail": document.querySelector('#detail').value,
                    "common_code": "1"
                }
            }).then(res=>{
                if(res.status===200){
                    router.push('/qna');
                }
            });
        });
    }

    return <div>
        <table>
            <thead>
                <tr key={'1'}>
                    <td key={'1'}>제목</td>
                    <td key={'2'}><input type='text' id='title'/></td>
                </tr>
            </thead>
            <tbody>
                <tr key={'3'}>
                    <td key={'5'} colSpan={2}>문의 내용</td>
                </tr>
                <tr key={'4'}>
                    <td key={'6'} colSpan={2}>
                        <textarea id='detail'></textarea>
                    </td>
                </tr>
            </tbody>
        </table>
        <Button
            text='등록'
            className='btn-action-outlined'
            onClickBtn={()=>submitData()}
        />
        <style jsx>{`
            table{
                width:100%;
            }
        `}</style>
    </div>;
}