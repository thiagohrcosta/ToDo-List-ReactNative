import { StyleSheet } from "react-native";
import { globalStyles } from "../../styles/global";

export const styles = StyleSheet.create({
  container: {
    color: '#fff',
    backgroundColor: `${globalStyles.colors.gray600}`,
    flex: 1
  },

  logoContainer: {
    marginTop: 30,
    height: 173,
    backgroundColor: `${globalStyles.colors.gray700}`,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
    paddingVertical: 20,
  },

  logoText: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#fff'
  },

  logoImage: {
    width: 110,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center'
  },

  inputContainer: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: -32,
    flexDirection: 'row',
  },

  input: {
    flex: 1,
    height: 52,
    marginRight: 12,
    paddingLeft: 16,
    borderRadius: 6,
    color: `${globalStyles.colors.gray300}`,
    backgroundColor: `${globalStyles.colors.gray500}`
  },

  button: {
    width: 52,
    height: 52,
    backgroundColor: `${globalStyles.colors.blueDark}`,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    fontSize: 24,
    color: `${globalStyles.colors.gray100}`,
  },

  taskListContainer: {
    marginTop: 20,
  },

  tasksCounterContainer: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 36,
    justifyContent: 'space-between', 
    flexDirection: 'row',          
    alignItems: 'center',          
  },

  noItemList: {
    fontSize: 48,
    color: `#fff`
  }
})