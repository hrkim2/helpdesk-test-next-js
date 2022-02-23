import dynamic, { LoaderComponent } from 'next/dynamic';
import React, { useRef } from 'react';
import { DefaultEditorProps, EditorType } from '../../../Component/nt/Editor';
import { FormSubmitButton } from '../../../Component/nt/Buttons';

const DefaultEditor = dynamic<DefaultEditorProps>(() => import('../../../Component/nt/Editor') as LoaderComponent, { ssr: false });

const TEMPLATE = `<ul><li><p><b>project id </b>: ###</p></li><li><p><strong>질문 내용</strong> :</p></li></ul>
<p>내용을 작성해 주세요.</p>`;

export default function EditorTemplate() {
  const content = useRef<EditorType>(null);
  const onSubmit = () => {
    if (!content.current) {
      return;
    }
    
    const instance = content.current.getInstance();
    return console.log(instance.getHTML());
  }

  const props = {
    initialValue:TEMPLATE,
    placeholder: '프로젝트 id를 추가해주시면 답변에 도움이 됩니다.'
  };

  return <>
    <div className='font-medium text-lg'>😀 질문 내용</div>
    <DefaultEditor {...props} forwardRef={content} />
    <div className='m-3'>
      {/* <Viewer initialValue={TEMPLATE}/> */}
    </div>
    <div>
      <FormSubmitButton text='등록' onClick={onSubmit}/>
    </div>
  </>;
}