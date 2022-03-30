import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../screens/HomeScreen'
import { SettingsScreen } from '../screens/SettingsScreen'

const Stack = createStackNavigator

const NavigationStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.screen name='Home' component={HomeScreen} />
      <Stack.screen name='Settings' component={SettingsScreen} />
    </Stack.Navigator>
  )
}

export { NavigationStack }