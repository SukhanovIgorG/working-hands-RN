import { Text } from '@ui-kitten/components';
import { DefaultLayout } from '../../layouts/default';
import { shiftStore } from '../../stores';
import { useMemo } from 'react';
import { ScreensProps } from '../../navigation/types';
import { AppRoutes } from '../../navigation/routes';

const ShiftDetailsScreen = ({
  route,
}: ScreensProps[AppRoutes.ShiftDetails]) => {
  const { id } = route.params;
  const { shiftList } = shiftStore;
  const shift = useMemo(
    () => shiftList.find(item => item.id === id),
    [shiftList, id],
  );

  return (
    <DefaultLayout>
      <Text>{JSON.stringify(shift, null, 2)}</Text>
    </DefaultLayout>
  );
};

export default ShiftDetailsScreen;
