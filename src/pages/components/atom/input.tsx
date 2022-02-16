import InputText from '../../../Component/atom/InputText';
import InputFile from '../../../Component/atom/InputFile';
import InputTextArea from '../../../Component/atom/InputTextArea';
import Label from '../../../Component/atom/Label';
import { useState, ChangeEvent } from 'react';

export default function Inputs() {
    const [title, setTitle] = useState('state.value');
    const [content, setContent] = useState('state.content');

    function updateInputText({target}: ChangeEvent<HTMLInputElement>) {
      setTitle(target.value);
    }
    function updateTextArea({target}: ChangeEvent<HTMLTextAreaElement>) {
      setContent(target.value);
    }

  return (
    <>
      <div className='m-3'>
          <div className='text-xl font-bold'>INPUT TEXT</div>
          <div className='font-medium my-3'>Label O left</div>
          <div className="relative mt-1">
            <InputText feature={{name:'email-adress-icon', placeHolder:'~예시~', addClass:'peer pl-[80px]'}} onChange={()=>{}}/>
            <div className="flex absolute inset-y-0 items-center pointer-events-none text-black/75 peer-focus:text-default peer-focus:brightness-75 duration-300">
                <Label forId='email-adress-icon' text='테스트' requied={true}/>
            </div>
          </div>
          <div className='font-medium my-3'>Label O top</div>
          <div className="relative mt-1">
            <InputText feature={{name:'email-adress', placeHolder:'~예시 자리~', addClass:'peer pt-7'}} onChange={()=>{}}/>
            <div className="flex absolute top-0 items-center pointer-events-none text-black/75 peer-focus:text-default peer-focus:brightness-75 duration-300">
                <Label forId='email-adress' text='테스트' requied={true}/>
            </div>
          </div>
          <div className='font-medium my-3'>Label X</div>
          <div className="relative mt-1">
            <Label forId='email2' text='EMAIL'/>
            <InputText feature={{id:'email2', placeHolder:'email@seegene.com'}} onChange={()=>{}}/>
          </div>
          <div className="m-3">
            <InputText feature={{value: title, name: 'title', placeHolder: 'state 관리되는 form'}} onChange={updateInputText}/>
            <InputText feature={{name: 'project Id', placeHolder: 'addClass를 사용했다', addClass:'inline w-40 m-5'}} onChange={()=>{}}/>
            <InputText feature={{name: 'project Id', placeHolder: 'addClass를 사용했다2', addClass:'inline w-60'}} onChange={()=>{}}/>
          </div>
      </div>
      <div className="m-3 hidden">
        <div className='text-xl font-bold'>INPUT FILE</div>
        <div className='font-medium my-3'>multiple</div>
        <InputFile name='file_helpdesk' multiple={true} accept={{ext:'image/*, txt',size:10}} addClass={'w-96'}/>
        <div className='font-medium my-3'>single</div>
        <InputFile id='file_helpdesk' addClass={'w-96'} accept={{ext:'txt, png',size:10}}/>
      </div>
      <div className="m-3">
        <div className='text-xl font-bold'>TEXT AREA</div>
        <InputTextArea
          name='content'
          placeHolder='place holder'
          value={content}
          onChange={updateTextArea}
          addClass={'w-96'}
          rows={3}
          resize={false}
        />
      </div>
    </>
  );
}