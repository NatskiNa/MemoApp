import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import Header from '../../components/Header'
import Button from '../../components/button'

const Login = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inner}>
        <Text style={styles.title}>Login</Text>
        <TextInput style={styles.input} value="Email Address" />
        <TextInput style={styles.input} value="Password" />
        <Button label="Submit" />
        <View style={styles.footer}>
          <Text style={styles.footerRegister}>Not registered?</Text>
          <TouchableOpacity>
            <Text style={styles.footerSignup}>Sign up here!</Text>
          </TouchableOpacity>
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
export default Login
