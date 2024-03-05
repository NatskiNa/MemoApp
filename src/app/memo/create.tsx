import { View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'
import { Entypo } from '@expo/vector-icons'

const Create = (): JSX.Element => {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <Header />
      <View style={styles.inputContainer}>
        <TextInput multiline style={styles.input} value="" />
      </View>
      <CircleButton>
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
