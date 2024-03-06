import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native'
import Button from '../../components/button'
import { Link, router } from 'expo-router'
import { useState } from 'react'
import { auth } from '../../config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const handlePress = (email: string, password: string): void => {
  //user sign-up
  console.log(email, password)
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user.uid)
      router.replace('/memo/list')
    })
    .catch((error) => {
      const { code, message } = error
      console.log(code, message)
      Alert.alert(message)
    })
}

const Signup = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign up</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => {
            setEmail(text)
          }}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="email address"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => {
            setPassword(text)
          }}
          autoCapitalize="none"
          secureTextEntry
          placeholder="password"
          textContentType="password"
        />
        <Button
          label="Submit"
          onPress={() => {
            handlePress(email, password)
          }}
        />
        <View style={styles.footer}>
          <Text style={styles.footerRegister}>Already registered?</Text>
          <Link href="/auth/login" asChild>
            <TouchableOpacity>
              <Text style={styles.footerSignup}>Login</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fffa',
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: '#c0c0c0',
    backgroundColor: 'white',
    height: 48,
    padding: 8,
    fontSize: 16,
    marginBottom: 16,
  },
  footer: {
    flexDirection: 'row',
  },
  footerRegister: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 24,
    color: 'black',
  },
  footerSignup: {
    fontSize: 14,
    lineHeight: 24,
    color: '#708090',
  },
})
export default Signup
