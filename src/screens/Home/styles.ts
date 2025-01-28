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
  },

  logoText: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#fff'
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

  tasksCounterContainer: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 36,
    justifyContent: 'space-between', 
    flexDirection: 'row',          
    alignItems: 'center',          
  }
})