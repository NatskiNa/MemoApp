import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'
import { Foundation } from '@expo/vector-icons'

const Detail = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>Shopping List</Text>
        <Text style={styles.memoDate}>Mon March 4 11:32</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>Shopping list detail</Text>
      </ScrollView>
      <CircleButton style={{ top: 167, bottom: 'auto' }}>
        <Foundation name="pencil" size={36} color="#fffafa" />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fffa',
  },
  memoHeader: {
    backgroundColor: '#dcdcdc',
    height: 90,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: '#708090',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  memoDate: {
    color: '#708090',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 30,
    paddingHorizontal: 25,
  },

  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: 'black',
  },
})

export default Detail
