import JoditEditor from 'jodit-react';

const Editor = () => {
  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
    uploader: {
      insertImageAsBase64URI: true,
    },
    useSearch: false,
    spellcheck: false,
    language: 'ko',
    toolbarButtonSize: 'small',
    askBeforePasteHTML: false,
    askBeforePasteFromWord: false,
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
    buttons:
      'bold,italic,underline,strikethrough,ul,ol,indent,outdent,left,image,paragraph,file,copyformat,selectall,hr,table,link,find,fullsize',
  };
  return (
    <JoditEditor
      config={config}
      tabIndex={1} // tabIndex of textarea
      //onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
      //onChange={(newContent) => {}}
    />
  );
};

export default Editor;
