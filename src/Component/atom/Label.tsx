import { FunctionComponent } from 'react';

interface Props {
    text?: string;
    forId?: string;
    position?: string;
    requied?: boolean;
}

const getClassName = (position:string)=>{
    const classSufix = position==='block' ? 'mb-1 block' : 'mr-2';

    return `text-black select-none tracking-widest ${classSufix}`;
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
 * @param position block | inline
 * @param requied
 */
const Label: FunctionComponent<Props> = ({text, forId, position='block', requied=false})=>{
    if(text){
        return (
        <label
            htmlFor={forId}
            className={getClassName(position)}
        >
            {getLabelText(text, requied)}
        </label>
        );
    }else{
        return <></>;
    }
}

export default Label;
