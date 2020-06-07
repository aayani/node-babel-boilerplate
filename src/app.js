import server from './express';
import logger from './utils/logger';

export const getHttpServer = () => server;

export const bootstrap = async () => {
  try {
    logger.info(`🚀  App running in "${process.env.NODE_ENV}" mode`, 'Main');
  } catch (err) {
    logger.error(err.message, 'Main');
    process.exit(1);
  }
};
