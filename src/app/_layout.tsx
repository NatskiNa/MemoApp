import { Stack } from 'expo-router'

const Layout = (): JSX.Element => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#778899',
        },
        headerTintColor: '#fffafa',
        headerTitle: 'Memo App',
        headerBackTitle: 'Back',
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: 'bold',
        },
      }}
    />
  )
}

export default Layout
