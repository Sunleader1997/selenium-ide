import type { Shape as Create } from './create'
import type { Shape as DeleteTerminal } from './delete'
import type { Shape as LinkTest } from './linkTest'

import * as create from './create'
import * as deleteTerminal from './delete'
import * as linkTest from './linkTest'


export const commands = {
  create,
  deleteTerminal,
  linkTest,
}
/**
 * Provides a body of functions around editing test suites.
 */
export type Shape = {
  create: Create
  deleteTerminal: DeleteTerminal
  linkTest: LinkTest
}
