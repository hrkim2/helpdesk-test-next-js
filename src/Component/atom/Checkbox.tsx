import { FunctionComponent } from 'react';

interface Props {
    name?: string;
    id?: string;
}

/**
 * @param name
 * @param id
 */
const Checkbox: FunctionComponent<Props> = ({name='checkbox', id='checkbox'})=>{
    return <input type="checkbox" className="h-4 w-4 accent-default" name={name} id={id}/>;
}

export default Checkbox;
