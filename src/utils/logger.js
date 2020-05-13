import chalk from 'chalk';

import { getDateTime } from './datetime';

export default {
  info: (msg, context = 'Info') => {
    if (process.env.NODE_ENV !== 'test') {
      console.log(
        chalk.yellow(`[${context}]`),
        msg,
        chalk.green(`[${getDateTime()}]`),
      );
    }
  },
  error: (msg, context = 'Error') => {
    if (process.env.NODE_ENV !== 'test') {
      console.error(
        chalk.red(`[${context}]`),
        msg,
        chalk.green(`[${getDateTime()}]`),
      );
    }
  },
};
