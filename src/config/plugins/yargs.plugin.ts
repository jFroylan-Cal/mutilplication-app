import yargs from "yargs";

export const yarg = yargs(process.argv)
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiplication table base',
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplication limit',
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'show the multiplication table',
    })
    .option('O', {
        alias: 'output',
        type: 'string',
        default: './outputs',
        describe: 'output folder',
    })
    .option('f', {
        alias: 'file',
        type: 'string',
        default: 'table',
        describe: 'output file name',
    })
    .check((argv) => {
        if (argv.b < 1) {
            throw new Error('You must provide a base positive number')
        }
        return true;
    })
    .parseSync();