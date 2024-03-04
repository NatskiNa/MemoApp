import { View, Text, StyleSheet } from 'react-native'

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>Memo App</Text>
          <Text>Sign out</Text>
        </View>
      </View>
      <View>
        <View>
          <View>
            <Text>shopping list</Text>
            <Text>date and time</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>shopping list</Text>
            <Text>date and time</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>shopping list</Text>
            <Text>date and time</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>shopping list</Text>
            <Text>date and time</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>
      <View>
        <Text>+</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Index
