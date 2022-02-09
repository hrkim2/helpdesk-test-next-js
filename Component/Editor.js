import { Editor as _Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const Editor = () => {
  return (
    <_Editor
      placeholder="내용을 작성해주세요."
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
    />
  );
};

export default Editor;
