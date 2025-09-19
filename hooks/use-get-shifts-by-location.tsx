import { useState } from 'react';
import { getHandworksByLocation } from '../api/requests';
import { shiftStore } from '../stores';
import { Alert } from 'react-native';

export const useGetShiftsByLocation = () => {
  const [loading, setLoading] = useState(false);

  const handleGetShifts = async (latitude: number, longitude: number) => {
    setLoading(true);
    try {
      const res = await getHandworksByLocation(latitude, longitude);
      shiftStore.setShifts(res.data.data);
    } catch (error) {
      Alert.alert(`Ошибка получения смен: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return { handleGetShifts, loading };
};
