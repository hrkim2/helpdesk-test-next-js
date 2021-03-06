import { forwardRef, RefObject } from 'react';
import { Editor, EditorProps } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

export interface DefaultEditorProps extends EditorProps{
  forwardRef?: RefObject<Editor>;
};
export { Editor as EditorType };

export default forwardRef<Editor|undefined, DefaultEditorProps>((props)=>{
  const { placeholder, initialValue, height, forwardRef,  ...others } = props;
  
  return <Editor
    {...others}
    placeholder={placeholder}
    initialValue={initialValue}
    previewStyle="vertical"
    height={height || "300px"}
    initialEditType="wysiwyg"
    useCommandShortcut={true}
    language="ko"
    autofocus={false}
    toolbarItems={[
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'quote'],
        ['ul', 'ol'],
        ['table', 'image', 'link'],
        ['scrollSync'],
    ]}
    hideModeSwitch={true}
    ref={forwardRef}
    linkAttributes={{
      target: '_blank'
    }}
  />;
});
