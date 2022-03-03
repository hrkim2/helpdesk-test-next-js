import { useRouter } from 'next/router';
import Pagination from 'Component/bp/Pagination';

export default function PaginationTest({meta}:any){
    const {page, pageCount} = meta;
    const router = useRouter();
    const searchPage = (_page?:number)=>{
        router.push(
            {
                pathname: `/components/molecule/pagination`,
                query: {
                    page: _page
                }
            },
            '/components/molecule/pagination',
        );
    }

    const changePage = (page:number)=>searchPage(page);

    return <Pagination page={page} pageCount={pageCount} onChangePage={changePage}/>;
}

export async function getServerSideProps({ query }: any) {
    const page = query.page ? parseInt(query.page) : 1;
    return {
      props: {
        meta:{
            page,
            pageCount: 21,
            total: 128
        }
      },
    };
  }