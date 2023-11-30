import {CoreSessionData} from "@seleniumhq/side-api";
import {styled} from "@mui/material/styles";
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import * as React from "react";
import {TestShape} from "@seleniumhq/side-model";

interface DivTestsProps{
  session: CoreSessionData,
}

const Main = styled('main', { })(()=>({
}))

const DivShell: React.FC<DivTestsProps> = ({
  session,
})=>{
  const {
    project: { tests}
  } = session
  function makeTree(tests: TestShape[]) {
    if(tests === undefined) return null
    return tests.map(testItem=>{
      return (
        <TreeItem nodeId={testItem.id} label={testItem.name}>
          {
            testItem.children!=undefined && makeTree(testItem.children)
          }
        </TreeItem>
      )
    })
  }
  return (
    <Box id="divShell" sx={{ display: 'flex', height: '100%' }}>
      <Main id="testsMain">
        <TreeView
          aria-label="multi-select"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          multiSelect
        >
          {makeTree(tests)}
        </TreeView>
      </Main>
    </Box>
  )
}
export default DivShell;