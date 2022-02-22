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
        `menu list`
        <ul>
          <Link key='0' href='/components/atom/button'>
            <li className='cursor-pointer hover:bg-efefef'>button</li>
          </Link>
          <Link key='1' href='/components/atom/badge'>
            <li className='cursor-pointer hover:bg-efefef'>badge</li>
          </Link>
          <Link key='2' href='/components/atom/input'>
            <li className='cursor-pointer hover:bg-efefef'>input</li>
          </Link>
          <Link key='3' href='/components/atom/label'>
            <li className='cursor-pointer hover:bg-efefef'>label</li>
          </Link>
          <Link key='4' href='/components/atom/editor'>
            <li className='cursor-pointer hover:bg-efefef'>editor</li>
          </Link>
        </ul>
      </div>
      <Component {...pageProps}/>
    </div>
  ) :(
    <Layout path={path}>
      <Component {...pageProps} />
    </Layout>
  );
}
