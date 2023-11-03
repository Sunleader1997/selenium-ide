import { ipcRenderer } from "electron";
import {Terminal} from "@seleniumhq/side-model";

export default class TerminalLink{
  window: Window
  constructor(window: Window){
    this.window = window
    this.window.sideAPI.terminals.onTerminalLinkTest.addListener(
      this.onTerminalLinkTest
    )
  }
  onTerminalLinkTest(terminal: Terminal):  void {
    //eleTarget = event.target as HTMLElement
    ipcRenderer.sendSync('myProject-terminal-testLink',terminal)
  }
}