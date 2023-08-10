import { Editor } from "@tinymce/tinymce-react";
import { useEffect, useRef } from "react";

const editor_api = import.meta.env.VITE_EDITER_API_KEY;

export const TinyEditor = ({ handleContent }) => {
  const editorRef = useRef();

  useEffect(() => {
    const handleEditorInit = (editor) => {
      editorRef.current = editor;
      handleContent(editor.getContent());
    };
    if (editorRef.current) {
      handleEditorInit(editorRef.current);
    }
  }, [handleContent]);

  return (
    <Editor
      apiKey={editor_api}
      onInit={(ent, editor) => (editorRef.current = editor)}
      init={{
        language: "ko_KR",
        selector: "#tiny",
        menubar: false,
        height: 300,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "code",
          "help",
          "wordcount",
          "save",
        ],
        toolbar:
          "formatselect fontselect fontsizeselect |" +
          " forecolor backcolor |" +
          " bold italic underline strikethrough |" +
          " alignjustify alignleft aligncenter alignright |" +
          " bullist numlist |" +
          " table tabledelete |" +
          " link custom_image",
        fontsize_formats:
          "9px 10px 11px 12px 13px 14px 15px 16px 18px 20px 22px 24px 28px 32px 36px 48px",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      }}
      initialValue="<p>안녕하세요</p>"
    />
  );
};
