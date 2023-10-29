import {styled} from "@mui/material/styles";
import Box, {BoxProps} from '@mui/material/Box';
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import {Terminal} from "@seleniumhq/side-model";
import {Fab} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface AddFabProps extends React.HTMLAttributes<HTMLDivElement> {
  openFlag: boolean
  setOpenFlag: React.Dispatch<React.SetStateAction<boolean>>
  createTerminal: (param: Terminal)=> void
}

const AddFabCore = styled(Box,{
  shouldForwardProp: (prop) => prop !== 'openFab',
})<BoxProps & {openFab: boolean}>(({ theme,openFab  })=>({
  position: 'fixed',
  bottom: 16,
  right: 16,
  transition: theme.transitions.create(['height','width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(openFab && {
    width: 275,
    transition: theme.transitions.create(['height','width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const AddFab: React.FC<AddFabProps> = ({
  children,
  createTerminal,
  openFlag,
  setOpenFlag
}) => {
  return (
    <AddFabCore id="addFabCore" openFab={openFlag}>
      {
        openFlag ? (
          <Card sx={{minWidth: 275}} onDoubleClick={()=>setOpenFlag(false)}>
            <CardContent>
              <Typography variant="h5" component="div">
                {children}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => createTerminal}>Link Test</Button>
            </CardActions>
          </Card>
        ) : (
          <Fab color="primary" aria-label="add" onClick={()=>setOpenFlag(true)}>
            <AddIcon></AddIcon>
          </Fab>
        )
      }
    </AddFabCore>
  )
}
export default AddFab