import { makeAutoObservable } from 'mobx';

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
}

export const locationStore = new LocationStore();
