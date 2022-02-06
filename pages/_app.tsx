import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import Login from '../Component/Login';
import Layout from '../Component/Layout';
import '../styles/globals.css';

export default function App({ Component, pageProps } : AppProps) {
  const router = useRouter();
  const path = router.asPath;

  return path === '/' ? (
    <Login />
  ) : (
    <Layout path={path}>
      <Component {...pageProps} />
    </Layout>
  );
}
