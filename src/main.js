import 'regenerator-runtime/runtime';

import server from './koa';
import config from './config';
import logger from './utils/logger';

const bootstrap = async () => {
  try {
    logger.info(`🚀  App running in "${process.env.NODE_ENV}" mode`, 'Main');

    await server.listen(config.port);
    logger.info(
      `🚀  Server running at http://localhost:${config.port} in "${process.env.NODE_ENV}" mode`,
      'Main',
    );
  } catch (err) {
    logger.error(err.message, 'Main');
    process.exit(1);
  }
};

bootstrap();
