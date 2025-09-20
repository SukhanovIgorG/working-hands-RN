export type Shift = {
  id: string;
  logo: string;
  address: string;
  companyName: string;
  dateStartByCity: string;
  timeStartByCity: string;
  timeEndByCity: string;
  currentWorkers: number;
  planWorkers: number;
  priceWorker: number;
  customerRating: number | null;
  coordinates: {
    longitude: number;
    latitude: number;
  };
  workTypes: {
    id: number;
    name: string;
    nameGt5: string;
    nameLt5: string;
    nameOne: string;
  }[];
  customerFeedbacksCount: string;
  bonusPriceWorker: number;
  isPromotionEnabled: boolean;
};

export const mockShift: Shift = {
  id: 'cbb41d2d-fb42-4829-bfa8-ac8f26fc4ac6',
  logo: 'https://hwfiles.storage.yandexcloud.net/media/2490686/conversions/zolla-logo-logo-map.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=U_QPkwLIARFp404kniN5%2F20250919%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250919T172650Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86000&X-Amz-Signature=dd3d8abdcee5daba9a5eb01770b03559f11a4b2ed149925ab1adbf5c3d14d0e1',
  coordinates: {
    longitude: 20.500938,
    latitude: 54.725951,
  },
  address: 'Калининград, улица Генерал-лейтенанта Озерова, 17Б',
  companyName: 'Zolla',
  dateStartByCity: '21.09.2025',
  timeStartByCity: '15:00',
  timeEndByCity: '21:00',
  currentWorkers: 1,
  planWorkers: 1,
  workTypes: [
    {
      id: 2800,
      name: 'Услуги по выкладке товара в торговом зале',
      nameGt5: 'Работников торгового зала',
      nameLt5: 'Работника торгового зала',
      nameOne: 'Работник торгового зала',
    },
  ],
  priceWorker: 945,
  bonusPriceWorker: 0,
  customerFeedbacksCount: '5 отзывов',
  customerRating: null,
  isPromotionEnabled: false,
};
