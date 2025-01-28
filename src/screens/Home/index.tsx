import { Alert, FlatList, Task, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { globalStyles } from "../../styles/global";
import { CreatedTasks } from "../../components/CreatedTasks";
import { CompletedTasks } from "../../components/CompletedTasks";
import React, { useState } from "react";
import { TaskCard } from "../../components/TaskCard";

type Task = {

  name: string;
  completed: boolean;
};

export function Home() {
  const [taskList, setTaskList] = useState<Task[]>([])
  const [taskName, setTaskName] = useState('')
  const [completedTasks, setCompletedTasks] = useState(0);

  function handleAddTask() {
    const data: Task = {
      name: taskName,
      completed: false,
    };

    setTaskList((prevState) => [...prevState, data]);
    setTaskName("")

    console.log(taskList)
  }

  function handleDeleteTask(item) {
    Alert.alert("Remove", `Do you want to remove ${item.name} from list?`, [
      {
        text: "Yes",
        onPress: () => setTaskList(prevState => prevState.filter(task => task !== item))
      },
      {
        text: "No",
        style: "cancel"
      }
    ])

    console.log(`${item} was removed.`)

  }

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
          onChangeText={setTaskName}
          value={taskName}
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={handleAddTask}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tasksCounterContainer}>
        <CreatedTasks 
          counter={2}
        />
        <CompletedTasks />
      </View>

      <View style={styles.taskListContainer}>
        <FlatList 
          data={taskList}
          keyExtractor={(item) => item.name}
          renderItem={( { item }) => (
            <TaskCard 
              name={item.name}
              completed={false}
              onRemove={() => handleDeleteTask(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text>
              No one on your list? Add participants to your event.
            </Text>
          )}
        />
      </View>
    </View>
  )
}