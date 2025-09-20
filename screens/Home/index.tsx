import { Alert, FlatList, StyleSheet, View } from 'react-native';
import { DefaultLayout } from '../../layouts/default';
import { Button, Layout, Text } from '@ui-kitten/components';
import { locationStore, shiftStore } from '../../stores';
import { observer } from 'mobx-react-lite';
import { ShiftCard } from '../../components';
import { useEffect, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AppRoutes } from '../../navigation/routes';

const HomeScreen = () => {
  const {
    latitude,
    longitude,
    getCurrentLocation,
    fetchPermissions,
    loading: locationLoading,
  } = locationStore;
  const { fetchShifts, shiftList, loading } = shiftStore;

  const navigation = useNavigation();

  const location = useMemo(
    () => latitude && longitude && `${latitude} ${longitude}`,
    [latitude, longitude],
  );

  const handleClickGetWorkers = () => {
    if (latitude && longitude) {
      fetchShifts(latitude, longitude);
    } else {
      Alert.alert('Не возможно получить смены', 'Проблемы с геолокацией');
    }
  };
  const handleGetCurrentLocation = () => {
    getCurrentLocation();
  };

  useEffect(() => {
    fetchPermissions();
    getCurrentLocation();
  }, [getCurrentLocation, fetchPermissions]);

  useEffect(() => {
    if (latitude && longitude) {
      fetchShifts(latitude, longitude);
    }
  }, [latitude, longitude, fetchShifts]);

  return (
    <DefaultLayout>
      <Layout style={styles.container}>
        <Text style={styles.text}>
          Ваша геолокация: {locationLoading ? 'Обновление...' : location}
        </Text>
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
        <View style={styles.buttonGroup}>
          <Button
            style={styles.button}
            disabled={loading}
            onPress={handleGetCurrentLocation}
          >
            Обновить геолокацию
          </Button>
          <Button
            disabled={loading}
            style={styles.button}
            onPress={handleClickGetWorkers}
          >
            Получить смены
          </Button>
        </View>
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
  buttonGroup: {
    width: '100%',
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'flex-start',
  },
  button: {
    flex: 1,
  },
});
