import { FlatList, StyleSheet } from 'react-native';
import { DefaultLayout } from '../../layouts/default';
import { Button, ButtonGroup, Layout, Text } from '@ui-kitten/components';
import { locationStore, shiftStore } from '../../stores';
import { useLocation, useGetShiftsByLocation } from '../../hooks';
import { observer } from 'mobx-react-lite';
import { ShiftCard } from '../../components';

const HomeScreen = () => {
  const { handleGetShifts, loading } = useGetShiftsByLocation();
  const { handleGetCurrentLocation } = useLocation();

  const location = `${locationStore.latitude} ${locationStore.longitude}`;
  const workers = shiftStore.list;

  const handleClickGetWorkers = () => {
    if (locationStore.latitude && locationStore.longitude) {
      handleGetShifts(locationStore.latitude, locationStore.longitude);
    }
  };

  return (
    <DefaultLayout>
      <Layout style={styles.container}>
        <Text style={styles.text}>Ваша геолокация: {location}</Text>
        <ButtonGroup>
          <Button disabled={loading} onPress={handleGetCurrentLocation}>
            Обновить геолокацию
          </Button>
          <Button disabled={loading} onPress={handleClickGetWorkers}>
            Получить смены
          </Button>
        </ButtonGroup>
        <FlatList
          data={workers}
          renderItem={({ item }) => <ShiftCard shift={item} />}
        />
      </Layout>
    </DefaultLayout>
  );
};

export default observer(HomeScreen);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
    height: '100%',
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
});
