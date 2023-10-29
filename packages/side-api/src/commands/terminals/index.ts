import type { Shape as Create } from './create'

import * as create from './create'


export const commands = {
  create,
}
/**
 * Provides a body of functions around editing test suites.
 */
export type Shape = {
  create: Create
}
