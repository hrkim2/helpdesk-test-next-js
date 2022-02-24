import { Viewer, ViewerProps } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const DefaultViewer = (props:ViewerProps)=>{
  const {initialValue, ...others} = props;

  return <Viewer
    {...others}
    initialValue={initialValue}
  />;
}

export type {ViewerProps};
export default DefaultViewer;
