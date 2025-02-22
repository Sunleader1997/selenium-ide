import { WindowConfig } from 'browser/types'
import Electron from 'electron'

const width = 1050
export const window: WindowConfig['window'] = () => {
  const display = Electron.screen.getPrimaryDisplay()
  const win = {
    x: display.bounds.width - width,
    y: 20,
    width,
    height: 700,
    title: 'Project'
  }
  return win
}
