import { Text, TextInput,View, TouchableOpacity } from 'react-native';
import { styles } from "./styles"

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
      <TouchableOpacity style={styles.button}>
        <Text style={styles.nameButton}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.nameButton}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.miniText}>esqueceu a senha? Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
}

