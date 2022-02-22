
import { useRouter } from 'next/router';
import Image from 'next/image';
import logo from '../../public/SG_Logo_Default.png';

export default function Layout(){
    const router = useRouter();

    function login(e: React.MouseEvent<HTMLInputElement>){
        e.preventDefault();
        const frm = (e.target as HTMLFormElement).form;
        const user = (frm.querySelector('#user') as HTMLInputElement)?.value;
        const password = (frm.querySelector('#password') as HTMLInputElement)?.value;

        if((user.length*password.length>0) && (user==='admin' && password==='123')){
            router.push('/qna');
        }else{
            alert('로그인 정보를 정확하게 입력하세요.');
        }
    }

    return <div>
        <div className='header'>
            <Image width={200} height={38.5} src={logo} />
            <h2>IT Help Desk</h2>
        </div>
        <div className='loginForm'>
            <form>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr key='1'>
                            <td key='1'>USER</td>
                            <td key='2'><input type='text' id='user'/></td>
                            <td key='3' rowSpan={2}>
                                <input type='submit' value='로그인' onClick={e=>{login(e)}}/>
                            </td>
                        </tr>
                        <tr key='2'>
                            <td key='4'>PASSWORD</td>
                            <td key='5'><input type='text' id='password'/></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
        <style jsx>{`
        div{
            display: block;
        }
        table{
            color: #fff;
            margin-left:auto;
            margin-right:auto;
        }
        .header{
            cursor:default;
            padding-top: 200px;
            width:100%;
            text-align:center;
        }
        .loginForm{
            background-color: #64CCC9;
            padding: 30px 50px;
            margin: 0 100px;
            text-align:right;
        }
        `}</style>
    </div>
}