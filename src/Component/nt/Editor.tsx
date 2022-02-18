import { FunctionComponent } from 'react';
import { Editor as TUI, Viewer as TUI_VIEW } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

//TODO 2 에디터 내부 폰트 지정 가능하도록 옵션 확인
//TODO 3 높이, focus 색상 등등 기타 옵션 확인

interface Props {
    initialValue?: string;
}
const Editor: FunctionComponent<Props> = ({initialValue})=>{
    //const editorRef = createRef();

    return <TUI
        placeholder="내용을 작성해주세요."
        initialValue={initialValue}
        previewStyle="vertical"
        height="300px"
        language="ko"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        autofocus={false}
        toolbarItems={[
            ['heading', 'bold', 'italic', 'strike'],
            ['hr', 'quote'],
            ['ul', 'ol'],
            ['table', 'image', 'link'],
            ['scrollSync'],
        ]}
        hideModeSwitch={true}
    />;
}
const Viewer: FunctionComponent<Props> = ({initialValue})=>{
    return <TUI_VIEW
        initialValue={initialValue}
    />;
}
  
export {Editor as DefaultEditor, Viewer as DefaultViewer};