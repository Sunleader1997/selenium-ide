import * as React from 'react';
import Card from '@mui/material/Card';
import LoadingButton from '@mui/lab/LoadingButton'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Terminal} from "@seleniumhq/side-model";
import ExpandMore from "browser/windows/MyProject/components/AddFab/ExpandMore";
import Popover from '@mui/material/Popover';
import Delete from "@mui/icons-material/Delete";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import {useSnackbar} from 'notistack';
import Grid from '@mui/material/Unstable_Grid2';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';


interface TerminalItemLoading{
  testLinkLoading: boolean,
  deleteLoading: boolean
}

const {
  terminals: {
    deleteTerminal: deleteTerminal,
    //onTerminalLinkTest: onTerminalLinkTest,
    linkTest: linkTest
  }
} = window.sideAPI

function TerminalItem(props: {value: Terminal}){
  const { id, ip, name, ...other } = props.value;
  const [ terminalItemLoading , setLoading] = React.useState<TerminalItemLoading>({
    testLinkLoading: false,
    deleteLoading: false
  })
  const { enqueueSnackbar } = useSnackbar();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  return (
    <Card sx={{ minWidth: 275 }} id={id}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name} <Chip size="small" label={other.user} icon={<FaceIcon/>} />
        </Typography>
        <Grid container spacing={2} sx={{ alignItems: 'center' }}>
          <Grid xs={6}>
            {ip}
          </Grid>
          <Grid xs={3}>
            <LoadingButton loading={terminalItemLoading.testLinkLoading} size='small' onClick={()=>{
              setLoading({ ...terminalItemLoading, testLinkLoading: true })
              // onTerminalLinkTest.dispatchEvent(props.value)
              linkTest(props.value).then((linked)=>{
                enqueueSnackbar(linked? '连接成功':'连接失败', { variant: linked? 'success':'error' });
                setLoading({ ...terminalItemLoading, testLinkLoading: false })
              })
            }}>
              <RssFeedIcon />
            </LoadingButton>
          </Grid>
          <Grid xs={3}>
            <ExpandMore
              aria-describedby={id+'ExpandMore'}
              size='small'
              expand={Boolean(anchorEl)}
              onClick={(event: React.MouseEvent<HTMLButtonElement>)=> {
                setAnchorEl(event.currentTarget);
              }}
              aria-expanded={Boolean(anchorEl)}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
            <Popover
              id={id+'ExpandMore'}
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={() => {
                setAnchorEl(null);
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <LoadingButton loading={terminalItemLoading.deleteLoading} onClick={()=>{
                setLoading({ ...terminalItemLoading, deleteLoading: true })
                deleteTerminal(id)
                setLoading({ ...terminalItemLoading, deleteLoading: false })
              }}>
                <Delete />
              </LoadingButton>
            </Popover>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
export default TerminalItem;