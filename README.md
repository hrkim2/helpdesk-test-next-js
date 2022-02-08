* 설치
`npm i react-quill --legacy-peer-deps`
* 사용
```javascript
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CreateQna() {
  const modules = {
    toolbar: [
      //[{ 'font': [] }],
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image'],
      [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
      ['clean'],
    ],
  };
  const formats = [
    //'font',
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'align',
    'color',
    'background',
  ];

  return (
    <div>
      <ReactQuill
        style={{ height: '400px' }}
        theme="snow"
        modules={modules}
        formats={formats}
        //onChange={(content, delta, source, editor) => onChange(editor.getHTML())}
      />
    </div>
  );
}
```
