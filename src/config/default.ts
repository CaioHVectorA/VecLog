
interface config {
    path: string,
    timeStamp: 'HH/MM/SS' | 'HH/MM',
    prefix: string,
}

export class Config implements config {
    path: string = '/logs/';
    timeStamp: 'HH/MM/SS' | 'HH/MM' = 'HH/MM/SS';
    prefix: string = '';
    constructor({path = '/logs/',prefix = '',timeStamp = 'HH/MM/SS'} :{path: string, timeStamp: 'HH/MM/SS' | 'HH/MM', prefix: string}) {
        this.path = path
        this.timeStamp = timeStamp
        this.prefix = prefix
    }
}

export const defaultConfig = new Config({path: '/logs/',timeStamp: 'HH/MM/SS', prefix: ''})