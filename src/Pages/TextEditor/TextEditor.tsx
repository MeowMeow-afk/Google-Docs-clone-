// @ts-noCheck
import React, { ReactElement, useState } from 'react';
import ReactQuill from 'react-quill';

const TextEditor = (): ReactElement => {
  const [value, setValue] = useState<string>('');

  const modules = {
    toolbar: [
      [{ header: [7, 1, 2, 3, 4, 5, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
    ],
  };
  const formats = [
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
    'color',
    'font',
    'align',
    'code-block',
  ];
  return (
    <ReactQuill
      value={value}
      onChange={setValue}
      modules={modules}
      formats={formats}
    />
  );
};

export default TextEditor;
