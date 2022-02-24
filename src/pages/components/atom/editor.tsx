import dynamic, { LoaderComponent } from 'next/dynamic';
import { useRef } from 'react';
import { DefaultEditorProps, EditorType } from '../../../Component/nt/Editor';
import { FormSubmitButton } from '../../../Component/nt/Buttons';
import { useRouter } from 'next/router';

const DefaultEditor = dynamic<DefaultEditorProps>(() => import('../../../Component/nt/Editor') as LoaderComponent, { ssr: false });

const TEMPLATE = `<div class="font-seegene"><ul><li><p><b>project id </b>: ###</p></li><li><p><strong>질문 내용</strong> :</p></li></ul>
<p>내용을 작성해 주세요.</p><p><a href="https://nhn.github.io/tui.editor">링크</a> 테스트</p>
<p><a href="naver.com">링크</a> 테스트2</p></div>`;

/**
 * @param content 
 * @returns 
 * @description http 
 */
function convertValidLink(content:string){
  const OPEN = '<a';
  const CLOSE = '</a>';
  let searchIndex = 0;
  
  while((searchIndex=content.indexOf(OPEN, searchIndex))>=0){
    const anchor = content.substring(searchIndex, content.indexOf(CLOSE, searchIndex)+4);
    const indexHref = anchor.indexOf('href="')+6;
    const url = anchor.substring(indexHref, anchor.indexOf('"', indexHref));
  
    if(!url.startsWith('http')){
      const validUrl = `http://${url}`;
      content = content.replace(anchor, anchor.replace(url, validUrl));
    }
  
    searchIndex += anchor.length;
  }
  return content;
}

export default function EditorTemplate() {
  const router = useRouter();
  const content = useRef<EditorType>(null);
  const onSubmit = () => {
    if (!content.current) {
      return;
    }

    const instance = content.current.getInstance();
    const initialValue = convertValidLink(instance.getHTML());

    router.push({
      pathname:`/components/atom/viewer`,
      query: {
        initialValue: initialValue
      }
    }, '/components/atom/viewer');
  }

  const props = {
    initialValue:TEMPLATE,
    placeholder: '프로젝트 id를 추가해주시면 답변에 도움이 됩니다.'
  };

  return <>
    <div className='font-medium text-lg'>😀 질문 내용</div>
    <DefaultEditor {...props} forwardRef={content} />
    <div>
      <FormSubmitButton text='등록' onClick={onSubmit}/>
    </div>
  </>;
}