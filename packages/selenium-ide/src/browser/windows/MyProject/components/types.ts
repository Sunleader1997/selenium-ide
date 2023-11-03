import React from "react";
import {TAB} from "browser/windows/ProjectEditor/enums/tab";
import {AlertColor} from "@mui/material/Alert/Alert";

export interface DenseAppBarProps {
  tab: number
  setTab: React.Dispatch<React.SetStateAction<TAB>>
}

export interface AlertState{
  open: boolean,
  vertical: 'top' | 'bottom',
  horizontal: "center" | "left" | "right",
  msg: string,
  severity?: AlertColor
}
