import {Terminal} from '@seleniumhq/side-model'
import {randomUUID} from 'crypto'
import BaseController from '../Base'
import {NodeSSH} from 'node-ssh';
import {Session} from "main/types";
import {ipcMain} from "electron";

export default class TerminalsController extends BaseController {

  constructor (session: Session) {
    super(session)
    ipcMain.on('myProject-terminal-testLink', async (event,args: Terminal) => {
      console.log(args)
      const conn = new NodeSSH();
      conn.connect({
        host: args.ip,
        port: args.port,
        username: args.user,
        password: args.pwd
      }).then(()=>{
        // 向主进程传参表示连接成功
        args.linked = true
        event.returnValue = args
      }).catch(()=>{
        args.linked = false
        // 向主进程传参表示连接失败
        event.returnValue = args
      })
    })
  }

  async create(param: Terminal): Promise<Terminal> {
    return {
      id: randomUUID(),
      name: param.name === undefined ? 'NewTerminal' : param.name,
      ip: param.ip,
      port: param.port,
      user: param.user,
      pwd: param.pwd,
      system: param.system,
      linked: false
    }
  }
  async linkTest(param: Terminal): Promise<boolean> {
    return new Promise<boolean>((resolve,_reject) => {
      const conn = new NodeSSH();
      conn.connect({
        host: param.ip,
        port: param.port,
        username: param.user,
        password: param.pwd
      }).then(()=>{
        // 表示连接成功
        resolve(true)
      }).catch(()=>{
        // 表示连接失败
        resolve(false)
      })
    })
  }
}
