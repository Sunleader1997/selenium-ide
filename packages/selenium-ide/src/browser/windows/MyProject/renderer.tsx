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
import {SnackbarProvider} from "notistack";
import DivShell from "browser/windows/MyProject/components/DivShell";

const MyProject = () => {
  const session = subscribeToSession()
  const [tab,setTab] = React.useState<TAB>(TESTS_TAB)
  return (
    <AppWrapper>
      <SnackbarProvider maxSnack={3}>
        <DndProvider backend={HTML5Backend}>
          <Box sx={{ width: '100%' }}>
            <AppBar tab={tab} setTab={setTab}/>
            <Box className="fill no-select">
              <CustomTabPanel value={tab} index={0}>
                测试计划
              </CustomTabPanel>
              <CustomTabPanel value={tab} index={1}>
                <DivShell session={session}></DivShell>
              </CustomTabPanel>
              <CustomTabPanel value={tab} index={2}>
                <DivTerminal session={session}></DivTerminal>
              </CustomTabPanel>
            </Box>
          </Box>
        </DndProvider>
      </SnackbarProvider>
    </AppWrapper>
  )
}

renderWhenReady(MyProject)
