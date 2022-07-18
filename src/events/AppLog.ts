// Code imported from Nivaldo Farias' typescript-project-template
// https://github.com/NivaldoFarias/typescript-project-template/blob/main/src/events/AppLog.ts

import chalk from 'chalk';

interface Logs {
  [key: string]: string;
}

type LogTypes =
  | 'Middleware'
  | 'Controller'
  | 'Repository'
  | 'Server'
  | 'Service'
  | 'Util'
  | 'Error'
;

const types: Logs = {
  Middleware: 'magenta',
  Controller: 'green',
  Repository: 'blue',
  Server: 'yellow',
  Service: 'cyan',
  Util: 'cyan',
  Error: 'red',
};

const AppLog = (type: LogTypes, text: string) => {
  console.log(
    chalk.bold[
      types[type] as 'green' | 'magenta' | 'blue' | 'yellow' | 'cyan' | 'red'
    ](`[${type}] ${text}`),
  );
};

export default AppLog;