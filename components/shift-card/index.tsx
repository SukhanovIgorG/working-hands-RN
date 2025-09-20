import { StyleSheet, View, ViewProps } from 'react-native';
import { Card, Layout, Text } from '@ui-kitten/components';
import { Shift } from '../../types';

interface ShiftCardProps extends ViewProps {
  shift: Shift;
  onPressCard?: () => void;
}

export const ShiftCard = ({ shift, onPressCard }: ShiftCardProps) => {
  const {
    address,
    companyName,
    currentWorkers,
    dateStartByCity,
    planWorkers,
    priceWorker,
  } = shift;
  return (
    <>
      <Layout style={styles.topContainer} level="1">
        <Card
          onPress={onPressCard}
          style={styles.card}
          header={<Text category="h1">{companyName}</Text>}
          footer={
            <View style={styles.card}>
              <Text category="h6">Стоимость: {priceWorker} руб.</Text>
              <Text category="h6">
                Требуется работников: {currentWorkers} / {planWorkers}
              </Text>
            </View>
          }
        >
          <Text category="h6">{dateStartByCity}</Text>
          <Text>{address}</Text>
        </Card>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 4,
    gap: 4,
  },
});
