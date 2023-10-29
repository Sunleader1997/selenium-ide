import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Terminal} from "@seleniumhq/side-model";

function TerminalItem(props: {value: Terminal}){
  const { id, ip, name, ...other } = props.value;
  return (
    <Card sx={{ minWidth: 275 }} id={id}>
      <CardContent>
        <Typography variant="h5" component="div">
          {ip}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {name}
        </Typography>
        <Typography variant="body2">
          {other.user}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Link Test</Button>
      </CardActions>
    </Card>
  );
}
export default TerminalItem;