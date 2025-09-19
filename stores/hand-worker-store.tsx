import { makeAutoObservable } from 'mobx';
import { Shift } from '../types';

class HandWorkerStore {
  list: Shift[] = [];
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setLoading(value: boolean) {
    this.loading = value;
  }

  setHandWorkers(workers: Shift[]) {
    this.list = workers;
  }
}

export const handWorkerStore = new HandWorkerStore();
