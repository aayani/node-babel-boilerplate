import chalk from 'chalk';

import { getDateTime } from './datetime';

export default {
  info: (msg, context = 'Info') => {
    console.log(
      chalk.yellow(`[${context}]`),
      msg,
      chalk.green(`[${getDateTime()}]`),
    );
  },
  error: (msg, context = 'Error') => {
    console.error(
      chalk.red(`[${context}]`),
      msg,
      chalk.green(`[${getDateTime()}]`),
    );
  },
};
