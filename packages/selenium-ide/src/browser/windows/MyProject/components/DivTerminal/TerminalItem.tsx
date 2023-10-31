import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Terminal} from "@seleniumhq/side-model";
import ExpandMore from "browser/windows/MyProject/components/AddFab/ExpandMore";
import {Collapse} from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import RssFeedIcon from '@mui/icons-material/RssFeed';

const {
  terminals: {
    deleteTerminal: deleteTerminal
  }
} = window.sideAPI

function TerminalItem(props: {value: Terminal}){
  const { id, ip, name, ...other } = props.value;
  const [ expanded, setExpanded] = React.useState(false)
  return (
    <Card sx={{ minWidth: 275 }} id={id}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {ip} | {other.user}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={()=>{
          deleteTerminal(id)
        }}>
          <RssFeedIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={()=>setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
            <IconButton onClick={()=>{
              deleteTerminal(id)
            }}>
              <Delete />
            </IconButton>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default TerminalItem;