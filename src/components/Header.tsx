import { View, Text, StyleSheet } from 'react-native'

const Header = (): JSX.Element => {
  return (
    <View style={styles.header}>
      <View style={styles.headerInner}>
        <Text style={styles.headerTitle}>Memo App</Text>
        <Text style={styles.signOut}>Sign out</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#778899',
    height: 110,
    justifyContent: 'flex-end',
  },
  headerInner: {
    alignItems: 'center',
  },
  signOut: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    color: '#f5f5f5',
  },
  headerTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    fontWeight: 'bold',
    color: '#fffafa',
  },
})

export default Header
