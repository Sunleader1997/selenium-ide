import {CoreSessionData} from "@seleniumhq/side-api";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';


import * as React from "react";
import ShellEditor from "browser/windows/MyProject/components/DivShell/ShellEditor";
import {Shell} from "@seleniumhq/side-model";
import { styled } from '@mui/material/styles';

interface DivShellProps{
  session: CoreSessionData,
}
const Main = styled('main', { })(()=>({
  minWidth: 250
}))

const DivShell: React.FC<DivShellProps> = ({
  session,
})=>{
  const { shells } = session.project;
  const [ activeShell, setActiveShell] = React.useState<Shell>({content: "", id: "", name: ""});
  const [ openedShells, setOpenedShells] = React.useState<string[]>([]);

  // 增加一个 tab 页
  const addOpenedShell = (shellId: string) => {
    if(!openedShells.some(obj => obj === shellId)){
      setOpenedShells([...openedShells, shellId])
    }
  }
  // 编辑shell， 更新 ActiveShell 的内容
  const onActiveContentChanged = (content: string)=>{
    setActiveShell({
      ...activeShell,
      content: content
    })
  }
  // 列表选择， 将选择的 shell 作为 ActiveShell， 并增加 tab
  const handleListItemClick = (_event: any, shell: Shell) => {
    setActiveShell(shell)
    addOpenedShell(shell.id)
  }
  // tab 切换。根据选择的shellId，找出 shell 作为 ActiveShell
  const handleTabsItemClick = (_event: any, shellId: string) => {
    const selectShell = shells.find(item => item.id === shellId)
    if( selectShell!==undefined ) {
      setActiveShell(selectShell)
    }
  }
  // 根据ID 获取shell的名字
  const findShellNameById = (shellId: string) => {
    const selectShell = shells.find(item => item.id === shellId)
    return selectShell!==undefined? selectShell.name : '';
  }
  // 监听 ActiveShell ，当 ActiveShell 变更时，更新列表数据
  React.useLayoutEffect(() => {
    // 更新列表数据
    console.log(activeShell.content)
    const index = shells.findIndex(item => item.id === activeShell.id)
    shells[index] = {...activeShell}
  }, [activeShell]);
  return (
    <Box id="divShell" sx={{ display: 'flex', height: '100%' }}>
      <Main id="shellItemsMain">
        <List component="nav" aria-label="main mailbox folders">
          {shells.map(shell => (
            <ListItemButton
              selected={activeShell.id === shell.id}
              onClick={(event) => handleListItemClick(event, shell)}
            >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          ))}
        </List>
      </Main>
      <Stack spacing={0} sx={{ flex: 1, minWidth: 0, minHeight: 0}}>
        <Tabs
          value={activeShell.id}
          onChange={handleTabsItemClick}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          sx={{ minHeight: '20px', width: '100%' }}
        >
          {openedShells.map(shellId => (
            <Tab
              value={shellId}
              label={findShellNameById(shellId)}
              sx={{
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                color: 'white',
                minHeight: '20px'
              }}
              wrapped
            />
          ))}
        </Tabs>
        <ShellEditor
          id="ShellEditorPanel"
          shell={activeShell}
          onContentChanged={onActiveContentChanged}
          sx={{flex: 1}}
        />
      </Stack>
    </Box>
  )
}
export default DivShell;