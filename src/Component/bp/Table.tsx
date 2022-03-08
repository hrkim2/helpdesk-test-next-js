import Checkbox from "Component/nt/input/Checkbox";
import { FunctionComponent } from "react";

interface Props {
    id: string,
    colGroup: {
        key: string;
        label?: string;
        align?: string;
        addClass?: string | Function;
        formatter?: string | Function;
        onClick?: Function;
    }[];
    data?: {
        [key:string]: string;
    }[];
    onClick?: Function;
}

const TABLE_WRAPPER = (props:any)=>{
    return (
    <div className="flex flex-col">
        <div className="overflow-x-auto border border-default/30 sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden">
                    {props.children}
                </div>
            </div>
        </div>
    </div>);
}

const Thead:FunctionComponent<Props> = ({id, colGroup})=>{
    return <thead id={`${id}_thead`} className="bg-default/20 font-medium">
        <tr>
            {colGroup.map((colHead, i)=>{
                if(colHead.formatter==='checkbox'){
                    return <th key={i} scope="col" className="p-4">
                        <div className="flex items-center">
                            <Checkbox id="checkbox-all" onClick={(e:Event & {target: HTMLInputElement})=>{
                                const targetChecked = e.target.checked;                                    
                                const allCheck = document.querySelector(`#${id}_tbody`)?.querySelectorAll('input[type=checkbox]');
                                allCheck?.forEach(check=>{
                                    const _ = check as HTMLInputElement;
                                    const checked = _.checked;
                                    _.checked = targetChecked!==checked ? !checked : checked;
                                });
                            }}/>
                        </div>
                    </th>;
                }else{
                    return <th key={i} scope="col" className="py-3 px-6 tracking-wider text-left cursor-default">
                        {colHead.label}
                    </th>;
                }
            })}
        </tr>
    </thead>;
}

const Tbody:FunctionComponent<Props> = ({id, colGroup, data, onClick})=>{
    if(data && data.length>0){
        return <tbody
            id={`${id}_tbody`}
            className="bg-white divide-y divide-default/30 whitespace-pre-wrap"
        >
            {data?.map((item, i)=>{
                return <tr
                    key={`tr${i}`}
                    id={`${id}_tbody_tr${i}`}
                    className="hover:bg-default/40 hover:brightness-150"
                >
                    {colGroup.map((colHead, j)=>{
                        const {key, formatter, addClass} = colHead;

                        if(formatter==='checkbox'){
                            return <td
                                key={`td${i}_${j}`}
                                id={`${id}_tbody_tr${i}_td${j}`}
                                className="py-3 px-4 w-4"
                            >
                                <div className="flex items-center">
                                    <Checkbox
                                        id={`${id}_tbody_checkbox_tr${i}_td${j}`}
                                        onClick={(e:Event)=>{
                                            if(colHead.onClick){
                                                colHead.onClick({
                                                    checkbox: e.target as HTMLInputElement,
                                                    item,
                                                    index: i
                                                });
                                            }
                                        }}
                                    />
                                </div>
                            </td>;
                        }else{
                            const _addClass = !addClass ? '' : typeof addClass === 'string' ? addClass : addClass({value: item[key], item});
                            
                            return <td
                                key={`td${i}_${j}`}
                                id={`${id}_tbody_tr${i}_td${j}`}
                                className={`py-3 px-6 ${_addClass}`}
                                onClick={()=>onClick&&onClick({colIndex: j, value: item[key], key, item})}
                            >
                                {!formatter ? item[key] : getValueWithFormat(item[key], formatter, item)}
                            </td>;
                        }
                    })}
                </tr>;
            })}
        </tbody>;
    }else{
        const colspan = colGroup ? colGroup.length : 1;

        return <tbody id={`${id}_tbody`} className="bg-white divide-y divide-default/30 whitespace-pre-wrap">
            <tr>
                <td colSpan={colspan} className='px-3 py-10 text-center cursor-default'>
                    조회된 데이터가 없습니다.
                </td>
            </tr>
        </tbody>;
    }
}

function getValueWithFormat(value:string|number, formatter:string|Function, item:object){
    if(typeof formatter === 'string'){
        let returnValue;
        switch(formatter){
            case 'number':
                if(typeof value === 'number'){
                    returnValue = new Intl.NumberFormat().format(value);
                }else{
                    let [integer, decimal] = value.split('.');
                    decimal = decimal ? '.'+decimal : '';
                    returnValue = new Intl.NumberFormat().format(parseInt(integer)) + decimal;
                }                
                break;
            defualt:
                returnValue = value;
        }
        return returnValue;
    }else{
        return formatter({value, item});
    }
}

const Table: FunctionComponent<Props> = ({id, colGroup, data, onClick})=>{
    return <>
        <TABLE_WRAPPER>
            <table className="min-w-full divide-y divide-default/60 table-fixed text-sm text-black">
                <Thead id={id} colGroup={colGroup} />
                <Tbody id={id} colGroup={colGroup} data={data} onClick={onClick}/>
            </table>
        </TABLE_WRAPPER>
    </>;
}

export default Table;
