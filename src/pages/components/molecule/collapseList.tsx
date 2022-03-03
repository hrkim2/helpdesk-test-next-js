import dynamic, { LoaderComponent } from 'next/dynamic';
import { ViewerProps } from '/Component/nt/EditorViewer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const DefaultViewer = dynamic<ViewerProps>(() => import('../../../Component/nt/EditorViewer') as LoaderComponent, { ssr: false });

const dataList = [
    {boardId: 0, title: 'What is Flowbite?', boardType: 0, boardTypeName: '사용법', content: `<p>Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
    <p>Check out this guide to learn how to <a href="https://flowbite.com/docs/getting-started/introduction/">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>`},
    {boardId: 1, title: 'Is there a Figma file available?', boardType: 1, boardTypeName: '에러조치', content: `<p>Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
    <p>Check out the <a href="https://flowbite.com/figma/">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>`},
    {boardId: 2, title: 'What are the differences between Flowbite and Tailwind UI?', boardType: 0, boardTypeName: '사용법', content: `<p>The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
    <p>However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
    <p>Learn more about these technologies:</p>
    <ul className="pl-5 list-disc text-black">
        <li><a href="https://flowbite.com/pro/" className="text-default/50 hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-default/50 hover:underline">Tailwind UI</a></li>
    </ul>`},
    {boardId: 3, title: 'What is Flowbite?', boardType: 0, boardTypeName: '사용법', content: `<p>Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
    <p>Check out this guide to learn how to <a href="https://flowbite.com/docs/getting-started/introduction/">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>`},
    {boardId: 4, title: 'Is there a Figma file available?', boardType: 1, boardTypeName: '에러조치', content: `<p>Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
    <p>Check out the <a href="https://flowbite.com/figma/">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>`},
    {boardId: 5, title: 'What are the differences between Flowbite and Tailwind UI?', boardType: 0, boardTypeName: '사용법', content: `<p>The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
    <p>However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
    <p>Learn more about these technologies:</p>
    <ul className="pl-5 list-disc text-black">
        <li><a href="https://flowbite.com/pro/" className="text-default/50 hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-default/50 hover:underline">Tailwind UI</a></li>
    </ul>`}
];

function getHeaderClassName(position:string){
    const def = 'flex justify-between items-center p-5 w-full font-medium text-left text-black border border-cancel/50 hover:bg-default/50 hover:brightness-200 focus:ring-1 focus:ring-default/10';
    const borderStyle = position==='top' ? 'rounded-t-xl' : '';
    return `${def} ${borderStyle}`;
}

const HeadButton = (props:any)=>{
    const {children, ...others} = props;

    return <button
        {...others}
        type="button"
        onClick={(e)=>{
            const target = e.target as HTMLElement;
            const targetBody = document.querySelector(`${target.dataset.accordionTarget}`);
            const expandValueForTarget = target.ariaExpanded;
            
            if(targetBody){
                const activeStyle = (document.querySelector('div[data-accordion="collapse"]') as HTMLElement).dataset.activeClasses;

                if(expandValueForTarget==='false'){
                    const expandedElement = document.querySelector('button[aria-expanded="true"]') as HTMLElement;
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
        }}
    >
        {children}
    </button>;
}

const FaAngleDown = ({addClass}:any)=> <FontAwesomeIcon className={`w-5 h-5 ${addClass||''}`} icon={faAngleDown}/>;

export default function CollapseListText(){
    return <div className='m-3'>
        <div className='italic text-lg text-bold'>Collapse List</div>
        <div className='-space-y-px' data-accordion="collapse" data-active-classes="bg-default/30 brightness-150">
            {dataList.map((data, i)=>{
                const headId = `accordion-heading-${data.boardId}`;
                const bodyId = `accordion-body-${data.boardId}`;

                return <div key={data.boardId} aria-role='collapse-item'>
                    <h2 id={headId}>
                        <HeadButton className={getHeaderClassName(i===0 ? 'top': '')} data-accordion-target={`#${bodyId}`} aria-expanded="false">
                            {data.title}
                            <FaAngleDown/>
                        </HeadButton>
                    </h2>
                    <div id={bodyId} className="hidden" aria-labelledby={headId}>
                        <div className="p-5 border border-b-0 border-cancel/20">
                            <DefaultViewer initialValue={data.content as string} />
                        </div>
                    </div>
                </div>;
            })}
        </div>
    </div>;
}
