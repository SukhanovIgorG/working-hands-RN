import { useState } from 'react';
import { getHandworksByLocation } from '../api/requests';
import { handWorkerStore } from '../stores';

export const useGetWorkers = () => {
  const [loading, setLoading] = useState(false);

  const handleGetWorkers = async (latitude: number, longitude: number) => {
    setLoading(true);
    try {
      const res = await getHandworksByLocation(latitude, longitude);
      console.log('res.data :>> ', res.data);
      handWorkerStore.setHandWorkers(res.data.data);
    } catch (error) {
      console.log('error :>> ', error);
    } finally {
      setLoading(false);
    }
  };

  return { handleGetWorkers, loading };
};
