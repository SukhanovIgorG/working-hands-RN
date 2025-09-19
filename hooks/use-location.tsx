import { useEffect } from 'react';
import { Alert } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { locationStore } from '../stores';
import { requestLocationPermission } from '../utils/location';

export const useLocation = () => {
  const handleGetCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        locationStore.setLocation(
          position.coords.latitude,
          position.coords.longitude,
        );
      },
      error => {
        console.log('Ошибка:', error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  };

  useEffect(() => {
    (async () => {
      const hasPermission = await requestLocationPermission();
      if (!hasPermission) {
        Alert.alert('Нет доступа', 'Вы запретили доступ к геолокации');
        return;
      }
      handleGetCurrentLocation();
    })();
  }, []);

  return {
    handleGetCurrentLocation,
  };
};
