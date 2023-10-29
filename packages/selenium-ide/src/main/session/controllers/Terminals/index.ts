import { Terminal } from '@seleniumhq/side-model'
import { randomUUID } from 'crypto'
import BaseController from '../Base'

export default class TerminalsController extends BaseController {
  async create(param: Terminal): Promise<Terminal> {
    return {
      id: randomUUID(),
      name: param.name === undefined ? 'NewTerminal' : param.name,
      ip: param.ip,
      port: param.port,
      user: param.user,
      pwd: param.ip,
      system: param.system
    }
  }
}
