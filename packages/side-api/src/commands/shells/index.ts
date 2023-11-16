import type { Shape as Update } from './update'

import * as update from './update'

export const commands = {
  update,
}

/**
 * Provides a body of functions around editing test suites.
 */
export type Shape = {
  update: Update
}
