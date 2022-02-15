import { FunctionComponent } from 'react';

interface Props {
    feature: {
        value?: string | number;
        name?: string;
        id?: string;
        placeHolder?: string;
        validate?: string;
        addClass?: string;
    };
    onChange?: Function;
}

const getClassName = (addClass='')=>{
    const text    = 'text-sm text-black opacity-90 focus:opacity-100';
    const size    = 'w-full py-1.5 px-0';
    const feature = 'block bg-transparent border-0 border-b-2 border-cancel focus:outline-none focus:ring-0 focus:border-default';

    return `${text} ${size} ${feature} ${addClass}`;
}

const getValidatePattern = (validType:string='')=>{
    if(validType === 'number'){
        return '[0-9]';
    }else if(validType === 'phone'){
        return '[0-9]{3}-[0-9]{4}-[0-9]{4}';
    }else if(validType.startsWith('length-')){
        const length = validType.substring(validType.indexOf('-')+1);
        return `.{0,${length}}`;
    }else{
        return '';
    }
}

/**
 * @param {Object} feature
 * @param {Function} onChange
 * @description
 * * feature.addClass
 *   * inline, w-## 추가하여 block, w-full 속성 해제 가능
 *   * peer 속성 추가하여 사용 가능
 */
const InputText: FunctionComponent<Props> = ({feature, onChange})=>{
    const {value, name, id, placeHolder, validate, addClass} = feature;

    return <input type={'text'}
        value={value}
        name={name}
        id={id}
        placeholder={placeHolder}
        pattern={getValidatePattern(validate)}
        className={getClassName(addClass)}
        onChange={(e)=>onChange && onChange(e)}
    />;
}

export default InputText;
