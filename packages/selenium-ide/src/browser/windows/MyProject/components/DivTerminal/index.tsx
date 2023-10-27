import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Unstable_Grid2';
import TerminalItem from './TerminalItem';
import {CoreSessionData} from "@seleniumhq/side-api";
import AddIcon from '@mui/icons-material/Add';

interface DivTerminalProps{
  session: CoreSessionData
}

const DivTerminal: React.FC<DivTerminalProps> = ({
  session,
}) => {
  const { terminals } = session.project;

  return (
    <Box sx={{ flexGrow: 1, width: `calc(100%)` }}>
      <Grid container spacing={2}>
        {/* 遍历terminals生成Item */}
        {terminals.map(terminal => (
          <Grid key={terminal.id} xs={3} md={3}>
            <TerminalItem value={terminal}/>
          </Grid>
        ))}
      </Grid>
      <Fab color="primary" aria-label="add" sx={{ position: 'fixed', bottom: 16, right: 16}}>
        <AddIcon />
      </Fab>
    </Box>
  );
}
export default DivTerminal;