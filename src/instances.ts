class LoggerTemplate {
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
        this.trigger = (log: string) => {
            console.log(
                this.color+
                "---------------------------------------\n"+
                +"   "+this.emote+"  "+this.message+"  "+log
                +"\n---------------------------------------"
                )
        }
    }
}

export const teste = new LoggerTemplate('DEBUG','😀','\x1b[36m',' - ')