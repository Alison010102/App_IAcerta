import { View,Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function Main(){
    return(
        <View style={styles.container}>
            <View>
                <Text>Qual materia você quer resolver as atividades?</Text>
            </View>
            <TouchableOpacity style={styles.materials}>
                <Text style={styles.textMaterials}>Português</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.materials}>
                <Text style={styles.textMaterials}>Matemática</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.materials}>
                <Text style={styles.textMaterials}>História</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.materials}>
                <Text style={styles.textMaterials}>Geografia</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.materials}>
                <Text style={styles.textMaterials}>Ciências</Text>
            </TouchableOpacity>
        </View>
    )
}