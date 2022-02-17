import { FunctionComponent } from 'react';

interface Props {
    name?: string;
    id?: string;
}

/**
 * @param name
 * @param id
 */
const Radiobox: FunctionComponent<Props> = ({name='checkbox', id='checkbox'})=>{
    return <input type="radio" className="h-5 w-5 accent-default" name={name} id={id}/>;
}

export default Radiobox;
