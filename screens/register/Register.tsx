import { View, Text, TouchableOpacity, TextInput } from "react-native"; 
import { styles } from "./styles";

export default function Register(){
    return(

        <View style={styles.container}>
        <Text>Cadastre-se agora para aprender mais !</Text>
        <TextInput placeholder="Digite seu nome">
        </TextInput>
        <TextInput placeholder="Digite um email válido"></TextInput>
        <TextInput placeholder="Digite sua senha"></TextInput>
        <TouchableOpacity style={styles.button}>
            <Text>finalizar</Text>
        </TouchableOpacity>
    </View>
    )
}