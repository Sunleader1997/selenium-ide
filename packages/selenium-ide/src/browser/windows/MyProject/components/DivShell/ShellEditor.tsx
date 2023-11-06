import DialogTitle from '@mui/material/DialogTitle';
import Dialog, {DialogProps} from '@mui/material/Dialog';
import {styled} from "@mui/material/styles";
import {Shell} from "@seleniumhq/side-model";
import * as React from "react";
import Box from '@mui/material/Box';
import MonacoEditor from 'react-monaco-editor';
import * as monacoEditor from "monaco-editor";

interface ShellEditorProps extends DialogProps{
  shell: Shell
}

const ShellEditorCore= styled(Dialog,{})<DialogProps>(()=>({
  minWidth: 250
}))

const ShellEditor:  React.FC<ShellEditorProps> = ({
  shell,
  open
}) => {
  const options = {
    selectOnLineNumbers: true,
    language: 'json'
  };
  const onChange = (
    newValue: string,
    e: monacoEditor.editor.IModelContentChangedEvent
  ) => {
    console.log('onChange', newValue, e);
  }
  const editorDidMount = (
    editor: monacoEditor.editor.IStandaloneCodeEditor,
    monaco: typeof monacoEditor
  ) => {
    console.log('editorDidMount', editor, monaco);
  }
  return (
    <ShellEditorCore open={open}>
      <DialogTitle>{shell.name}</DialogTitle>
      <Box id="container" component="div" sx={{ p: 3 }}>
        <MonacoEditor
          width="800"
          height="600"
          language="json"
          theme="vs-dark"
          value={shell.content}
          options={options}
          onChange={onChange}
          editorDidMount={editorDidMount}
        />
      </Box>
    </ShellEditorCore>
  )
}
export default ShellEditor;
