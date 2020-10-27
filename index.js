const package  = require('./package.json');
const minimist = require('minimist')

  module.exports = () => {
    console.log('MNA')
    console.log(package.version)
    const args = minimist(process.argv.slice(2))
    const cmd = args._[0]
  
    switch (cmd) {
        case 'new':
        case 'n':
          const appName = args._[1]
          console.log('create new app:  '+appName);
          break
        case 'generate':
        case 'g':
          const filesType = args._[1]
          const filesName = args._[2]
          console.log('generate files:  '+filesType + '/'+ filesName);
          break
        default:
          console.error(`"${cmd}" is not a valid command!`)
          break
      }
  }