import Drawer, {DrawerProps} from "@mui/material/Drawer";
import {styled} from "@mui/material/styles";
import {Shell} from "@seleniumhq/side-model";
//import Box from '@mui/material/Box';
import * as React from "react";
import {useEffect} from "react";
import Stack from "@mui/material/Stack";
import TerminalIcon from "@mui/icons-material/Terminal";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.js';
import 'codemirror/lib/codemirror.css';
// 主题风格
import 'codemirror/theme/solarized.css';
// 设置代码语言模式（比如JS，SQL，python，java等）
import 'codemirror/mode/shell/shell.js';
//ctrl+空格代码提示补全
import 'codemirror/addon/hint/show-hint.css'; // start-ctrl+空格代码提示补全
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/anyword-hint.js'; // end
//代码高亮
import 'codemirror/addon/selection/active-line.js';
//折叠代码
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/foldcode.js';
import 'codemirror/addon/fold/foldgutter.js';
import 'codemirror/addon/fold/brace-fold.js';
import 'codemirror/addon/fold/comment-fold.js';

import 'codemirror/theme/material.css';
import 'codemirror/theme/mbo.css';
import 'codemirror/addon/edit/matchbrackets.js';
import 'codemirror/addon/comment/comment.js';
import 'codemirror/addon/comment/continuecomment.js';
import './ShellEditorCss.css';

interface ShellEditorProps extends DrawerProps{
  shell: Shell
}

const ShellEditorCore= styled(Drawer,{})<DrawerProps>(()=>({
  minWidth: 250
}))

const ShellEditor:  React.FC<ShellEditorProps> = ({
  shell,
  ...others
}) => {
  const [content, setContent] = React.useState<string>(shell.content)
  useEffect(() => {
    console.log("shell update")
    setContent(shell.content)
  }, [shell.id]);
  return (
    <ShellEditorCore {...others}>
      <Toolbar variant="dense" sx={{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: 'white',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        maxHeight: 22,
        px: 1
      }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={0}
          sx={{height: 22}}
        >
          <Stack direction="row" alignItems="center" spacing={0.5} sx={{height: 22, display: 'flex', fontSize: 'larger'}}>
            <TerminalIcon/> <div>{shell.name}</div>
          </Stack>
        </Stack>
      </Toolbar>
      <Box component="main" sx={{ p: 0, flex: 1 }}>
        <CodeMirror
          className='CodeMirrorFull'
          value={content}
          options={{
            mode: 'text/x-sh', // 代码类型
            theme: 'material', // 主题
            indentWithTabs: true, // 在缩进时，是否需要把 n*tab宽度个空格替换成n个tab字符，默认为false 。
            smartIndent: true, // 自动缩进,回车时跟上一行保持相同缩进
            lineNumbers: true, // 左侧显示行数
            matchBrackets: true, // 括号匹配
            cursorHeight: 1, // 光标高度
            autoRefresh: true,
            line: true,
            placeholder: '请输入脚本',
            // readOnly: true, // 是否只读
            hintOptions: {
              // 自定义提示选项
              completeSingle: false, // 当匹配只有一项的时候是否自动补全，建议false
              // hint: handleHintShow,
              // async: true,
              // disableKeywords: ['hello'],
            },
            extraKeys: {
              // 触发按键
              Ctrl: 'autocomplete',
            }
          }}// 设置尺寸
          editorDidMount={(editor) => {
            editor.setSize('100%', '100%');
          }}
          onBeforeChange={(_editor, _data, value) => {
            setContent(value)
          }}
          onChange={(_editor, _data, _value) => {
            shell.content = _value
          }}
        />
      </Box>
    </ShellEditorCore>
  )
}
export default ShellEditor;
