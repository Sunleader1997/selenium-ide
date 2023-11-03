import {Terminal} from "@seleniumhq/side-model";
import {Mutator} from "../../types";
import {hasID} from "../../helpers";
import update from "lodash/fp/update";
import merge from "lodash/fp/merge";

/**
 * Creates a new terminals
 */
export type Shape = (
  terminal: Terminal,
  update: Partial<Omit<Terminal, 'linked'>>
) => Promise<Terminal>

export const mutator: Mutator<Shape> = (
  session,
  { params: [terminal, updates] }
) => {
  const terminalIndex = session.project.terminals.findIndex(hasID(terminal.id))
  const updatedSession = update(
    `project.terminals[${terminalIndex}]`,
    (terminal: Terminal) => merge(terminal, updates),
    session
  )
  return updatedSession
}
