import 'regenerator-runtime/runtime';

import config from './config';
import logger from './utils/logger';

const bootstrap = async () => {
  try {
    logger.info(`🚀  App running in "${process.env.NODE_ENV}" mode`, 'Main');
    logger.info(`Config "key: ${config.key}"`, 'Main');
  } catch (err) {
    logger.error(err.message, 'Main');
    process.exit(1);
  }
};

bootstrap();
