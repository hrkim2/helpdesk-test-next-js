import dynamic from 'next/dynamic';
const Editor = dynamic(() => import('./joditEditor'), { ssr: false });

export default function CreateQna() {
  return (
    <div>
      <Editor />
    </div>
  );
}
