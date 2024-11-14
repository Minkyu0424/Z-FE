import { DAYS_OF_WEEEK } from '../constants/common';

export const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getDay = (isoDate: string) => {
  const date = new Date(isoDate);
  const weekday = date.getDay();
  return DAYS_OF_WEEEK[weekday];
};

export const getHM = (dateString: string) => {
  const date = new Date(dateString);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};
