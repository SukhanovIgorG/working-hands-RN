import { FlatList, StyleSheet } from 'react-native';
import { DefaultLayout } from '../../layouts/default';
import { Button, ButtonGroup, Layout, Text } from '@ui-kitten/components';
import { locationStore, shiftStore } from '../../stores';
import { observer } from 'mobx-react-lite';
import { ShiftCard } from '../../components';
import { useEffect, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../navigation/types';
import { AppRoutes } from '../../navigation/routes';

const HomeScreen = () => {
  const { latitude, longitude, getCurrentLocation, fetchPermissions } =
    locationStore;
  const { fetchShifts, shiftList, loading } = shiftStore;

  const navigation = useNavigation();

  const location = useMemo(
    () => latitude && longitude && `${latitude} ${longitude}`,
    [latitude, longitude],
  );

  const handleClickGetWorkers = () => {
    if (latitude && longitude) {
      fetchShifts(latitude, longitude);
    }
  };

  const handleGetCurrentLocation = () => {
    getCurrentLocation();
  };

  useEffect(() => {
    fetchPermissions();
    getCurrentLocation();
  }, [getCurrentLocation, fetchPermissions]);

  return (
    <DefaultLayout>
      <Layout style={styles.container}>
        <Text style={styles.text}>Ваша геолокация: {location && location}</Text>
        <ButtonGroup>
          <Button disabled={loading} onPress={handleGetCurrentLocation}>
            Обновить геолокацию
          </Button>
          <Button disabled={loading} onPress={handleClickGetWorkers}>
            Получить смены
          </Button>
        </ButtonGroup>
        <FlatList
          data={shiftList}
          renderItem={({ item }) => (
            <ShiftCard
              shift={item}
              onPressCard={() =>
                navigation.navigate(AppRoutes.ShiftDetails, {
                  id: item.id,
                })
              }
            />
          )}
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
