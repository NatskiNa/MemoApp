import { View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import CircleButton from '../../components/CircleButton'
import { Entypo } from '@expo/vector-icons'
import { router } from 'expo-router'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { db, auth } from '../../config'
import { useState } from 'react'

const handlePress = (bodyText: string): void => {
  if (auth.currentUser === null) {
    return
  }
  const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
  addDoc(ref, { bodyText, updatedAt: Timestamp.fromDate(new Date()) })
    .then((docRef) => {
      console.log('success', docRef.id)
      router.back()
    })
    .catch((error) => {
      console.log(error)
    })
}

const Create = (): JSX.Element => {
  const [bodyText, setBodyText] = useState('')
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          style={styles.input}
          value={bodyText}
          onChangeText={(text) => {
            setBodyText(text)
          }}
          autoFocus
        />
      </View>
      <CircleButton
        onPress={() => {
          handlePress(bodyText)
        }}
      >
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
