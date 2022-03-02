import Link from "next/link";
import { FunctionComponent, ReactChild, ReactChildren } from "react";

interface Props {
    hierarchy: {
        text:string;
        seq: number;
        url?: string;
    }[];
    addClass?: string;
}

interface LabelProps {
    text: string;
    url?: string;
    leafLevel: boolean;
    addClass: string;
}

interface LabelLiProps {
    leafLevel: boolean;
    addClass: string;
    children: ReactChild | ReactChildren;
}

interface DivProps {
    addClass: string;
}

const LabelLi: FunctionComponent<LabelLiProps> = ({leafLevel, addClass, children})=>{
    if(leafLevel){
        return <li aria-current="page" className={`text-sm font-medium ${addClass||''}`}>
            {children}
        </li>;
    }else{
        return <li className={`inline-flex items-center font-medium text-sm ${addClass||''}`}>
            {children}
        </li>;
    }
}

const DivString: FunctionComponent<DivProps> = ({addClass=''})=>{
    return <span className={addClass}>/</span>;
}

const Label: FunctionComponent<LabelProps> = ({text, url='', leafLevel, addClass})=>{
    const hasLink = !leafLevel && url!=='';
    const style = (leafLevel ? 'text-black' : 'text-cancel') + ' ' + (hasLink ? 'cursor-pointer hover:text-black' : 'cursor-default');
    const LabelContent = ()=>{
        if(hasLink){
            return <Link href={url}>
                <span className={`mr-1.5 md:mr-2.5 ${style}`}>
                    {text}
                </span>
            </Link>;
        }else{
            return <span className={`mr-1.5 md:mr-2.5 ${style}`}>
                {text}
            </span>;
        }
    }

    return <LabelLi leafLevel={leafLevel} addClass={addClass}>
        <div className="flex items-center">
            <LabelContent/>
            {leafLevel || <DivString addClass={addClass}/>}
        </div>
    </LabelLi>;
}

/**
 * @param hierarchy
 * @param addClass
 */
 const BreadCrumb: FunctionComponent<Props> = ({hierarchy, addClass})=>{
    const list = hierarchy.sort((level_a, level_b)=>level_a.seq-level_b.seq);
    
    return <nav className="flex m-1 px-4 py-3 bg-efefef/50 rounded-xl">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
            {list.map(({seq, text, url=''}, i, _list)=>{
                const leafLevel = _list.length-1 === i ? true : false;

                return <Label
                    key={seq}
                    text={text}
                    leafLevel={leafLevel}
                    url={url}
                    addClass={addClass||''}
                />;
            })}
        </ol>
    </nav>;
}

export default BreadCrumb;