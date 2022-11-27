import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Toastable } from './src/components/Toastable'
import useTimeout from './src/hooks/useTimeout'
import { useToastable } from './src/utils/methods'

export default function App() {
  const { visibility, showToastable, hideToastable } = useToastable()

  useEffect(() => {
    showToastable()
  }, [])

  useTimeout(() => {
    hideToastable()
  }, 5000)

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
