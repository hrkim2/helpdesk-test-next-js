import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

export default function CreateQna() {
  const onClick = () => {};
  return (
    <>
      <Editor
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
      <input type="button" onclick={onClick()} value="저장" />
    </>
  );
}
