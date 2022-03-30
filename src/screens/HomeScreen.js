import { View, Text, Button, SafeAreaView } from "react-native";

const HomeScreen = ({ navigation }) => {
  console.log(navigation)

  const goToPage = () => {
    navigation.navigate('Settings')
  }

  return (
    <SafeAreaView>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Button title="Ir a Ajustes" onPress={goToPage} />
    </SafeAreaView>
  )
}

export { HomeScreen }