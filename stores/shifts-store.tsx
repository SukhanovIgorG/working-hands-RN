import { makeAutoObservable } from 'mobx';
import { Shift } from '../types';
import { Alert } from 'react-native';
import { getHandworksByLocation } from '../api/requests';

class ShiftStore {
  shiftList: Shift[] = [];
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  private setLoading(value: boolean) {
    this.loading = value;
  }

  private setShifts(workers: Shift[]) {
    this.shiftList = workers;
  }

  fetchShifts = async (latitude: number, longitude: number) => {
    this.setLoading(true);
    try {
      const res = await getHandworksByLocation(latitude, longitude);
      shiftStore.setShifts(res.data.data);
    } catch (error) {
      Alert.alert(`Ошибка получения смен: ${error}`);
    } finally {
      this.setLoading(false);
    }
  };
}

export const shiftStore = new ShiftStore();
