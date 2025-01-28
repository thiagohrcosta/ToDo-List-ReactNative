import { Text, View } from "react-native";
import { styles } from "./styles";

type taskProps = {
  counter: number
}

export function CreatedTasks( {counter}: taskProps) {
  return (
    <View>
      <Text style={styles.text}>Created Tasks - {counter || 0}</Text>
    </View>
  )
}