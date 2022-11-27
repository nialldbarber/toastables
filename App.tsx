import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Toastable, useToastable } from './src/lib'

const options = {
  position: 'bottom',
  title: 'This is the title!',
  message: 'Lorem ipsum',
}

// calling a function `toastable`
// should then be picked up in the `<ToastableContainer />` component

export default function App() {
  const { visibility, show, hide } = useToastable()
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.tsx to start working on your app!</Text>
      <Toastable
        position="top"
        title="This is the title!"
        message="Lorem ipsum"
      />
      <Toastable options={options} />
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
