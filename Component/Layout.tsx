import menuList from '../pages/api/menu.json';
import NavBar from './NavBar';
import Header from './Header';

export default function Layout({ path, children }:any) {
  const curMenu = menuList.filter((menu) => path.indexOf(menu.url) >= 0);
  const pageName = curMenu.length > 0 ? curMenu[0].menuName : '';
  const pageUrl = curMenu.length > 0 ? curMenu[0].url : path;

  return (
    <div className="authorPageWrapper">
      <NavBar menuList={menuList} curUrl={pageUrl} />
      <section>
        <Header pageName={pageName} />
        {children}
      </section>
    </div>
  );
}
