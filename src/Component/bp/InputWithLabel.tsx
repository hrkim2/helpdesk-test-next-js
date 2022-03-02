import { FunctionComponent } from "react";
import InputText, {Props as InputTextProps } from '../nt/input/InputText';
import InputSelect, {Props as InputSelectProps } from '../nt/input/InputSelect';
import InputFile, {Props as InputFileProps } from '../nt/input/InputFile';
import InputTextArea, {Props as InputTextAreaProps } from '../nt/input/InputTextArea';
import Checkbox, {Props as CheckboxProps } from '../nt/input/Checkbox';
import Radiobox, {Props as RadioboxProps } from '../nt/input/Radiobox';
import Label, { Props as LabelProps } from '../nt/Label';

interface InputTextType extends InputTextProps {
    inputText: boolean;
}
interface InputSelectType extends InputSelectProps {
    inputSelect: boolean;
}
interface InputFileType extends InputFileProps {
    inputFile: boolean;
}
interface InputTextAreaType extends InputTextAreaProps {
    inputTextArea: boolean;
}
interface CheckboxType extends CheckboxProps {
    checkbox: boolean;
}
interface RadioboxType extends RadioboxProps {
    radiobox: boolean;
}
interface Props {
    input: InputTextType | InputSelectType | InputFileType | InputTextAreaType | CheckboxType | RadioboxType;
    label: LabelType;
}
interface LabelType extends LabelProps {
    position: string;
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