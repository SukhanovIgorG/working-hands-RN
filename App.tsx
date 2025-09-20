import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { Navigation } from './navigation/router';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppContent />
      </SafeAreaProvider>
    </ApplicationProvider>
  );
}

function AppContent() {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
