# subheaven-prompt-logo
Modulo para automatizar a impressão de logo e prompt de comando 

## Usar em modo CLI no prompt de comando
### Como instalar:
```shell
npm i -g subheaven-prompt-logo
```

### Como usar
```shell
subheaven-prompt-logo ?

subheaven-prompt-logo --iacon

subheaven-prompt-logo --lupe
```

## Usar no Node
Como instalar:
```shell
npm i subheaven-prompt-logo
```

### Como instancializar
```js
const logo = require('subheaven-prompt-logo');
```

### Como usar
```js
const iacon = logo.iacon();
console.log(iacon);

const lupe = logo.lupe();
console.log(lupe);
```