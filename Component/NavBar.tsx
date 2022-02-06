import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/SG_Logo_Default.png';
import { useState } from 'react';

type menuType = {
    url: string;
    menuId: number;
    menuName: string;
}

export default function NavBar({menuList, curUrl}:any){
    let [showList, setShowList] = useState('showList');

    function toggleList(){
        if(showList=='showList'){
            setShowList('hideList');
        }else{
            setShowList('showList');
        }
    }

    return (
    <nav>
        <div className='navLogoWrapper'>
            <Image width={135} height={26} src={logo} />
            <button className='navToggle' onClick={()=>toggleList()}>📚</button>
        </div>
        <ul className={showList}>
        {menuList.map((menu:menuType)=>{
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
            button{
                margin-left:10px;
            }
        `}</style>
    </nav>
    );
}