import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { doc, deleteDoc } from 'firebase/firestore'
import { auth, db } from '../config'
import { type Memo } from '../types/memo'

interface Props {
  memo: Memo
}

const handlePress = (id: string): void => {
  if (auth.currentUser === null) {
    return
  }
  const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
  Alert.alert('delete your memo', 'OK to delete?', [
    {
      text: 'Cancel',
    },
    {
      text: 'Delete',
      style: 'destructive',
      onPress: () => {
        deleteDoc(ref).catch(() => {
          Alert.alert('Cannot delete your memo')
        })
      },
    },
  ])
}

const MemoListItem = (props: Props): JSX.Element | null => {
  const { memo } = props
  const { bodyText, updatedAt } = memo
  if (bodyText === null || updatedAt === null) {
    return null
  }
  const dateString = updatedAt.toDate().toLocaleString('en-US')
  return (
    <Link href={{ pathname: '/memo/detail', params: { id: memo.id } }} asChild>
      <TouchableOpacity style={styles.memoListItem}>
        <View>
          <Text numberOfLines={1} style={styles.memoTitle}>
            {bodyText}
          </Text>
          <Text style={styles.memoDate}>{dateString}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            handlePress(memo.id)
          }}
        >
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
