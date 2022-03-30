import { Text, View } from "react-native"

function Saludar({ name }) {
  return (
    <View>
      <Text>Saludos {name}</Text>
    </View>
  )
}

export { Saludar }