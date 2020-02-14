import fs from 'fs';
import dotenv from 'dotenv';

import logger from '../utils/logger';

if (fs.existsSync('.env')) {
  dotenv.config();
} else {
  logger.error('Config file not found', 'Config');
  process.exit(1);
}

export default {
  key: String(process.env.VALUE),
};
