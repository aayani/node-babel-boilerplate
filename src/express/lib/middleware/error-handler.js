import { INTERNAL_SERVER_ERROR } from 'http-status-codes';

import logger from '../../../utils/logger';

export default ({ genericErrorMessage = 'An error has occurred' } = {}) => (
  err,
  req,
  res,
) => {
  if (process.env.NODE_ENV !== 'test') {
    logger.error(err.message || genericErrorMessage, 'error-handler');
  }

  if (err.status) {
    return res.status(err.status).json({
      type: err.name,
      message: err.message,
      errors: err.errors,
    });
  }

  return res
    .status(INTERNAL_SERVER_ERROR)
    .json({ message: genericErrorMessage });
};
