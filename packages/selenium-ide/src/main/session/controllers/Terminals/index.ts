import { Terminal } from '@seleniumhq/side-model'
import { randomUUID } from 'crypto'
import BaseController from '../Base'
import ssh2 from 'ssh2';

export default class TerminalsController extends BaseController {
  async create(param: Terminal): Promise<Terminal> {
    return {
      id: randomUUID(),
      name: param.name === undefined ? 'NewTerminal' : param.name,
      ip: param.ip,
      port: param.port,
      user: param.user,
      pwd: param.ip,
      system: param.system,
      linked: false
    }
  }
  async linkTest(param: Terminal): Promise<boolean> {
    const conn = new ssh2.Client();
    conn.on('ready', () => {
      console.log('Client :: ready');
      conn.exec('uptime', (err, ) => {
        if (err) {
          console.warn(err)
          param.linked = false
        }
        param.linked = true
      });
    }).connect({
      host: param.ip,
      port: param.port,
      username: param.user,
      password: param.pwd
    });
    return param.linked
  }
}
