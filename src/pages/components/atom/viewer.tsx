import dynamic, { LoaderComponent } from 'next/dynamic';
import { useRouter } from 'next/router';
import { ViewerProps } from '../../../Component/nt/EditorViewer';

const DefaultViewer = dynamic<ViewerProps>(() => import('../../../Component/nt/EditorViewer') as LoaderComponent, { ssr: false });

export default function Viewer() {
    const {initialValue} = useRouter().query;
  
    return <div className='m-3'>
      <div className='font-medium text-lg'>😀 작성 내용</div>
      <div className='bg-efefef p-3'>
        <DefaultViewer initialValue={initialValue as string} />
      </div>
    </div>;
  }