import { FunctionComponent } from 'react';

export interface Props {
    name?: string;
    id?: string;
    addClass?: string;
    checked?: boolean;
}

/**
 * @param name
 * @param id
 */
const Radiobox: FunctionComponent<Props> = ({name='checkbox', id='checkbox', addClass, checked=false})=>{
    return <input type="radio" defaultChecked={checked} className={`h-5 w-5 accent-default ${addClass}`} name={name} id={id}/>;
}

export default Radiobox;
