import {styled} from "@mui/material/styles";
import Paper, {PaperProps} from '@mui/material/Paper';
import React from "react";
import Card from "@mui/material/Card";
import Fade from "@mui/material/Fade";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import ExpandMore from "./ExpandMore"
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {Fab} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {useSnackbar} from "notistack";

interface AddFabProps extends React.HTMLAttributes<HTMLDivElement> {
  openFlag: boolean
  setOpenFlag: React.Dispatch<React.SetStateAction<boolean>>
  setLinked: React.Dispatch<React.SetStateAction<boolean>>
  createTerminal: ()=> void
  linkTest: ()=> Promise<boolean>
}

const AddFabCore = styled(Paper,{
  shouldForwardProp: (prop) => prop !== 'openFab',
})<PaperProps & {openFab: boolean}>(({ theme,openFab  })=>({
  position: 'fixed',
  bottom: 16,
  right: 16,
  width: 56,
  height: 56,
  borderRadius: '50%',
  transition: theme.transitions.create(['borderRadius','height','width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(openFab && {
    width: 275,
    height: 376,
    borderRadius: 0,
    transition: theme.transitions.create(['borderRadius', 'height','width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const AddFab: React.FC<AddFabProps> = ({
  children,
  createTerminal,
  openFlag,
  setOpenFlag,
  linkTest,
  setLinked
}) => {
  const { enqueueSnackbar } = useSnackbar();
  return (
    <AddFabCore id="addFabCore" openFab={openFlag}>
      <Fade in={openFlag}>
        <Card sx={{minWidth: 275, bottom: 0, right: 0, position: 'absolute'}}>
          <CardContent>
            {children}
          </CardContent>
          <CardActions disableSpacing>
            <Button size="small"
                    onClick={()=>{
                      linkTest().then((linked)=>{
                        enqueueSnackbar(linked? '连接成功':'连接失败', { variant: linked? 'success':'error' });
                        setLinked(linked)
                        if(linked) createTerminal()
                      })
                    }}>Create</Button>()
            <ExpandMore
              expand={!openFlag}
              onClick={()=>setOpenFlag(!openFlag)}
              aria-expanded={!openFlag}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
        </Card>
      </Fade>
      <Fade in={!openFlag}>
        <IconButton sx={{ p:0 }}>
          <Fab aria-label="add" onClick={()=>setOpenFlag(true)}>
            <AddIcon></AddIcon>
          </Fab>
        </IconButton>
      </Fade>
    </AddFabCore>
  )
}
export default AddFab