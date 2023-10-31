import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import TerminalItem from './TerminalItem';
import {CoreSessionData} from "@seleniumhq/side-api";
import {Terminal} from "@seleniumhq/side-model";
import AddFab from "browser/windows/MyProject/components/AddFab";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

interface DivTerminalProps{
  session: CoreSessionData,
}

const {
  terminals: {
    create: createTerminal,
    linkTest: linkTest
  }
} = window.sideAPI

const DivTerminal: React.FC<DivTerminalProps> = ({
  session,
}) => {
  const { terminals } = session.project;
  const [ openAddTerminalDialogFlag, setOpenAddTerminalDialogFlag] = React.useState(false)


  const [ name, setName] = React.useState('')
  const [ ip, setIp] = React.useState('')
  const [ port, setPort] = React.useState(22)
  const [ user, setUser] = React.useState('root')
  const [ pwd, setPwd] = React.useState('123456')
  const [ system, setSystem] = React.useState('centos')
  const [ linked, setLinked] = React.useState(false)
  const newTerminalParam: Terminal = {
    id: '-1',
    name,
    ip,
    port,
    user,
    pwd,
    system,
    linked
  }
  return (
    <Box sx={{ minHeight: 393 }} className='fill'>
      <Masonry columns={6} spacing={2}>
        {terminals.map(terminal => (
          <TerminalItem value={terminal}/>
        ))}
      </Masonry>
      <AddFab linkTest={()=>linkTest(newTerminalParam)}
              setLinked={setLinked}
              setOpenFlag={setOpenAddTerminalDialogFlag}
              openFlag={openAddTerminalDialogFlag}
              createTerminal={()=>createTerminal(newTerminalParam)}>
        <Typography variant="h5" component="div">
          <TextField value={newTerminalParam.name} label="name" variant="standard" onChange={(e)=>setName(e.target.value)}/>
          <TextField value={newTerminalParam.ip} label="ip" variant="standard" onChange={(e)=>setIp(e.target.value)}/>
          <TextField value={newTerminalParam.port} type="port" label="Standard" variant="standard" onChange={(e)=>setPort(Number(e.target.value))}/>
          <TextField value={newTerminalParam.user} label="user" variant="standard" onChange={(e)=>setUser(e.target.value)}/>
          <TextField value={newTerminalParam.pwd} label="pwd" variant="standard" onChange={(e)=>setPwd(e.target.value)}/>
          <TextField value={newTerminalParam.system} label="system" variant="standard" onChange={(e)=>setSystem(e.target.value)}/>
        </Typography>
      </AddFab>
    </Box>
  );
}
export default DivTerminal;