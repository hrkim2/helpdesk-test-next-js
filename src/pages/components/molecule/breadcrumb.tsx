import BreadCrumb from "Component/bp/breadcrumb";

const menu = {
    one: [
        {text: '🏡 대분류', seq: 0, url: '/components/atom'},
        {text: '소분류', seq: 2, url: '/components/atom/badge'},
        {text: '중분류', seq: 1, url: '/components/atom/input'},
        {text: '메뉴명', seq: 3, url: '/components/atom/button'}
    ],
    two: [
        {text: 'QNA', seq: 0},
        {text: '질문하기', seq: 1}
    ],
    three: [
        {text: 'FAQ', seq: 0}
    ]
}

export default function BreadCrumbs(){
    return (
      <>
        <div key={0} className="m-2">
            <div className="text-lg font-bold">구성도1</div>
            <BreadCrumb hierarchy={menu.one} />
        </div>
        <div key={1} className="m-2">
        <div className="text-lg font-bold">구성도2</div>
            <BreadCrumb hierarchy={menu.two} />
        </div>
        <div key={2} className="m-2">
        <div className="text-lg font-bold">구성도3</div>
            <BreadCrumb hierarchy={menu.three} />
        </div>
      </>
    );
}