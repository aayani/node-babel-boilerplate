import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const getElapsedTime = (dateTime, suffix = true) =>
  dayjs(dateTime).fromNow(!suffix);

export const getDateTime = (dateTime) => {
  if (dayjs(dateTime).year === dayjs().year) {
    return dayjs(dateTime).format('MMM D, hh:mm a');
  }

  return dayjs(dateTime).format("MMM D, 'YY, hh:mm a");
};

export const getDate = (dateTime) => {
  if (dayjs(dateTime).year === dayjs().year) {
    return dayjs(dateTime).format('MMM D');
  }

  return dayjs(dateTime).format("MMM D, 'YY");
};

export const getTime = (dateTime) => {
  return dayjs(dateTime).format('hh:mm a');
};
