* 설치  
`npm i --save react-draft-wysiwyg draft-js`
* 사용 
  * 설치 후 사용 문제점  
  "window" is not available during server side rendering.
  어쩌구 하는 에러 발생
  next.js에서 window를 인식하지 못하는 문제
  -> dynamic import 방식을 검색하여 적용해봄 -> 안됨
  -> editor 컴포넌트를 별도로 작업한 뒤 export하는데 함수 형태로 해주었더니 됨
```javascript
//Editor.js
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'draft-js/dist/Draft.css';

const Draft = () => (
  <Editor
    height={'300px'}
    placeholder={'입력'}
    toolbar={{
      inline: { inDropdown: true },
      list: { inDropdown: true },
      textAlign: { inDropdown: true },
      link: { inDropdown: true },
      history: { inDropdown: true },
    }}
  />
);

export default Draft;
```
```javascript
//qnaForm2
import dynamic from 'next/dynamic';
const Editor = dynamic(() => import('../inc.js'), { ssr: false });

export default function CreateQna() {
  return (
    <>
      <div className={'editorWrap'}>
        <Editor />
      </div>
      <style jsx>{`
        .editorWrap {
          height: 400px;
          border: 1px solid #efefef;
        }
      `}</style>
    </>
  );
}
```
