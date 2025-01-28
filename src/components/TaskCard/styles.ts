import { StyleSheet } from "react-native";
import { globalStyles } from "../../styles/global";

export const styles = StyleSheet.create({
  taskCardContainer: {
    flex: 1,
    height: 64,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 10,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: `${globalStyles.colors.gray300}`,
    backgroundColor: `${globalStyles.colors.gray500}`,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },

  tasksCounterContainer: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 36,
    justifyContent: 'space-between', 
    flexDirection: 'row',          
    alignItems: 'center',   
  },

  checkboxInput: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },

  nameUncheck: {
    fontSize: 14,
    color: `#fff`,
  },

  nameChecked: {
    fontSize: 14,
    color: `${globalStyles.colors.gray300}`,
    textDecorationLine: "line-through",
  },

  trashIcon: {
    color: `#fff`
  },

  taskInformationContainer: {},
  
  checkIcon: {
    color: `#fff`
  }
})