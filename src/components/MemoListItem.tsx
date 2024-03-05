import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'

const MemoListItem = (): JSX.Element => {
  return (
    <View style={styles.memoListItem}>
      <View>
        <Text style={styles.memoTitle}>shopping list</Text>
        <Text style={styles.memoDate}>date and time</Text>
      </View>
      <TouchableOpacity>
        <Entypo name="cross" size={30} color="#d3d3d3" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#fffafa',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
  },
  memoTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#808080',
  },
})

export default MemoListItem
