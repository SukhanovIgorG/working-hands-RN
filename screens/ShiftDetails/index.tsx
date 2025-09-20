import { Text } from '@ui-kitten/components';
import { DefaultLayout } from '../../layouts/default';
import { shiftStore } from '../../stores';
import { useMemo } from 'react';
import { ScreensProps } from '../../navigation/types';
import { AppRoutes } from '../../navigation/routes';
import { ScrollView, StyleSheet, View } from 'react-native';

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
      <ScrollView style={styles.wrapper}>
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.label} category="h6">
              Компания:{' '}
            </Text>
            <Text style={styles.value} category="h5">
              {shift?.companyName}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label} category="h6">
              Адрес:{' '}
            </Text>
            <Text style={styles.value} category="h5">
              {shift?.address}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label} category="h6">
              Стоимость:{' '}
            </Text>
            <Text style={styles.value} category="h5">
              {shift?.priceWorker}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label} category="h6">
              Бонус:{' '}
            </Text>
            <Text style={styles.value} category="h5">
              {shift?.bonusPriceWorker}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label} category="h6">
              Дата начала:{' '}
            </Text>
            <Text style={styles.value} category="h5">
              {shift?.dateStartByCity}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label} category="h6">
              Время начала:{' '}
            </Text>
            <Text style={styles.value} category="h5">
              {shift?.timeStartByCity}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label} category="h6">
              Время окончания:{' '}
            </Text>
            <Text style={styles.value} category="h5">
              {shift?.timeEndByCity}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label} category="h6">
              Рейтинг клиента:{' '}
            </Text>
            <Text style={styles.value} category="h5">
              {shift?.customerRating || 'Нет рейтинга'}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label} category="h6">
              Необходимое количество сотрудников:{' '}
            </Text>
            <Text style={styles.value} category="h5">
              {shift?.planWorkers}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label} category="h6">
              Фактическое количество сотрудников:{' '}
            </Text>
            <Text style={styles.value} category="h5">
              {shift?.currentWorkers}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label} category="h6">
              Обязанности:{' '}
            </Text>
            <Text style={styles.value} category="h5">
              {shift?.workTypes.map(item => item.name).join(', ')}
            </Text>
          </View>
        </View>
      </ScrollView>
    </DefaultLayout>
  );
};

export default ShiftDetailsScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 16,
    height: '100%',
  },
  card: {
    padding: 16,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
  },
  label: {
    color: 'gray',
  },
  value: {
    color: 'black',
    fontWeight: 'medium',
  },
});
