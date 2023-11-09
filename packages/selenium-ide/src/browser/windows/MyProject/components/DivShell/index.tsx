import {CoreSessionData} from "@seleniumhq/side-api";
import Box from '@mui/material/Box';
import * as React from "react";
import ShellItem from "browser/windows/MyProject/components/DivShell/ShellItem";
import ShellEditor from "browser/windows/MyProject/components/DivShell/ShellEditor";
import {Shell} from "@seleniumhq/side-model";
import { styled } from '@mui/material/styles';

const drawerWidth = 600;
interface DivShellProps{
  session: CoreSessionData,
}
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: -drawerWidth,
  }),
  position: 'relative',
}));

const DivShell: React.FC<DivShellProps> = ({
  session,
})=>{
  const { shells } = session.project;
  const [activedShell, setActivedShell] = React.useState<Shell>({content: "", id: "", name: ""});
  const [showFlag, setShowFlag] = React.useState<boolean>(false);
  return (
    <Box id="divShell" sx={{ display: 'flex' }}>
      <Main id="shellItemsMain" open={Boolean(activedShell)}>
        {shells.map(shell => (
          <ShellItem shell={shell} onClickContent={(event: React.MouseEvent<Shell>)=> {
            console.log('click',event.currentTarget)
            setActivedShell(shell);
            setShowFlag(true)
          }}/>
        ))}
      </Main>
      <ShellEditor
        id="ShellEditorPanel"
        shell={activedShell}
        anchor="right"
        sx={{
         width: drawerWidth,
         flexShrink: 0,
         '& .MuiDrawer-paper': {
           width: drawerWidth,
         },
        }}
        variant="persistent"
        open={showFlag}
        onClose={()=>{
         setShowFlag(false)
        }}
      />
    </Box>
  )
}
export default DivShell;