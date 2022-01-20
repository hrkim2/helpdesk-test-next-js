import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/SG_Logo_Default.png';

export default function NavBar({menuList, curUrl}){

    return (
    <nav>
        <div className='navLogoWrapper'>
            <Image width={135} height={26} src={logo} />
        </div>
        <ul>
        {menuList.map(menu=>{
            return <Link href={menu.url} key={menu.menuId}>
                <li className={curUrl===menu.url ? 'active': ''}>
                    {menu.menuName}
                </li>
            </Link>
        })}
        </ul>
        <style jsx>{`
            .navLogoWrapper{
                margin:20px 25px 10px;
            }
        `}</style>
    </nav>
    );
}