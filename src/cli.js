import arg from 'arg';
import { createProject } from './new';


function parseArgumentsIntoOptions(rawArgs) {
    const args = arg(
      {
        '--name': String,
        '--git': Boolean,
        '--install': Boolean,
        '-n': '--name',
        '-g': '--git',
        '-y': '--yes',
        '-i': '--install',
      },
      {
        argv: rawArgs.slice(2),
      }
    );
    return {
      git: args['--yes'] || false,
      name: args._[1] || args['--name'],
      type: args._[0],
      runInstall: args['--install'] || false,
    };
   }

   

   export function cli(args) {
       // n||new 'The name of the new workspace and initial project.'
    let options = parseArgumentsIntoOptions(args);

    if(!options.type){
        console.log('mna need argument ')
        console.log('type mna -h for usage')
    }else if(options.type !== 'new' && options.type !== 'generate' && options.type !== 'n' && options.type !== 'g' ){
        console.log('invalid argument')
        console.log(options);
    }
    else{
        console.log(options);
        createProject(options)
    }
   }