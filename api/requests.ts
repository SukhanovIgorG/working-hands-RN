import instance from '../instances/api';

export const getHandworksByLocation = (latitude: number, longitude: number) => {
  return instance.get(
    `/shifts/map-list-unauthorized?latitude=${latitude}&longitude=${longitude}`,
  );
};
