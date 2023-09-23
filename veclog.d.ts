/** 
 * Registra uma mensagem de depuração.
 * 
 * @param {any} log - A mensagem de log a ser registrada.
 * @param {boolean} [store] - Um indicador opcional que determina se a mensagem deve ser armazenada.
 * @returns {void}
 */
export function debug(log: any, store?: boolean): void;

/**
 * Registra uma mensagem de erro.
 * 
 * @param {any} log - A mensagem de erro a ser registrada.
 * @param {boolean} [store] - Um indicador opcional que determina se a mensagem deve ser armazenada.
 * @returns {void}
 */
export function error(log: any, store?: boolean): void;

/**
 * Registra uma mensagem de erro fatal.
 * 
 * @param {any} log - A mensagem de erro fatal a ser registrada.
 * @param {boolean} [store] - Um indicador opcional que determina se a mensagem deve ser armazenada.
 * @returns {void}
 */
export function fatal(log: any, store?: boolean): void;

/**
 * Registra uma mensagem de informação.
 * 
 * @param {any} log - A mensagem de informação a ser registrada.
 * @param {boolean} [store] - Um indicador opcional que determina se a mensagem deve ser armazenada.
 * @returns {void}
 */
export function info(log: any, store?: boolean): void;

/**
 * Registra uma mensagem de aviso.
 * 
 * @param {any} log - A mensagem de aviso a ser registrada.
 * @param {boolean} [store] - Um indicador opcional que determina se a mensagem deve ser armazenada.
 * @returns {void}
 */
export function warning(log: any, store?: boolean): void;

/**
 * Configuração para personalizar o comportamento do logger.
 */
export interface LoggerConfig {
    /**
     * O caminho onde os logs serão armazenados.
     */
    path: string;

    /**
     * O formato de carimbo de data/hora para os logs (por exemplo, 'HH/MM/SS' ou 'HH/MM').
     */
    timeStamp: 'HH/MM/SS' | 'HH/MM';

    /**
     * O prefixo a ser adicionado a cada mensagem de log.
     */
    prefix: string;
}

/**
 * Classe de configuração para personalizar o comportamento do logger.
 */
export class Config implements LoggerConfig {
    path: string;
    timeStamp: 'HH/MM/SS' | 'HH/MM';
    prefix: string;

    constructor(options: { path?: string, timeStamp?: 'HH/MM/SS' | 'HH/MM', prefix?: string })
}
