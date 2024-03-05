import { View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import CircleButton from '../../components/CircleButton'
import { Entypo } from '@expo/vector-icons'
import { router } from 'expo-router'

const handlePress = (): void => {
  router.back()
}
const Create = (): JSX.Element => {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput multiline style={styles.input} value="" />
      </View>
      <CircleButton onPress={handlePress}>
        <Entypo name="check" size={36} color="#fffafa" />
      </CircleButton>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fffa',
  },
  inputContainer: {
    paddingVertical: 30,
    paddingHorizontal: 25,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
})

export default Create
