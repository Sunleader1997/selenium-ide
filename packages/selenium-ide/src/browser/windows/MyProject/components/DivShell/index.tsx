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
  const [ openedShells, setOpenedShells] = React.useState<Shell[]>([]);
  const addOpenedShell = (shell: Shell) => {
    if(!openedShells.some(obj => obj.id === shell.id)){
      setOpenedShells([...openedShells, shell])
    }
  }
  const onActiveContentChanged = (content: string)=>{
    setActiveShell({
      ...activeShell,
      content: content
    })
  }
  const handleListItemClick = (_event: any, shell: Shell) => {
    setActiveShell(shell)
    addOpenedShell(shell)
  }
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
          value={shells}
          onChange={handleListItemClick}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          sx={{ minHeight: '20px', width: '100%' }}
        >
          {shells.map(shell => (
            <Tab
              value={shell.id}
              label={shell.name}
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