import {Terminal} from "@seleniumhq/side-model";
import {Mutator} from "../../types";
import update from "lodash/fp/update";

/**
 * Creates a new terminals
 */
export type Shape = (terminal: Terminal) => Promise<Terminal>

export const mutator: Mutator<Shape> = (session, { result }) =>
  update('project.terminals', (terminals) => terminals.concat(result), session)