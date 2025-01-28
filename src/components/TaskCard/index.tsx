import React, { useContext, useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { globalStyles } from "../../styles/global";
import { CreatedTasks } from "../CreatedTasks";
import { CompletedTasks } from "../CompletedTasks";
import { TaskContext } from "../../contexts/TaskContext";

type TaskProps = {
  name: string;
  completed: boolean;
  onRemove: () => void;
};

export function TaskCard({ name, completed, onRemove }: TaskProps) {
    const { completedTasksAmount, setCompletedTasksAmount } = useContext(TaskContext);
  
  const [isCompleted, setIsCompleted] = useState(completed);

  const handleCheckboxPress = () => {
    if (isCompleted) {
      Alert.alert(
        "Uncheck Task",
        "Do you want to uncheck this task to set as incomplete?",
        [
          {
            text: "Yes",
            onPress: () => {
              setIsCompleted(false);
              console.log("Task marked as incomplete.");
              setCompletedTasksAmount(completedTasksAmount - 1)
            },
          },
          {
            text: "No",
            style: "cancel",
            onPress: () => {
              console.log("Task remains completed.");
            },
          },
        ],
        { cancelable: true }
      );
    } else {
      Alert.alert(
        "Check Task",
        "Do you want to check this task as completed?",
        [
          {
            text: "Yes",
            onPress: () => {
              setIsCompleted(true);
              console.log("Task marked as completed.");
              setCompletedTasksAmount(completedTasksAmount + 1)
            },
          },
          {
            text: "No",
            style: "cancel",
            onPress: () => {
              console.log("Task remains incomplete.");
            },
          },
        ],
        { cancelable: true }
      );
    }
  };

  return (
    <View style={styles.taskCardContainer}>
      <View>
        <View style={styles.checkboxInput}>
          <BouncyCheckbox
            size={24}
            fillColor={globalStyles.colors.purpleDark}
            unfillColor={globalStyles.colors.gray500}
            iconStyle={{ borderColor: "red" }}
            innerIconStyle={{ borderWidth: 2 }}
            textStyle={{ fontFamily: "JosefinSans-Regular" }}
            isChecked={isCompleted}
            disableBuiltInState={true} 
            onPress={handleCheckboxPress}
          />
          <View style={styles.taskInformationContainer}>
            <Text style={isCompleted ? styles.nameChecked : styles.nameUncheck}>
              {name}
            </Text>
          </View>
        </View>
      </View>

      <View>
        <TouchableOpacity
          onPress={onRemove}
        >
          <Text style={styles.trashIcon}>Trash</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
