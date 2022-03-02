import { FunctionComponent } from 'react';

export interface Props {
    text?: string;
    forId?: string;
    requied?: boolean;
    addClass?: string;
    onClick?: Function;
}

const getClassName = (addClass='', requied: boolean)=>{  
    const requireMark = requied ? "after:content-['*'] after:ml-0.5 after:text-danger after:text-sm" : "";
    return `mb-1 block select-none tracking-widest ${addClass} ${requireMark}`;
}

/**
 * @param text
 * @param forId
 * @param requied
 * @param addClass
 */
const Label: FunctionComponent<Props> = ({text, forId, requied=false, addClass, onClick})=>{
    if(text){
        return (
        <label
            htmlFor={forId}
            className={getClassName(addClass, requied)}
            onClick={()=>onClick&&onClick()}
        >
            {text}
        </label>
        );
    }else{
        return <></>;
    }
}

export default Label;
