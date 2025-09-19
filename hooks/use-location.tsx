import { useEffect } from 'react';
import { PermissionsAndroid, Platform, Alert } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { locationStore } from '../stores';

async function requestLocationPermission() {
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Доступ к геолокации',
        message: 'Приложению нужен доступ к вашей геопозиции',
        buttonNeutral: 'Спросить позже',
        buttonNegative: 'Отмена',
        buttonPositive: 'OK',
      },
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  }
  return true;
}

export const useLocation = () => {
  const handleGetCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log('Широта:', position.coords.latitude);
        console.log('Долгота:', position.coords.longitude);
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
