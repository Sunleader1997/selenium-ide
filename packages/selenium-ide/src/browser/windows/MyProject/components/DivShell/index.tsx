import {CoreSessionData} from "@seleniumhq/side-api";
import Box from '@mui/material/Box';
import * as React from "react";
import ShellItem from "browser/windows/MyProject/components/DivShell/ShellItem";
import ShellEditor from "browser/windows/MyProject/components/DivShell/ShellEditor";

interface DivShellProps{
  session: CoreSessionData,
}

const DivShell: React.FC<DivShellProps> = ({
  session,
})=>{
  const { shells } = session.project;

  return (
    <Box className='fill'>
      {shells.map(shell => (
        <ShellItem shell={shell}/>
      ))}
      <ShellEditor shell={shells[0]} open={true}/>
    </Box>
  )
}
export default DivShell;