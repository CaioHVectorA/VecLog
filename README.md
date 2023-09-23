# Veclog - Um Pacote de Registro Simples

Veclog é uma biblioteca que oferece funcionalidades de registro (logging) em diferentes níveis de gravidade, como DEBUG, ERROR, FATAL, INFO e WARNING. Além disso, você pode optar por salvar essas mensagens de log em um arquivo, se necessário.

## Instalação

Para instalar o pacote Veclog, você pode usar o npm:

```bash
npm install veclog
```
## Uso

Importe as funções de log do pacote que você deseja usar:

```javascript
import { debug, error, fatal, info, warning } from 'veclog';
```

### Debug

A função `debug` é usada para mensagens de depuração. 

```javascript
import { debug } from 'veclog';
    const value = 3;
    const fib = fibbonaci(3)
    debug(fib);
```

### Error

A função `error` é usada para mensagens de erro. 

```javascript
    fetch('https://api.example.com/user')
        .then(response => response.json())
        .then(data => {
            info(`Dados do usuário: ${JSON.stringify(data)}`);
        })
        .catch(err => {
            error(`Erro ao buscar dados do usuário: ${err}`, true); // Você pode setar o 2° Parâmetro como true para armazenar o log em arquivo
        });
```

### Fatal

A função `fatal` é usada para mensagens de erro graves que podem resultar no término do aplicativo. Um arquivo de log pode ser criado opcionalmente.

```javascript
    try {
        DB.start();
    } catch (err) {
        // Registrar o erro
        fatal(`Erro de conexão com o banco de dados: ${err}`, true);
    }
```

### Info

A função `info` é usada para mensagens informativas. Você pode optar por criar um arquivo de log.

```javascript
    fetch(api).then(res => res.json()).then(data => info(data))
```