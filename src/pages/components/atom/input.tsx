import InputText from '../../../Component/atom/InputText';
import InputFile from '../../../Component/atom/InputFile';
import Label from '../../../Component/atom/Label';
import { useState, ChangeEvent } from 'react';

export default function Buttons() {
    const data:any = {title:'state.value'};
    const [inputText, setInputText] = useState(data);
    function updateInputText(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) {
        setInputText({ [e.target.name]: e.target.value });
    }

  return (
    <>
      <div className='m-3'>
          <div className='text-xl font-bold'>INPUT TEXT</div>
          <div className='font-medium my-3'>Label O left</div>
          <div className="relative mt-1">
            <InputText feature={{name:'email-adress-icon', placeHolder:'~예시~', addClass:'peer pl-[80px]'}}/>
            <div className="flex absolute inset-y-0 items-center pointer-events-none text-black/75 peer-focus:text-default peer-focus:brightness-75 duration-300">
                <Label forId='email-adress-icon' text='테스트' requied={true}/>
            </div>
          </div>
          <div className='font-medium my-3'>Label O top</div>
          <div className="relative mt-1">
            <InputText feature={{name:'email-adress', placeHolder:'~예시 자리~', addClass:'peer pt-7'}}/>
            <div className="flex absolute top-0 items-center pointer-events-none text-black/75 peer-focus:text-default peer-focus:brightness-75 duration-300">
                <Label forId='email-adress' text='테스트' requied={true}/>
            </div>
          </div>
          <div className='font-medium my-3'>Label X</div>
          <div className="relative mt-1">
            <Label forId='email2' text='EMAIL'/>
            <InputText feature={{id:'email2', placeHolder:'email@seegene.com'}}/>
          </div>
          <div className="m-3">
            <InputText feature={{value: inputText.title, name: 'title', placeHolder: 'state 관리되는 form'}} onChange={updateInputText}/>
            <InputText feature={{name: 'project Id', placeHolder: 'addClass를 사용했다', addClass:'inline w-40 m-5'}}/>
            <InputText feature={{name: 'project Id', placeHolder: 'addClass를 사용했다2', addClass:'inline w-60'}}/>
          </div>
      </div>
      <div className="m-3">
        <div className='text-xl font-bold'>INPUT FILE</div>
        <div className='font-medium my-3'>multiple</div>
        <InputFile name='file_helpdesk' multiple={true} accept={{ext:'image/*, txt',size:10}} addClass={'w-96'}/>
        <div className='font-medium my-3'>single</div>
        <InputFile id='file_helpdesk' addClass={'w-96'} accept={{ext:'txt, png',size:10}}/>
      </div>
    </>
  );
}