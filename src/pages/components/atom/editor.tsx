import Editor from '../../../Component/bp/Editor';

const TEMPLATE = `<ul><li><p><b>project id </b>: ###</p></li><li><p><strong>질문 내용</strong> :</p></li></ul>
<p>애옹</p>`;

export default function EditorTemplate() {
  let [content, setContent, getContent] = [TEMPLATE, (e:string)=>{content=e}, ()=>content];

  return <>
    <div className='font-medium text-lg'># 질문 애옹</div>
    <Editor initialValue={TEMPLATE} onBlur={setContent}/>
    <div className='m-3'>
      {/* <Viewer initialValue={TEMPLATE}/> */}
    </div>
    <div><button type="button" onClick={()=>{
      console.log(getContent());
    }}>submit</button></div>
  </>;
}