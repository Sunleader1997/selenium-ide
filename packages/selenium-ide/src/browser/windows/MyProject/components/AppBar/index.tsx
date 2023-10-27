import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DnsIcon from '@mui/icons-material/Dns';
import BugReportIcon from '@mui/icons-material/BugReport';
import TerminalIcon from '@mui/icons-material/Terminal';
import {DenseAppBarProps} from "browser/windows/MyProject/components/types";
import {styled} from "@mui/material/styles";
import MuiAppBar, {AppBarProps} from "@mui/material/AppBar";

export const appBarHeight = 72

const MyProjectCore = styled(MuiAppBar,{})<AppBarProps>(()=>({
  width: `calc(100%)`,
  height: `${appBarHeight}px`
}))

const DenseAppBar: React.FC<DenseAppBarProps> = ({
  tab,
  setTab
}) => {
  return (
    <MyProjectCore>
      <Tabs value={tab} onChange={(_e,v)=>setTab(v)}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
      >
        <Tab icon={<BugReportIcon/>} label="测试计划" />
        <Tab icon={<TerminalIcon/>} label="执行脚本" />
        <Tab icon={<DnsIcon/>} label="SSH连接" />
      </Tabs>
    </MyProjectCore>
  );
}
export default DenseAppBar