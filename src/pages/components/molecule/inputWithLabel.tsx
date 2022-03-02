import InputWithLabel from "Component/bp/InputWithLabel";
import { ChangeEvent } from "react";

const inputText = {
    inputText: true,
    feature: {
        id: 'input_text_left',
        placeHolder: '제목을 입력하세요',
        addClass: 'peer ml-[95px] w-9/12'
    }, 
    onChange: (e:ChangeEvent)=>console.log((e.target as HTMLInputElement).value)
}
const inputTextTop = {
    inputText: true,
    feature: {
        id: 'input_text_top',
        placeHolder: '제목을 입력하세요',
        addClass: 'peer mt-7 w-9/12'
    }, 
    onChange: (e:ChangeEvent)=>console.log(e.target)
}
const labelForText = {
    text: '라벨',
    forId: 'input_text_left',
    position: 'left',
    requied: true,
    addClass: 'font-bold text-md pl-5'
}
const labelForTextTop = {
    text: '위쪽 라벨',
    forId: 'input_text_top',
    position: 'top',
    addClass: 'font-bold text-md'
}

const selectbox = {
    inputSelect: true,
    id: 'input_select',
    options: [{text : 'test1', value: 1}, {text: 'test2', value:2}],
    value: 2,
    addClass: 'peer ml-[90px] w-48'
}
const selectboxTop = {
    inputSelect: true,
    id: 'input_select_top',
    options: [{text : '선택1', value: 1}, {text: '선택2', value:2}],
    value: 1,
    addClass: 'peer mt-7 w-48'
}
const labelForSelectbox = {
    text: '테스트종류',
    forId: 'input_select_listbox',
    position: 'left',
    addClass: 'font-bold text-md'
}
const labelForSelectboxTop = {
    text: '선택',
    forId: 'input_select_top_listbox',
    position: 'top',
    addClass: 'font-bold text-md'
}


const textarea = {
    inputTextArea: true,
    id: 'textarea_left',
    placeHolder: '내용을 입력하세요',
    rows: 10,
    addClass: 'peer ml-[95px] w-9/12',
    resize: false,
    onChange: (e:ChangeEvent)=>console.log(e.target)
}
const textareaTop = {
    inputTextArea: true,
    id: 'textarea_top',
    placeHolder: '내용을 입력하세요',
    rows: 10,
    addClass: 'peer mt-7 w-full',
    resize: false,
    onChange: (e:ChangeEvent)=>console.log(e.target)
}
const labelForTextarea = {
    text: '내용',
    forId: 'textarea_left',
    position: 'left',
    requied: true,
    addClass: 'font-bold text-md pl-5'
}
const labelForTextareaTop = {
    text: '내용 위쪽',
    forId: 'textarea_top',
    position: 'top',
    addClass: 'font-bold text-md'
}

const check1_1 = {
    checkbox: true,
    name: 'pet',
    id: 'pet_1',
    addClass: 'peer'
}
const labelForCheck1_1 = {
    text: '강아지',
    forId: 'pet_1',
    position: 'left',
    addClass: 'ml-5 text-md'
}
const check1_2 = {
    checkbox: true,
    name: 'pet',
    id: 'pet_2',
    addClass: 'peer',
    checked: true
}
const labelForCheck1_2 = {
    text: '고양이',
    forId: 'pet_2',
    position: 'left',
    addClass: 'ml-5 text-md'
}
const check1_3 = {
    checkbox: true,
    name: 'pet',
    id: 'pet_3',
    addClass: 'peer'
}
const labelForCheck1_3 = {
    text: '햄스터',
    forId: 'pet_3',
    position: 'left',
    addClass: 'ml-5 text-md'
}

const radio1_1 = {
    radiobox: true,
    name: 'food',
    id: 'food_1',
    addClass: 'peer',
    checked: true
}
const radio1_2 = {
    radiobox: true,
    name: 'food',
    id: 'food_2',
    addClass: 'peer'
}
const labelForRadio1_1 = {
    text: '라면',
    forId: 'food_1',
    position: 'left',
    addClass: 'ml-7 text-md'
}
const labelForRadio1_2 = {
    text: '돈까스',
    forId: 'food_2',
    position: 'left',
    addClass: 'ml-7 text-md'
}

export default function InputPlusLabel(){
    return (<>
        <div className='m-3'>
            <span className='italic text-lg font-semibold'>input text with label</span>
            <InputWithLabel input={inputText} label={labelForText}/>
            <InputWithLabel input={inputTextTop} label={labelForTextTop}/>
        </div>
        <div className='m-3'>
            <span className='italic text-lg font-semibold'>selecbox with label</span>
            <InputWithLabel input={selectbox} label={labelForSelectbox}/>
            <InputWithLabel input={selectboxTop} label={labelForSelectboxTop}/>
        </div>
        <div className='m-3'>
            <span className='italic text-lg font-semibold'>textarea with label</span>
            <InputWithLabel input={textarea} label={labelForTextarea}/>
            <InputWithLabel input={textareaTop} label={labelForTextareaTop}/>
        </div>
        <div className='m-3'>
            <span className='italic text-lg font-semibold'>checkbox with label</span>
            <InputWithLabel input={check1_1} label={labelForCheck1_1}/>
            <InputWithLabel input={check1_2} label={labelForCheck1_2}/>
            <InputWithLabel input={check1_3} label={labelForCheck1_3}/>
        </div>
        <div className='m-3'>
            <span className='italic text-lg font-semibold'>radio with label</span>
            <InputWithLabel input={radio1_1} label={labelForRadio1_1}/>
            <InputWithLabel input={radio1_2} label={labelForRadio1_2}/>
        </div>
    </>);
}