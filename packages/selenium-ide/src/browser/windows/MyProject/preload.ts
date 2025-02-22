import '../../helpers/preload'
import {ipcRenderer} from "electron";
import TerminalLink from "browser/windows/MyProject/preload/terminalLink";
import api from "browser/api";
import apiMutators from "browser/api/mutator";

document.addEventListener('DOMContentLoaded', () => {
  console.log("init my project")
  console.log(ipcRenderer)
  window.sideAPI = {
    terminals: api.terminals,
    shells: api.shells,
    // @ts-expect-error
    mutators: {
      terminals: apiMutators.terminals,
      shells: apiMutators.shells
    },
  }
  setTimeout(async () => {
    console.log('Initializing the project')
    new TerminalLink(window)
  }, 500)
});