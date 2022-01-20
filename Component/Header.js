import { useRouter } from 'next/router';

export default function Header({pageName}){
    return (
    <header>
        <h1>{pageName}</h1>
    </header>
    );
}