import { makeAutoObservable } from 'mobx';
import { HandWorker } from '../types';

class HandWorkerStore {
  list: HandWorker[] = [];
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setLoading(value: boolean) {
    this.loading = value;
  }

  setHandWorkers(workers: HandWorker[]) {
    this.list = workers;
  }
}

export const handWorkerStore = new HandWorkerStore();
