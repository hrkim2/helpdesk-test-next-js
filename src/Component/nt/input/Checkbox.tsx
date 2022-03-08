import { FunctionComponent } from 'react';

export interface Props {
    name?: string;
    id?: string;
    addClass?: string;
    checked?: boolean;
    onClick?: Function;
}

/**
 * @param name
 * @param id
 */
const Checkbox: FunctionComponent<Props> = ({name='checkbox', id='checkbox', addClass='', checked=false, onClick})=>{
    return <input type="checkbox"
        defaultChecked={checked}
        className={`h-4 w-4 accent-default ${addClass}`}
        name={name}
        id={id}
        onClick={(e)=>onClick&&onClick(e)}
    />;
}

export default Checkbox;
