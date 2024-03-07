import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useState, useEffect } from 'react'
import CircleButton from '../../components/CircleButton'
import { Foundation } from '@expo/vector-icons'
import { router, useLocalSearchParams } from 'expo-router'
import { onSnapshot, doc } from 'firebase/firestore'
import { auth, db } from '../../config'
import { type Memo } from '../../types/memo'

const handlePress = (id: string): void => {
  router.push({ pathname: '/memo/edit', params: { id } })
}

const Detail = (): JSX.Element => {
  const id = String(useLocalSearchParams().id)
  console.log(id)
  const [memo, setMemo] = useState<Memo | null>(null)
  useEffect(() => {
    if (auth.currentUser === null) {
      return
    }
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
    const unsubscribe = onSnapshot(ref, (memoDoc) => {
      const { bodyText, updatedAt } = memoDoc.data() as Memo
      setMemo({
        id: memoDoc.id,
        bodyText,
        updatedAt,
      })
    })
    return unsubscribe
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle} numberOfLines={1}>
          {memo?.bodyText}
        </Text>
        <Text style={styles.memoDate}>
          {memo?.updatedAt?.toDate().toLocaleString('en-US')}
        </Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>{memo?.bodyText}</Text>
      </ScrollView>
      <CircleButton
        onPress={() => {
          handlePress(id)
        }}
        style={{ top: 60, bottom: 'auto' }}
      >
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
    paddingHorizontal: 25,
  },

  memoBodyText: {
    paddingVertical: 30,
    fontSize: 16,
    lineHeight: 24,
    color: 'black',
  },
})

export default Detail
