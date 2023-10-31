import {Terminal} from "@seleniumhq/side-model";
import {CoreSessionData, Mutator} from "../../types";
import update from "lodash/fp/update";
import {hasID, notHasID} from "../../helpers";

/**
 * Creates a new terminals
 */
export type Shape = (terminalId: string) => Promise<Terminal>

export const mutator: Mutator<Shape> = (session, { params: [terminalId] }) =>{
  const sessionWithoutTerminal: CoreSessionData = update(
    'project.terminals',
    (terminals) => terminals.filter(notHasID(terminalId)),
    session
  )
  const oldTerminals = session.project.terminals
  const terminalIndex = oldTerminals.findIndex(hasID(terminalId))
  const newTerminalIndex = Math.min(terminalIndex, oldTerminals.length - 2)
  const newActiveTerminal = sessionWithoutTerminal.project.terminals[newTerminalIndex]
  return {
    ...sessionWithoutTerminal,
    state: {
      ...sessionWithoutTerminal.state,
      activeTerminalID: newActiveTerminal.id,
    },
  }
}