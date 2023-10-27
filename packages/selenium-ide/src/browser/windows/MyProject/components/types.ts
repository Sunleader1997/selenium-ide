import React from "react";
import {TAB} from "browser/windows/ProjectEditor/enums/tab";

export interface DenseAppBarProps {
  tab: number
  setTab: React.Dispatch<React.SetStateAction<TAB>>
}