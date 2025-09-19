import { useState } from 'react';
import { getHandworksByLocation } from '../api/requests';
import { HandWorker } from '../types';

export const useGetWorkers = () => {
  const [handworks, setHandworks] = useState<HandWorker[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGetWorkers = async (latitude: number, longitude: number) => {
    setLoading(true);
    try {
      const res = await getHandworksByLocation(latitude, longitude);
      setHandworks(res.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return { handworks, handleGetWorkers, loading };
};
