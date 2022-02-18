import {MutableRefObject} from 'react';
import { Editor, EditorProps } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

export interface DefaultEditorWithForwardedProps extends EditorProps {
  forwardedRef?: MutableRefObject<Editor>;
}

export default (props: DefaultEditorWithForwardedProps)=>{
  return <Editor {...props} ref={props.forwardedRef}/>
}