import * as React from 'react';
import Box from '@mui/material/Box';
import {appBarHeight} from "browser/windows/MyProject/components/AppBar";
import {styled} from "@mui/material/styles";
import Paper, {PaperProps} from "@mui/material/Paper";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const CustomTabPanelCore = styled(Paper,{})<PaperProps>(()=>({
  height: `calc(100% - ${appBarHeight}px)`
}))
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <CustomTabPanelCore
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className="fill" sx={{ p: 3,marginTop: `${appBarHeight}px`}}>
          {children}
        </Box>
      )}
    </CustomTabPanelCore>
  );
}
export default CustomTabPanel;