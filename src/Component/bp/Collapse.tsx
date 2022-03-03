import { FunctionComponent } from "react";
import dynamic, { LoaderComponent } from 'next/dynamic';
import { ViewerProps } from '/Component/nt/EditorViewer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const DefaultViewer = dynamic<ViewerProps>(() => import('../nt/EditorViewer') as LoaderComponent, { ssr: false });

interface Props {
    dataList: {
        itemId:string|number;
        title: string;
        content: string;
    }[]
}

function getHeaderClassName(position:string){
    const def = 'flex justify-between items-center p-5 w-full font-medium text-left text-black border border-cancel/50 hover:bg-default/50 hover:brightness-200 focus:ring-1 focus:ring-default/10';
    const borderStyle = position==='top' ? 'rounded-t-xl' : '';
    return `${def} ${borderStyle}`;
}

const HeadButton = (props:any)=>{
    const {children, ...others} = props;

    return <>
    <button
        {...others}
        type="button"
        onClick={(e)=>onClickHeader(e.target as HTMLButtonElement)}
    >
        {children}
    </button>
    </>;
}

function onClickHeader(target:HTMLButtonElement){
    const targetBody = document.querySelector(`${target.dataset.accordionTarget}`);
    const expandValueForTarget = target.ariaExpanded;
    
    if(targetBody){
        const activeStyle = (document.querySelector('div[data-accordion="collapse"]') as HTMLElement).dataset.activeClasses;

        if(expandValueForTarget==='false'){
            const expandedElement = document.querySelector('button[aria-expanded="true"]') as HTMLButtonElement;
            const expandedElementBody = expandedElement ? document.querySelector(`${expandedElement.dataset.accordionTarget}`) : null;

            if(expandedElement && expandedElementBody){
                expandedElement.ariaExpanded = 'false';
                expandedElement.className = expandedElement.className.replace(activeStyle||'', '');
                expandedElementBody.className = 'hidden';
            }
            
            target.ariaExpanded = 'true';
            target.className += ` ${activeStyle}`;
            targetBody.className = '';
        }else{
            target.ariaExpanded = 'false';
            target.className = target.className.replace(activeStyle||'', '');
            targetBody.className = 'hidden';
        }
    } 
}

const FaAngleDown = ({addClass}:any)=> <FontAwesomeIcon className={`w-5 h-5 ${addClass||''}`} icon={faAngleDown}/>;

const Collapse: FunctionComponent<Props> = ({dataList})=>{
    
    return (<>
        <div className='-space-y-px' data-accordion="collapse" data-active-classes="bg-default/30 brightness-150">
            {dataList.map((data, i)=>{
                const headId = `accordion-heading-${data.itemId}`;
                const bodyId = `accordion-body-${data.itemId}`;

                return <div key={data.itemId}>
                    <h2 id={headId}>
                        <HeadButton className={getHeaderClassName(i===0 ? 'top': '')} data-accordion-target={`#${bodyId}`} aria-expanded="false">
                            {data.title}
                            <FaAngleDown/>
                        </HeadButton>
                    </h2>
                    <div id={bodyId} className="hidden" data-item-id={data.itemId}>
                        <div className="p-5 border border-b-0 border-cancel/20">
                            <DefaultViewer initialValue={data.content} />
                        </div>
                    </div>
                </div>;
            })}
        </div>
    </>);
}

export default Collapse;
