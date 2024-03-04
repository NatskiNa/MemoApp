import { View, Text, StyleSheet } from 'react-native'

interface Props {
  children: string
}

const AddButton = (props: Props): JSX.Element => {
  const { children } = props
  return (
    <View style={styles.addButton}>
      <Text style={styles.addButtonLabel}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  addButton: {
    width: 65,
    height: 65,
    borderRadius: 65,
    backgroundColor: '#778899',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
  addButtonLabel: {
    color: 'white',
    fontSize: 40,
    lineHeight: 40,
  },
})

export default AddButton
