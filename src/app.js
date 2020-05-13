import config from './config';
import server from './express';
import logger from './utils/logger';

export const bootstrap = async () => {
  try {
    logger.info(`🚀  App running in "${process.env.NODE_ENV}" mode`, 'Main');

    await new Promise((resolve) => server.listen(config.port, resolve));
    logger.info(
      `🚀  Server running at http://localhost:${config.port} in "${process.env.NODE_ENV}" mode`,
      'Main',
    );
  } catch (err) {
    logger.error(err.message, 'Main');
    process.exit(1);
  }
};
