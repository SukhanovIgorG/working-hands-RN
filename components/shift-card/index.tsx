import { Image, StyleSheet, View, ViewProps } from 'react-native';
import { Card, Layout, Text } from '@ui-kitten/components';
import { Shift } from '../../types';

interface ShiftCardProps extends ViewProps {
  shift: Shift;
  onPressCard?: () => void;
}

export const ShiftCard = ({ shift, onPressCard }: ShiftCardProps) => {
  const { address, companyName, dateStartByCity, priceWorker, logo } = shift;
  return (
    <>
      <Layout style={styles.topContainer} level="1">
        <Card
          onPress={onPressCard}
          style={styles.card}
          footer={
            <View style={styles.card}>
              <Text category="h6">Стоимость: {priceWorker} руб.</Text>
            </View>
          }
        >
          <View style={styles.shopNameContainer}>
            <Text category="h1" style={{ width: 200 }}>
              {companyName}
            </Text>
            <Image source={{ uri: logo }} style={styles.logo} />
          </View>
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
  shopNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
  },
});
