import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import Login from '../Component/Login';
import Layout from '../Component/Layout';
import '../styles/globals.css';
import Link from 'next/link';

export default function App({ Component, pageProps } : AppProps) {
  const router = useRouter();
  const path = router.asPath;

  return path === '/' ? (
    <Login />
  ) : path.indexOf('components')>=0 ? (
    <div className="font-seegene">
      <div className='m-2'>
        <div>`menu list`</div>
        <div className='inline-block w-1/4'>
          <div className='block italic text-lg font-bold'>atom</div>
          <ul className='m-1 p-3 bg-warning/25'>
            <Link key='0' href='/components/atom/button'>
              <li className='cursor-pointer hover:bg-warning'>button</li>
            </Link>
            <Link key='1' href='/components/atom/badge'>
              <li className='cursor-pointer hover:bg-warning'>badge</li>
            </Link>
            <Link key='2' href='/components/atom/input'>
              <li className='cursor-pointer hover:bg-warning'>input</li>
            </Link>
            <Link key='3' href='/components/atom/label'>
              <li className='cursor-pointer hover:bg-warning'>label</li>
            </Link>
            <Link key='4' href='/components/atom/editor'>
              <li className='cursor-pointer hover:bg-warning'>editor</li>
            </Link>
          </ul>
        </div>
        <div className='inline-block w-1/4'>
          <div className='block italic text-lg font-bold'>molecule</div>
          <ul className='m-1 p-3 bg-success/25'>
            <Link key='0' href='/components/molecule/breadcrumb'>
              <li className='cursor-pointer hover:bg-success'>breadcrumb</li>
            </Link>
            <Link key='1' href='/components/molecule/inputWithLabel'>
              <li className='cursor-pointer hover:bg-success'>inputWithLabel</li>
            </Link>
          </ul>
        </div>
      </div>
      <Component {...pageProps}/>
    </div>
  ) :(
    <Layout path={path}>
      <Component {...pageProps} />
    </Layout>
  );
}
