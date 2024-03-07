import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { type Memo } from '../types/memo'

interface Props {
  memo: Memo
}

const MemoListItem = (props: Props): JSX.Element | null => {
  const { memo } = props
  const { bodyText, updatedAt } = memo
  if (bodyText === null || updatedAt === null) {
    return null
  }
  const dateString = updatedAt.toDate().toLocaleString('en-US')
  return (
    <Link href="/memo/detail" asChild>
      <TouchableOpacity style={styles.memoListItem}>
        <View>
          <Text numberOfLines={1} style={styles.memoTitle}>
            {bodyText}
          </Text>
          <Text style={styles.memoDate}>{dateString}</Text>
        </View>
        <TouchableOpacity>
          <Entypo name="cross" size={30} color="#d3d3d3" />
        </TouchableOpacity>
      </TouchableOpacity>
    </Link>
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
