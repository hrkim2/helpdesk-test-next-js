import { FunctionComponent } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

interface Props {
    page: number;
    pageCount: number;
    onChangePage: Function;
}
const COUNT_PAGE = 5;
const FaAngleLeft = ()=> <FontAwesomeIcon className='w-2 h-3 py-0.5' icon={faAngleLeft}/>;
const FaAngleRight = ()=> <FontAwesomeIcon className='w-3 h-3 py-0.5' icon={faAngleRight}/>;
const FaAnglesLeft = ()=> <FontAwesomeIcon className='w-3 h-3 py-0.5' icon={faAnglesLeft}/>;
const FaAnglesRight = ()=> <FontAwesomeIcon className='w-3 h-3 py-0.5' icon={faAnglesRight}/>;
const PAGE_CLASS = {
    DEFAULT: 'cursor-pointer py-1.5 px-3 leading-tight text-black/50 bg-white border border-y-2 border-cancel/30 hover:bg-cancel/10 hover:text-black/70',
    PAGE: 'cursor-pointer py-1.5 px-3 leading-tight text-default/70 bg-default/10 border-2 border-default/30 hover:bg-default/20 hover:text-default/90',
    ANGLES: (direction:string, superLevel?:string) => {
        const _ = 'block py-1 px-2 leading-tight text-black/50 bg-white border border-y-2 border-cancel/30';
        const _h = 'hover:bg-cancel/10 hover:text-black/70';
        const _c = 'cursor-pointer';

        if(superLevel===undefined){
            return `${_} ${_h} ${_c}`;
        }else{
            const dir = direction==='left' ? 'rounded-l-md' : 'rounded-r-md';
            const h = superLevel.length>0 ? '' : _h;
            const c = superLevel.length>0 ? superLevel : _c;

            return `${_} ${h} ${dir} ${c}`;
        }
    }
}

const Pagination: FunctionComponent<Props> = ({page, pageCount, onChangePage})=>{
    const startNumber = Math.floor((page-1)/COUNT_PAGE)*COUNT_PAGE + 1;
    let endNumber = (startNumber+COUNT_PAGE)-1;
        endNumber = endNumber<pageCount ? endNumber : pageCount;
    const superPrevious = startNumber === 1 ? 'hidden' : '';
    const superNext     = endNumber === pageCount ? 'hidden' : '';
    const previous      = 1 === page ? 'cursor-not-allowed' : superPrevious==='hidden' ? '' : undefined;
    const next          = pageCount === page ? 'cursor-not-allowed' : superNext==='hidden' ? '' : undefined;
    let pageList:number[] = [];

    for(let i=startNumber; i<=endNumber; i++){
        pageList.push(i);
    }

    const Li = (props:any)=>{
        const {children, className, onClick, ...others} = props;
        const clickable = className.indexOf('not-allowed')>=0 ? false : true;

        return <li
            {...others}
            className={className}
            onClick={(e)=>{
                let _target = e.target as HTMLElement;
                const targetName = _target.nodeName;
                
                _target = targetName!=='LI' ? _target.parentElement as HTMLElement : _target;
                clickable&&onClick(_target.dataset.page);
            }}
        >
          {children}
        </li>;
    }

    return (<>
    <nav aria-label="pagination" className='m-3'>
        <ul className="inline-flex items-center text-xs">
            <Li
                className={PAGE_CLASS.ANGLES('left', superPrevious)}
                data-page={1}
                onClick={onChangePage}
            >
                <span className="sr-only">SuperPrevious</span>
                <FaAnglesLeft/>
            </Li>
            <Li
                className={PAGE_CLASS.ANGLES('left', previous)}
                data-page={startNumber-5<=0 ? 1 : startNumber-5}
                onClick={onChangePage}
            >
                <span className="sr-only">Previous</span>
                <FaAngleLeft/>
            </Li>
            {pageList.map(_page=>{
                return _page===page ? 
                (<Li key={_page} aria-current="page"
                    className={PAGE_CLASS.PAGE}
                    data-page={_page}
                    onClick={onChangePage}
                >
                    {_page}
                </Li>) :
                (<Li key={_page}
                    className={PAGE_CLASS.DEFAULT}
                    data-page={_page}
                    onClick={onChangePage}
                >
                    {_page}
                </Li>);
            })}
            <Li
                className={PAGE_CLASS.ANGLES('right', next)}
                data-page={endNumber+5>pageCount ? pageCount : endNumber+5}
                onClick={onChangePage}
            >
                <span className="sr-only">Next</span>
                <FaAngleRight/>
            </Li>
            <Li
                className={PAGE_CLASS.ANGLES('right', superNext)}
                data-page={pageCount}
                onClick={onChangePage}
            >
                <span className="sr-only">SuperNext</span>
                <FaAnglesRight/>
            </Li>
        </ul>
    </nav>
    </>);
}

export default Pagination;
