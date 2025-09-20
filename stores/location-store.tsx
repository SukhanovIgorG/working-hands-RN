import { makeAutoObservable } from 'mobx';
import { requestLocationPermission } from '../utils/location';
import { Alert } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

class LocationStore {
  latitude: number | null = null;
  longitude: number | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setLocation(lat: number, lon: number) {
    this.latitude = lat;
    this.longitude = lon;
  }

  getCurrentLocation = () => {
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

  async fetchPermissions() {
    const hasPermission = await requestLocationPermission();
    if (!hasPermission) {
      Alert.alert('Нет доступа', 'Вы запретили доступ к геолокации');
      return;
    }
    this.getCurrentLocation();
  }
}

export const locationStore = new LocationStore();
