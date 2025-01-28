import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { globalStyles } from "../../styles/global";
import { CreatedTasks } from "../../components/CreatedTasks";
import { CompletedTasks } from "../../components/CompletedTasks";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>TODO LIST</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          placeholderTextColor={globalStyles.colors.gray300}
          placeholder="Add one task"
        />

        <TouchableOpacity 
          style={styles.button}
          // onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tasksCounterContainer}>
        <CreatedTasks />
        <CompletedTasks />
      </View>
    </View>
  )
}