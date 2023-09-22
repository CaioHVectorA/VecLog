import fs from 'fs'
import path from 'path'
import { getDateFormatted } from '../util/getHHMMSS'
export default class Logger {
    name: string;
    emote: string;
    color: string;
    message: string;
    trigger: Function;
    constructor(name: string, emote: string, color: string, message: string) {
        this.name = name;
        this.emote = emote;
        this.color = color;
        this.message = message;
        this.trigger = (log: any, store = false) => {
            const output = this.color+
            "---------------------------------------\n"+
            `${this.emote} ${this.message} ${log}`
            +"\n---------------------------------------"
            const log_output =
            "---------------------------------------\n"+
            `${this.message} ${log}`
            +"\n---------------------------------------"
            console.log(
                output
                )
                if (store) {
                    const folder = path.join(process.cwd(), '/logs/')
                    if (!fs.existsSync(folder)) fs.mkdirSync(folder)
                    fs.writeFileSync(folder+getDateFormatted()+'.txt',getDateFormatted()+` ${this.name}`+` ALERT \r`+log_output.replace('\n',"\r\ "),'utf-8')
                }
        }
    }
}
