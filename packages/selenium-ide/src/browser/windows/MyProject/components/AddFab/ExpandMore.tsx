import {styled} from "@mui/material/styles";
import IconButton, {IconButtonProps} from "@mui/material/IconButton";
import React from "react";


const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
export default ExpandMore