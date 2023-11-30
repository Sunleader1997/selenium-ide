/**
 * The shape of all the serialized bits in a SIDE file
 */

export interface CommandShape {
  id: string
  comment?: string
  command: string
  target?: string
  targets?: [string, string][]
  targetFallback?: [string, string][]
  value?: string
  values?: [string, string][]
  valueFallback?: [string, string][]
  isBreakpoint?: boolean
  skip?: boolean
  opensWindow?: boolean
  windowHandleName?: string
  windowTimeout?: number
}

export interface SnapshotTestShape {
  id: string
  snapshot: {
    commands: { [key: string]: '\n' }
    setupHooks: []
    teardownHooks: []
  }
}

export interface SnapshotShape {
  tests: SnapshotTestShape[]
  dependencies: { [key: string]: string }
  jest: {
    extraGlobals: string[]
  }
}

export interface SuiteShape {
  id: string
  name: string
  persistSession: boolean
  parallel: boolean
  timeout: number
  tests: string[]
}
export interface TestShape {
  id: string
  name: string
  children?: TestShape[]
  commands: CommandShape[]
}
export interface TestGroup {
  id: string
  name: string
  child: TestGroup[]
  tests: TestShape[]
}
export interface AlertType{
  id: string
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
  color: 'error' | 'info'
  msg: string
}

// ssh 设备
export interface Terminal {
  id: string
  name: string
  ip: string
  port: number
  user: string
  pwd: string
  system: string
  linked: boolean
}
// shell 脚本
export interface Shell{
  id: string
  name: string
  content: string
}

export interface ProjectShape {
  id: string
  version: '1.0' | '1.1' | '2.0' | '3.0'
  name: string
  url: string
  urls: string[]
  delay?: number
  plugins: string[]
  tests: TestShape[]
  suites: SuiteShape[]
  snapshot: SnapshotShape
  //testGroup: TestGroup[]
  terminals: Terminal[]
  shells: Shell[]
}
