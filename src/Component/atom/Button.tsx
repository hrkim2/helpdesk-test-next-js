import { FunctionComponent } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

interface IconType {
    iname?: IconDefinition;
    position?: string;
}
interface Props {
    text?: string;
    fillType?: string;
    color?: string;
    onclick: Function;
    size?: string;
    icon?: IconType;
    disabled?: boolean;
}

interface buttonClassName {
    [type: string]: {[type2: string]: string};
  }


const BTN_CLASS:buttonClassName = {
    "button": {
        "all": 'font-medium text-center rounded-lg mr-2 mb-2',
        "1": 'hover:opacity-80 hover:saturate-150 focus:opacity-75 focus:saturate-200 focus:text-efefef',
        "0": 'cursor-not-allowed opacity-40',
        "CONTAIN": 'text-white',
        "OUTLINE": 'hover:text-white focus:text-white border disabled:bg-white',
        "xs": 'px-2.5 py-1.5 text-xs',
        "sm": 'px-3   py-2   text-sm',
        "md": 'px-4   py-2.5'
    },
    "contain" : {
        "default":'bg-default hover:bg-default focus:bg-default',
        "success":'bg-success hover:bg-success focus:bg-success',
        "warning":'bg-warning hover:bg-warning focus:bg-warning',
        "danger": 'bg-danger  hover:bg-danger  focus:bg-danger',
        "cancel": 'bg-cancel  hover:bg-cancel  focus:bg-cancel'
    },
    "outline": {
        "default":'text-default border-default hover:bg-default focus:bg-default disabled:text-default',
        "success":'text-success border-success hover:bg-success focus:bg-success disabled:text-success',
        "warning":'text-warning border-warning hover:bg-warning focus:bg-warning disabled:text-warning',
        "danger": 'text-danger  border-danger  hover:bg-danger  focus:bg-danger disabled:text-danger',
        "cancel": 'text-cancel  border-cancel  hover:bg-cancel  focus:bg-cancel disabled:text-cancel'
    }
}

const getButtonClass = (fillType:string, color:string, size:string, disable:boolean)=>{
    const btnClass = BTN_CLASS['button'];
    let type = fillType.toLowerCase();
    type = (type === 'contain' || type !== 'outline') ? 'contain' : 'outline';

    return btnClass["all"]+' '+btnClass[disable?0:1]+' '+btnClass[type.toUpperCase()]+' '+btnClass[size.toLowerCase()]+' '+BTN_CLASS[type][color.toLowerCase()];
}

const getButtonText = (text?:string, icon?:IconType)=>{
    if(!icon || !icon.iname){
        return text || 'button';
    }else{
        let {iname, position} = icon;
        const _icon = <FontAwesomeIcon icon={iname}/>;
        const wrapperClass = text ? 'flex justify-center items-center gap-1' : 'flex';

        position = position || 'left';
        if(position==='left'){
            return <div className={wrapperClass}>
                {_icon}
                <span>{text}</span>
            </div>;
        }else{
            return <div className={wrapperClass}>
                <span>{text}</span>
                {_icon}
            </div>;
        }
        
    }
}


/**
 * @param text
 * @param fillType
 * _contain_ | outline
 * @param color
 * _default_ | success | warning | danger | cancel
 * @param onclick
 * @param size
 * xs | _sm_ | md
 * @param icon
 * { iname, position (_left_ | right) }
 * @param disabled
 */
const Button: FunctionComponent<Props> = ({text, fillType="contain", color='default', onclick, size='sm', icon, disabled=false})=>{
    return (
        <button
            type='button'
            className={`${getButtonClass(fillType, color, size, disabled)}`}
            onClick={()=>onclick()}
            disabled={disabled}
        >{getButtonText(text, icon)}
        </button>
    );
}
  
export default Button;
