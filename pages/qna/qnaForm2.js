import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('../../Component/Editor'), { ssr: false });

export default function CreateQna() {
  const onClick = () => {};
  return (
    <>
      <Editor />
      <input type="button" onclick={onClick()} value="저장" />
    </>
  );
}
