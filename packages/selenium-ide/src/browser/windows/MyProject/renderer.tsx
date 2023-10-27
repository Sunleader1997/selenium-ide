import Box from '@mui/material/Box'
import AppWrapper from 'browser/components/AppWrapper'
import React from 'react'
import AppBar from 'browser/windows/MyProject/components/AppBar'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import renderWhenReady from 'browser/helpers/renderWhenReady'
import subscribeToSession from "browser/helpers/subscribeToSession";
import {TAB, TESTS_TAB} from "browser/windows/ProjectEditor/enums/tab";
import CustomTabPanel from "browser/windows/MyProject/components/TabPanel";
import DivTerminal from "browser/windows/MyProject/components/DivTerminal";

const MyProject = () => {
  const session = subscribeToSession()
  const [tab,setTab] = React.useState<TAB>(TESTS_TAB)
  return (
    <AppWrapper>
      <DndProvider backend={HTML5Backend}>
        <Box className="flex">
          <AppBar tab={tab} setTab={setTab}/>
          <CustomTabPanel value={tab} index={0}>
            测试计划
          </CustomTabPanel>
          <CustomTabPanel value={tab} index={1}>
            Item Two
          </CustomTabPanel>
          <CustomTabPanel value={tab} index={2}>
            <DivTerminal session={session}></DivTerminal>
          </CustomTabPanel>
        </Box>
      </DndProvider>
    </AppWrapper>
  )
}

renderWhenReady(MyProject)
