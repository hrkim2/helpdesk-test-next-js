import { FunctionComponent } from 'react';

interface Props {
    name?: string;
    id?: string;
    placeHolder?: string;
    value?: string;
    rows?: number;
    addClass?: string;
    onChange?: Function;
    resize?: boolean;
}

function getClassName(addClass:string='', resize:boolean){
    const addList = addClass.split(' ');
    const width   = addList.filter(classname=>classname.startsWith('w-')).length>0 ? '' : 'w-full';
    const text    = addList.filter(classname=>classname.startsWith('text-')).length>0 ? '' : 'text-sm text-black';
    const _resize = resize ? '' : 'resize-none';

    const feature = `block p-2.5 opacity-80 bg-efefef rounded-md border border-2 border-cancel`;
    const focus   = `focus:outline-none focus:border-default focus:opacity-100`;
    
    return `${width} ${text} ${feature} ${focus} ${addClass} ${_resize}`;
}

/**
 * @param name
 * @param id
 * @param placeHolder
 * @param value
 * @param rows
 * @param addClass
 * @param onChange
 * @param resize
 */
const InputTextArea: FunctionComponent<Props> = ({name, id, placeHolder, value, rows=5, addClass, onChange, resize=true})=>{
    return <textarea
        name={name}
        id={id}
        placeholder={placeHolder}
        value={value}
        rows={rows}
        className={getClassName(addClass, resize)}
        onChange={(e)=>onChange&&onChange(e)}
    />;
}

export default InputTextArea;
