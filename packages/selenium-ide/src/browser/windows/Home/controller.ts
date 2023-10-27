import { WindowConfig } from 'browser/types'
import Electron from 'electron'

const width = 550
export const window: WindowConfig['window'] = () => {
  const display = Electron.screen.getPrimaryDisplay()
  return {
    x: display.bounds.width - width,
    y: 20,
    width,
    height: 300,
    title: 'HOME',
  }
}
