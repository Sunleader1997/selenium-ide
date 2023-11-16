import { Shell as ShellShap } from '@seleniumhq/side-model'
import { hasID } from '../../helpers/hasID'
import { CoreSessionData, Mutator } from '../../types/base'
import merge from 'lodash/fp/merge'
import update from 'lodash/fp/update'

/**
 * Changes the metadata of the selected suite
 */
export type Shape = (
  shellID: string,
  updates: Partial<ShellShap>
) => Promise<void>

export const mutator: Mutator<Shape> = (
  session: CoreSessionData,
  { params: [shellID, updates] }
) => {
  const shellIndex = session.project.shells.findIndex(hasID(shellID))
  const updatedSession = update(
    `project.shells[${shellIndex}]`,
    (shell: ShellShap) => merge(shell, updates),
    session
  )
  return updatedSession
}
