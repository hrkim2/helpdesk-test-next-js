import { FunctionComponent } from 'react';

interface Props {
    text?: string;
    forId?: string;
    requied?: boolean;
    addClass?: string;
}

const getClassName = (addClass='')=>{    
    return `mb-1 block select-none tracking-widest ${addClass}`;
}

const getLabelText = (text:string, requied: boolean)=>{
    if(requied){
        return <>
            <span>{text}</span>
            <span className='text-danger pt-2.5 pl-1 text-sm'>*</span>
        </>;
    }else{
        return <span>{text}</span>;
    }
}

/**
 * @param text
 * @param forId
 * @param requied
 * @param addClass
 */
const Label: FunctionComponent<Props> = ({text, forId, requied=false, addClass})=>{
    if(text){
        return (
        <label
            htmlFor={forId}
            className={getClassName(addClass)}
        >
            {getLabelText(text, requied)}
        </label>
        );
    }else{
        return <></>;
    }
}

export default Label;
