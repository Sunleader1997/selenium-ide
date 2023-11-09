import Paper, {PaperProps} from "@mui/material/Paper";
import {styled} from "@mui/material/styles";
import * as React from "react";
import {Shell} from "@seleniumhq/side-model";
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import TerminalIcon from '@mui/icons-material/Terminal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface ShellItemProps{
  shell: Shell
  onClickContent: (event: any) => void
}

const ShellItemCore = styled(Paper,{})<PaperProps>(()=>({
  maxWidth: 250
}))
const ShellItem: React.FC<ShellItemProps> = ({
  shell,
  onClickContent
})=>{
  return (
    <ShellItemCore id={shell.id}>
      <Toolbar variant="dense" sx={{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: 'white',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        maxHeight: 22,
        minHeight: 1,
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
      <Box component="main" sx={{ p: 3 }} onClick={onClickContent}>
        <Typography>
          {shell.content}
        </Typography>
      </Box>
    </ShellItemCore>
  )
}
export default ShellItem;