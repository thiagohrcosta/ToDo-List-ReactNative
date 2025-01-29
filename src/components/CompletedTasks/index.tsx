import { Text, View } from "react-native";
import { styles } from "./styles";
import { useContext } from "react";
import { TaskContext } from "../../contexts/TaskContext";

type taskProps = {
  counter: number
};

export function CompletedTasks({ counter }: taskProps) {
  const { completedTasksAmount } = useContext(TaskContext);
  
  return (
    <View>
      <Text style={styles.text}>Completed Tasks - {completedTasksAmount}</Text>
    </View>
  );
}