import {Terminal} from "@seleniumhq/side-model";

/**
 * Creates a new terminals
 */
export type Shape = (terminal: Terminal) => Promise<boolean>
