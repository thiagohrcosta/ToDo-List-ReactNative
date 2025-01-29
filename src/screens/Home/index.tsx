import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { globalStyles } from "../../styles/global";
import { CreatedTasks } from "../../components/CreatedTasks";
import { CompletedTasks } from "../../components/CompletedTasks";
import React, { useContext, useEffect, useState } from "react";
import { TaskCard } from "../../components/TaskCard";
import { TaskContext } from "../../contexts/TaskContext";


type Task = {
  name: string;
  completed: boolean;
};

export function Home() {
  const [taskList, setTaskList] = useState<Task[]>([])
  const [taskName, setTaskName] = useState('')

  const { 
    createdTasksAmount,
    setCreatedTasksAmount, 
    completedTasksAmount, 
    handleUpdateDeleteTaskAmount,
    setCompletedTasksAmount
  } = useContext(TaskContext);


  function handleAddTask() {
    const data: Task = {
      name: taskName,
      completed: false,
    };

    setTaskList((prevState) => [...prevState, data]);
    setTaskName("")

    const createdTasksSum = [...taskList, data].filter(task => task.completed === false).length;
    setCreatedTasksAmount(createdTasksSum)

    console.log(taskList)
  }

  function handleDeleteTask(item) {
    Alert.alert("Remove", `Do you want to remove ${item.name} from list?`, [
      {
        text: "Yes",
        onPress: () => {
          setTaskList(prevState => prevState.filter(task => task !== item));
          handleUpdateDeleteTaskAmount()
          setCompletedTasksAmount(completedTasksAmount - 1)
        }
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
        <Image source={require('../../../assets/Logo.png')} style={styles.logoImage} />
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
          counter={createdTasksAmount}
        />
        <CompletedTasks
          counter={completedTasksAmount}
        />
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
          contentContainerStyle={{ paddingBottom: 300}}
        />
      </View>
    </View>
  )
}