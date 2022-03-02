import { FunctionComponent } from "react";
import InputText, {Props as InputTextProps } from '../nt/input/InputText';
import InputSelect, {Props as InputSelectProps } from '../nt/input/InputSelect';
import InputFile, {Props as InputFileProps } from '../nt/input/InputFile';
import InputTextArea, {Props as InputTextAreaProps } from '../nt/input/InputTextArea';
import Checkbox, {Props as CheckboxProps } from '../nt/input/Checkbox';
import Radiobox, {Props as RadioboxProps } from '../nt/input/Radiobox';
import Label, { Props as LabelProps } from '../nt/Label';

interface InputTextType extends InputTextProps {
    inputText?: boolean;
}
interface InputSelectType extends InputSelectProps {
    inputSelect?: boolean;
}
interface InputFileType extends InputFileProps {
    inputFile?: boolean;
}
interface InputTextAreaType extends InputTextAreaProps {
    inputTextArea?: boolean;
}
interface CheckboxType extends CheckboxProps {
    checkbox?: boolean;
}
interface RadioboxType extends RadioboxProps {
    radiobox?: boolean;
}
interface Props {
    input: InputTextType | InputSelectType | InputFileType | InputTextAreaType | CheckboxType | RadioboxType;
    label: LabelType;
}
interface LabelType extends LabelProps {
    position?: string;
}

/**
 * @param text
 */
 const InputWithLabel: FunctionComponent<Props> = ({input, label})=>{
    const InputElement = ()=>{
        if('inputText' in input){
            return <InputText {...input as any} />;
        }else if('inputSelect' in input){
            return <InputSelect {...input as any}/>;
        }else if('inputFile' in input){
            return <InputFile {...input as any}/>;
        }else if('inputTextArea' in input){
            return <InputTextArea {...input as any}/>;
        }else if('checkbox' in input){
            return <Checkbox {...input as any}/>;
        }else if('radiobox' in input){
            return <Radiobox {...input as any}/>;
        }else{
            return null;
        }
    }

    const LabelElement = ()=>{
        return <Label
            {...label as any}
            onClick={()=>
                'inputSelect' in input &&
                (document.querySelector(`#${label.forId} button`) as HTMLButtonElement)?.click()
            }
        />;
    }

    if(label.position==='left'){
        return <div className="relative mt-1">
            <InputElement />
            <div className="flex absolute inset-y-0 items-center text-black/75 peer-focus:text-default peer-focus:brightness-75 duration-300">
                <LabelElement/>
            </div>
        </div>;
    }else{
        return <div className="relative mt-1">
            <InputElement />
            <div className="flex absolute -top-6 items-center text-black/75 peer-focus:text-default peer-focus:brightness-75 duration-300">
                <LabelElement/>
            </div>
        </div>;
    }
}

export default InputWithLabel;

const POSITION = {
    LEFT: 'left',
    TOP: 'top'
};
const LABEL_STYLE = 'font-semibold text-sm';
/**
 * 라벨이 왼쪽에 생성되는 input text form element
 */
export function InputFormWithLabel(props: any){
    let inputProp, labelProp;
    const {type, ...others} = props;

    if(type==='inputText'){
        const {id, placeHolder, width, labelText,
              labelRequire, inputMargin, labelPadding, onChange} = others;
        
        inputProp = {
            inputText: true,
            feature: {
                id: id,
                placeHolder: placeHolder,
                addClass: `peer ${inputMargin || 'ml-[100px]'} ${width}`
            },
            onChange: onChange
        }
        labelProp = {
            text: labelText,
            forId: id,
            position: POSITION.LEFT,
            requied: labelRequire||false,
            addClass: `${LABEL_STYLE} ${labelPadding || ''}`
        }
    }else if(type==='inputSelect'){
        const {id, width, options, value, labelText, labelRequire, inputMargin, labelPadding} = others;
              
        inputProp = {
            inputSelect: true,
            id: id,
            options: options,
            value: value,
            addClass: `peer ${inputMargin||'ml-[100px]'} ${width||'w-48'}`
        }
        labelProp = {
            text: labelText,
            forId: `${id}_listbox`,
            position: POSITION.LEFT,
            requied: labelRequire||false,
            addClass: `${LABEL_STYLE} ${labelPadding}`
        }
    }else if(type==='inputFile'){
        const {id, multiple, width, labelText, labelRequire, inputMargin, labelPadding
        , acceptSize, acceptUnit, acceptExt} = others;

        inputProp = {
            inputFile: true,
            id: id,
            multiple: multiple||false,
            accept: {
                size: acceptSize,
                sizeUnit: acceptUnit,
                ext: acceptExt
            },
            addClass: `peer ${inputMargin||'ml-[100px]'} ${width||'w-48'}`
        }
        labelProp = {
            text: labelText,
            forId: id,
            position: POSITION.LEFT,
            requied: labelRequire||false,
            addClass: `${LABEL_STYLE} ${labelPadding}`
        }
    }else if(type==='inputTextArea'){
        const {id, placeHolder, width, rows, labelText, labelRequire, inputMargin, labelPadding, onChange} = others;

        inputProp = {
            inputTextArea: true,
            id: id,
            placeHolder: placeHolder||'',
            rows: rows||10,
            addClass: `peer ${inputMargin||'ml-[100px]'} ${width||'w-96'}`,
            resize: false,
            onChange: onChange
        }
        labelProp = {
            text: labelText,
            forId: id,
            position: POSITION.LEFT,
            requied: labelRequire||false,
            addClass: `${LABEL_STYLE} ${labelPadding}`
        }
    }else{
        inputProp={};
        labelProp={};
    }

    return <InputWithLabel input={inputProp} label={labelProp}/>;
}
/**
 * 라벨이 위쪽에 생성되는 input text form element
 */
export function InputFormWithLabelTop(props: any){
    let inputProp, labelProp;
    const {type, ...others} = props;

    if(type==='inputText'){
        const {id, placeHolder, width, labelText,
              labelRequire, inputMargin, labelPadding, onChange} = others;

        inputProp = {
            inputText: true,
            feature: {
                id: id,
                placeHolder: placeHolder,
                addClass: `peer ${inputMargin || 'mt-7'} ${width}`
            },
            onChange: onChange
        }
        labelProp = {
            text: labelText,
            forId: id,
            position: POSITION.TOP,
            requied: labelRequire||false,
            addClass: `${LABEL_STYLE} ${labelPadding || ''}`
        }
    }else if(type==='inputSelect'){
        const {id, width, options, value, labelText, labelRequire, inputMargin, labelPadding} = others;
        inputProp = {
            inputSelect: true,
            id: id,
            options: options,
            value: value,
            addClass: `peer ${inputMargin||'mt-7'} ${width||'w-48'}`
        }
        labelProp = {
            text: labelText,
            forId: `${id}_listbox`,
            position: POSITION.TOP,
            requied: labelRequire||false,
            addClass: `${LABEL_STYLE} ${labelPadding}`
        }
    }else if(type==='inputFile'){
        const {id, multiple, width, labelText, labelRequire, inputMargin, labelPadding
            , acceptSize, acceptUnit, acceptExt} = others;
    
        inputProp = {
            inputFile: true,
            id: id,
            multiple: multiple||false,
            accept: {
                size: acceptSize,
                sizeUnit: acceptUnit,
                ext: acceptExt
            },
            addClass: `peer ${inputMargin||'mt-7'} ${width||'w-48'}`
        }
        labelProp = {
            text: labelText,
            forId: id,
            position: POSITION.TOP,
            requied: labelRequire||false,
            addClass: `${LABEL_STYLE} ${labelPadding}`
        }
    }else if(type==='inputTextArea'){
        const {id, placeHolder, width, rows, labelText, labelRequire, inputMargin, labelPadding, onChange} = others;
    
        inputProp = {
            inputTextArea: true,
            id: id,
            placeHolder: placeHolder||'',
            rows: rows||10,
            addClass: `peer ${inputMargin||'mt-7'} ${width||'w-96'}`,
            resize: false,
            onChange: onChange
        }
        labelProp = {
            text: labelText,
            forId: id,
            position: POSITION.TOP,
            requied: labelRequire||false,
            addClass: `${LABEL_STYLE} ${labelPadding}`
        }
    }else{
        inputProp={};
        labelProp={};
    }

    return <InputWithLabel input={inputProp} label={labelProp}/>;
}

export function MultipleInputFormWithLabel(props: any){
    let list: {inputProp:{},labelProp:{}}[] = [];
    const {type, ...others} = props;
    const _type = type==='checkbox' || type==='radiobox' ? type : '';

    if(_type.length>0){
        const {name, options, value} = others;
        list = options.map((option: { id: any; name: any; })=>{
            const defaultChecked = option.id === value;

            return {
                inputProp:{
                    [_type]: true,
                    name: name,
                    id: option.id,
                    checked: defaultChecked,
                    addClass: 'peer'
                },
                labelProp:{
                    text: option.name,
                    forId: option.id,
                    position: POSITION.LEFT,
                    addClass: 'ml-6 text-sm'
                }
            }
        });
    }else{
        list = [];
    }

    return <>
    {list?.map((item, i)=>{
        return <InputWithLabel key={i} input={item.inputProp} label={item.labelProp}/>;
    })}
    </>;
}