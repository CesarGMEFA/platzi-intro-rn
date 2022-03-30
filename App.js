// import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NavigationStack } from './src/navigation/NavigationStack';
import { NavigationTab } from './src/navigation/NavigationTab';
import { NavigationDrawer } from './src/navigation/NavigationDrawer';
import { Saludar } from './src/components/Saludar'
import { DefaultProps } from './src/components/DefaultProps';


export default function App() {
  return (
    <NavigationContainer>
      {/* <NavigationStack /> */}
      {/* <NavigationTab /> */}
      <NavigationDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c4c4c4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
