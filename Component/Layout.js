
import { useRouter } from 'next/router';
import menuList from '../pages/api/menu.json';
import NavBar from '../Component/NavBar';
import Header from '../Component/Header';

export default function Layout({children}){
    const router = useRouter();
    
    const curMenu = menuList.filter(menu=>router.asPath.indexOf(menu.url)>=0);
    const pageName = curMenu.length>0 ? curMenu[0].menuName : '';

    return <>
        <NavBar menuList={menuList} curUrl={curMenu[0].url}/>
        <section>
            <Header pageName={pageName}/>
            {children}
        </section>
    </>
}