import { Text, TextInput, View } from 'react-native';
import { styles } from "./src/styles"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>IAcerta</Text>
      <TextInput placeholder="Digite seu email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.textInputs}>
      </TextInput >
      <TextInput style={styles.textInputs}
      placeholder="Digite sua senha"
      secureTextEntry={true}
      ></TextInput>
    </View>
  );
}

