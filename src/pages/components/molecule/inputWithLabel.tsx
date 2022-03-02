import { InputFormWithLabel, InputFormWithLabelTop, MultipleInputFormWithLabel } from "Component/bp/InputWithLabel";
import { ChangeEvent } from "react";

export default function InputPlusLabel(){
    return (<>
        <div className='m-3'>
            <span className='italic text-lg font-semibold'>input text with label</span>
            <InputFormWithLabel
                type='inputText'
                id='input_text'
                placeHolder='제목을 입력하세요'
                width='w-7/12'
                labelText='제목'
                labelRequire={true}
                inputMargin='ml-[60px]'
                labelPadding='pl-2 pt-1'
                onChange={(e:ChangeEvent)=>{
                    console.log(e);
                }}
            />
            <InputFormWithLabelTop
                type='inputText'
                id='input_text_top'
                placeHolder='제목을 입력하세요'
                width='w-8/12'
                labelText='제목 상단'
            />
        </div>
        <div className='m-3'>
            <span className='italic text-lg font-semibold'>selecbox with label</span>
            <InputFormWithLabel
                type='inputSelect'
                id='input_select'
                options={[{text : '질문', value: 1}, {text: '요청', value: 2}, {text: '오류', value: 3}]}
                value={1}
                width='w-[100px]'
                labelText='게시글 타입'
                labelRequire={true}
            />
            <InputFormWithLabelTop
                type='inputSelect'
                id='input_select_top'
                width={'w-32'}
                options={[{text : '선택1', value: 1}, {text: '선택2', value:2}]}
                value={1}
                labelText='선택 종류'
            />
        </div>
        <div className='m-3'>
            <span className='italic text-lg font-semibold'>inputfile with label</span>
            <InputFormWithLabel
                type='inputFile'
                id='input_file'
                labelText='첨부파일 업로드'
                inputMargin='ml-[115px]'
                acceptSize={10}
                acceptUnit={'KB'}
                acceptExt={'png, jpg'}
            />
            <InputFormWithLabelTop
                type='inputFile'
                id='input_file_top'
                multiple={true}
                width='w-60'
                labelText='첨부파일 업로드2'
                acceptExt={'pptx, xls'}
            />
        </div>
        <div className='m-3'>
            <span className='italic text-lg font-semibold'>textarea with label</span>
            <InputFormWithLabel
                type='inputTextArea'
                id='textarea'
                placeHolder='내용을 입력하세요'
                width='w-[600px]'
                rows={5}
                labelText='내용'
                labelRequire={true}
                inputMargin='ml-[70px]'
                labelPadding='pl-3'
            />
            <InputFormWithLabelTop
                type='inputTextArea'
                id='textarea_top'
                placeHolder='내용을 입력하세요'
                rows={4}
                labelText='내용 위쪽'
            />
        </div>
        <div className='m-3'>
            <span className='italic text-lg font-semibold'>checkbox with label</span>
            <MultipleInputFormWithLabel
                type='checkbox'
                name='pet'
                options={[{name:'강아지', id:'pet_1'},
                {name:'고양이', id:'pet_2'},
                {name:'햄스터', id:'pet_3'}]}
                value={'pet_2'}
            />
        </div>
        <div className='m-3'>
            <span className='italic text-lg font-semibold'>radio with label</span>
            <MultipleInputFormWithLabel
                type='radiobox'
                name='food'
                options={[{name:'라면', id:'food_1'},
                {name:'돈까스', id:'food_2'}]}
                value={'food_1'}
            />
        </div>
    </>);
}