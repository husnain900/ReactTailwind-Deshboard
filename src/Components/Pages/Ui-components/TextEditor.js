import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function App() {
  const [content, setContent] = useState('');

  const placeholder = 'محتوى الصفحة'; // Your placeholder text

  useEffect(() => {
    const editor = document.querySelector('.ql-editor');
    if (editor) {
      editor.setAttribute('data-placeholder', placeholder);
      // Apply custom styles
      editor.setAttribute(
        'style',
        `min-height: 260px; direction: rtl; text-align: start;`
      );
    }
  }, [placeholder]);

  return (
    <div className="App">
      <ReactQuill
        value={content}
        onChange={setContent}
        modules={App.modules}
        formats={App.formats}
        style={{ minHeight: '200px' }} // Set the minimum height for the editor
      />
    </div>
  );
}

App.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    matchVisual: false,
  },
};

App.formats = [
  'header',
  'font',
  'size',
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
  'video',
];

// import React, { useRef } from 'react';
// import { Editor } from '@tinymce/tinymce-react';

// export default function App() {
//   const editorRef = useRef(null);

//   const log = () => {
//     if (editorRef.current) {
//       console.log(editorRef.current.getContent());
//     }
//   };

//   return (
//     <>
//       <Editor
//         apiKey="your-api-key" // Replace with your actual TinyMCE API key
//         onInit={(evt, editor) => (editorRef.current = editor)}
//         initialValue="محتوى الصفحة"
//         init={{
//           height: 500,
//           menubar: false,
//           directionality: 'rtl',
//           plugins: [
//             'advlist autolink lists link image charmap preview anchor',
//             'searchreplace visualblocks code fullscreen',
//             'insertdatetime media table code help wordcount',
//           ],
//           toolbar:
//             'undo redo | formatselect | ' +
//             'bold italic forecolor | alignleft aligncenter ' +
//             'alignright alignjustify | bullist numlist outdent indent | ' +
//             'removeformat | help',
//           content_style:
//             'body { font-family:Helvetica,Arial,sans-serif; font-size:14px } ' +
//             'p:empty:before { content: none; }',
//         }}
//       />
//       {/* <button className="text-sm" onClick={log}>Log Editor Content in console log</button> */}
//     </>
//   );
// }
