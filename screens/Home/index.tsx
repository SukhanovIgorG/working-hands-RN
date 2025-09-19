import { StyleSheet } from 'react-native';
import { DefaultLayout } from '../../layouts/default';
import { Button, Layout, Text } from '@ui-kitten/components';

const HomeScreen = () => {
  return (
    <DefaultLayout>
      <Layout style={styles.container}>
        <Text>Ваша геолокация: </Text>
        <Button size="">Получить смены</Button>
      </Layout>
    </DefaultLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
});
