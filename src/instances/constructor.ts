import fs from 'fs'
import path from 'path'
import { getDateFormatted } from '../util/getDateFormatted'
import { Config, defaultConfig } from '../config/default';
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
        this.trigger = (log: any, store: boolean = false, config: Config = defaultConfig) => {
            let _log = log
            if (typeof log !== 'string') _log = JSON.stringify(log) 
            const output = this.color+
            "---------------------------------------\n"+
            `${this.emote} ${this.message} ${_log}`
            +"\n---------------------------------------"
            const log_output =
            "---------------------------------------\n"+
            `${this.message} ${_log}`
            +"\n---------------------------------------"
            console.log(
                output
                )
                console.log(config)
                if (store) {
                    const folder = path.join(process.cwd(),config.path)
                    if (!fs.existsSync(folder)) fs.mkdirSync(folder)
                    fs.writeFileSync(folder+(config.prefix ?? '')+getDateFormatted((config.timeStamp ?? 'HH/MM/SS'))+'.txt',getDateFormatted((config.timeStamp ?? 'HH/MM/SS'))+` ${this.name}`+` ALERT \r`+log_output.replace('\n',"\r\ "),'utf-8')
                }
        }
    }
}