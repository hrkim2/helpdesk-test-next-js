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
