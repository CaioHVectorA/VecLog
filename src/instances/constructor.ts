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
        this.trigger = (log: any) => {
            console.log(
                this.color+
                "---------------------------------------\n"+
                `${this.emote} ${this.message} ${log}`
                +"\n---------------------------------------"
                )
        }
    }
}
