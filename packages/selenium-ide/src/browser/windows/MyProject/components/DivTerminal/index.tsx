import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import TerminalItem from './TerminalItem';
import {CoreSessionData} from "@seleniumhq/side-api";
import {Terminal} from "@seleniumhq/side-model";
import AddFab from "browser/windows/MyProject/components/AddFab";

interface DivTerminalProps{
  session: CoreSessionData,
}

const {
  terminals: {
    create: createTerminal
  }
} = window.sideAPI

const DivTerminal: React.FC<DivTerminalProps> = ({
  session,
}) => {
  const { terminals } = session.project;
  const [ openAddTerminalDialogFlag, setOpenAddTerminalDialogFlag] = React.useState(false)
  const newTerminalParam: Terminal = {
    name: '',
    ip: '',
    port: 22,
    user: 'root',
    pwd: '123456',
    system: ''
  }
  return (
    <Box sx={{ flexGrow: 1, width: `calc(100%)` }}>
      <Masonry columns={4} spacing={2}>
        {terminals.map(terminal => (
          <TerminalItem value={terminal}/>
        ))}
      </Masonry>
      <AddFab setOpenFlag={setOpenAddTerminalDialogFlag} openFlag={openAddTerminalDialogFlag} createTerminal={createTerminal}>
        <a>{newTerminalParam.port}</a>
      </AddFab>
    </Box>
  );
}
export default DivTerminal;