import { Editor as EditorType, EditorProps } from '@toast-ui/react-editor';
import dynamic, { LoaderComponent } from 'next/dynamic';
import {forwardRef, MutableRefObject, RefObject, useRef, useCallback} from 'react';
import { DefaultEditorWithForwardedProps } from '../nt/Editor2';

interface EditorPropsWithHandlers extends EditorProps{
  onChange?(value: string): void;
}

const DefaultEditor = dynamic<DefaultEditorWithForwardedProps>(() => import('../nt/Editor2') as LoaderComponent, { ssr: false });
const EditorWithForwardedRef = forwardRef<EditorType|undefined, EditorPropsWithHandlers>((props, ref)=>{
  return <DefaultEditor {...props} forwardedRef={ref as RefObject<EditorType>} />
  //return <DefaultEditor {...props} forwardedRef={ref as MutableRefObject<EditorType>} />
});

interface Props extends EditorProps {
  onBlur(value: string): void;
}

const Editor: React.FC<Props> = (props) => {
  const { initialValue, height } = props;
  
  const editorRef = useRef<EditorType>(null);
  const handleChange = useCallback(() => {
    if (!editorRef.current) {
      return;
    }
    
    const instance = editorRef.current.getInstance();
    props.onBlur(instance.getHTML());
  }, [props]);

  return <div>
    <EditorWithForwardedRef
      {...props}
      placeholder="내용을 작성해주세요."
      initialValue={initialValue || "hello react editor world!"}
      previewStyle="vertical"
      height={height || "300px"}
      initialEditType="wysiwyg"
      useCommandShortcut={true}
      ref={editorRef}
      language="ko"
      autofocus={false}
      toolbarItems={[
          ['heading', 'bold', 'italic', 'strike'],
          ['hr', 'quote'],
          ['ul', 'ol'],
          ['table', 'image', 'link'],
          ['scrollSync'],
      ]}
      onBlur={handleChange}
      hideModeSwitch={true}
    />
  </div>;
};
 
export default Editor;