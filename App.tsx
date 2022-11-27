import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Toastable } from './src/components/Toastable'
import { useToastable } from './src/utils/methods'

export default function App() {
  const { visibility, showToastable } = useToastable()

  useEffect(() => {
    showToastable()
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.tsx to start working on your app!</Text>
      <Toastable
        position="top"
        title="This is the title!"
        message="Lorem ipsum"
      />
      <Toastable
        position="bottom"
        title="This is the title!"
        message="Lorem ipsum"
        autoClose={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
