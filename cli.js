const project = require('./index.js');
const argParse = require('subheaven-arg');

argParse.init("subheaven-npm-base", "Cumprimenta alguém");
argParse.boolean("iacon", "Mostra a logo do Iacon");
argParse.boolean("lupe", "Mostra a figurinha do Lupe");
(async() => {
    if (argParse.validate()) {
        if (params['iacon']) {
            let logo = project.iacon();
            console.log(logo);
        } else if (params['lupe']) {
            let logo = project.lupe();
            console.log(logo);
        } else {
            console.log('Hello World');
        }
        process.exit()
    }
})();