import { makeAutoObservable } from 'mobx';
import { Shift } from '../types';

class ShiftStore {
  list: Shift[] = [];
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setLoading(value: boolean) {
    this.loading = value;
  }

  setShifts(workers: Shift[]) {
    this.list = workers;
  }
}

export const shiftStore = new ShiftStore();
