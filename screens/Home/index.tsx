import { FlatList, StyleSheet } from 'react-native';
import { DefaultLayout } from '../../layouts/default';
import { Button, ButtonGroup, Layout, Text } from '@ui-kitten/components';
import { locationStore, handWorkerStore } from '../../stores';
import { useLocation, useGetWorkers } from '../../hooks';

const HomeScreen = () => {
  const { handleGetWorkers, loading } = useGetWorkers();
  const { handleGetCurrentLocation } = useLocation();

  const location = `${locationStore.latitude} ${locationStore.longitude}`;
  const workers = handWorkerStore.list;

  const handleClickGetWorkers = () => {
    if (locationStore.latitude && locationStore.longitude) {
      handleGetWorkers(locationStore.latitude, locationStore.longitude);
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
          renderItem={({ item }) => (
            <Text id={Math.random().toString()} style={styles.text}>
              {item.address}
            </Text>
          )}
        />
      </Layout>
    </DefaultLayout>
  );
};

export default HomeScreen;

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
