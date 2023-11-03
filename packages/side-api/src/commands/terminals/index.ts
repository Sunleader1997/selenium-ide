import type { Shape as Create } from './create'
import type { Shape as DeleteTerminal } from './delete'
import type { Shape as LinkTest } from './linkTest'
import type { Shape as OnTerminalLinkTest } from './onTerminalLinkTest'

import * as create from './create'
import * as deleteTerminal from './delete'
import * as linkTest from './linkTest'
import * as onTerminalLinkTest from './onTerminalLinkTest'


export const commands = {
  create,
  deleteTerminal,
  linkTest,
  onTerminalLinkTest,
}
/**
 * Provides a body of functions around editing test suites.
 */
export type Shape = {
  create: Create
  deleteTerminal: DeleteTerminal
  linkTest: LinkTest
  onTerminalLinkTest: OnTerminalLinkTest
}
