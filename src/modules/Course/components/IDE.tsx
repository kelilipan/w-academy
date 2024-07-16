import React from "react";
import Editor, { type EditorProps } from "@monaco-editor/react";

const IDE = () => {
  const content = `const yourName = "kimi no nawa";
console.log(yourName);
  `;

  const editorConfig: EditorProps["options"] = { minimap: { enabled: false } };

  return (
    <Editor
      height="100%"
      defaultLanguage="javascript"
      defaultValue={content}
      options={editorConfig}
    />
  );
};

export default IDE;
