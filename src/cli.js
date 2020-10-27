import arg from 'arg';


function parseArgumentsIntoOptions(rawArgs) {
    const args = arg(
      {
        '--name': String,
        '--git': Boolean,
        '--install': Boolean,
        '-n': '--name',
        '-g': '--name',
        '-y': '--yes',
        '-i': '--install',
      },
      {
        argv: rawArgs.slice(2),
      }
    );
    return {
      git: args['--yes'] || false,
      name: args['--name'],
      template: args._[0],
      runInstall: args['--install'] || false,
    };
   }

   

   export function cli(args) {
    let options = parseArgumentsIntoOptions(args);
    console.log(options);
   }