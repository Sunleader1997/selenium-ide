import { BaseApi } from './types/base'
import { commands as dialogs } from './commands/dialogs'
import { commands as driver } from './commands/driver'
import { commands as menus } from './commands/menus'
import { commands as playback } from './commands/playback'
import { commands as plugins } from './commands/plugins'
import { commands as projects } from './commands/projects'
import { commands as recorder } from './commands/recorder'
import { commands as state } from './commands/state'
import { commands as suites } from './commands/suites'
import { commands as system } from './commands/system'
import { commands as tests } from './commands/tests'
import { commands as windows } from './commands/windows'
import { commands as terminals } from './commands/terminals'
import { commands as shells } from './commands/shells'

export interface ApiHoist extends BaseApi {
  dialogs: typeof dialogs
  driver: typeof driver
  menus: typeof menus
  playback: typeof playback
  plugins: typeof plugins
  projects: typeof projects
  recorder: typeof recorder
  state: typeof state
  suites: typeof suites
  system: typeof system
  tests: typeof tests
  windows: typeof windows
  terminals: typeof terminals
  shells: typeof shells
}

export const api: ApiHoist = {
  dialogs,
  driver,
  menus,
  playback,
  plugins,
  projects,
  recorder,
  state,
  suites,
  system,
  tests,
  windows,
  terminals,
  shells
}

export * from './helpers'
export * from './models'
export * from './process'
export * from './types'

export default api
