import { View, Text,TextInput, Button } from 'react-native'

function LoginForm() {
  return (
    <View>
      <TextInput placeholder="Email"/>
      <TextInput placeholder="Clave" />
      <Button title="Enviar" onPress={() => console.log('Enviado')} />
    </View>
  )
}

export { LoginForm }