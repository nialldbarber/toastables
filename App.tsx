import { StatusBar } from 'expo-status-bar'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'

const { width, height } = Dimensions.get('screen')

type Props = {
  isActive?: boolean
  /**
   * Position of where the toast message appears from
   */
  position: 'top' | 'left' | 'bottom' | 'right'
}

const horizontalStyles = {
  width: width,
}

const topStyles = {
  ...horizontalStyles,
}

const leftStyles = {}

const bottomStyles = {
  ...horizontalStyles,
}

const rightStyles = {}

const positionStyles = {
  top: topStyles,
  left: leftStyles,
  bottom: bottomStyles,
  right: rightStyles,
}

export function Toastable({ isActive, position = 'top' }: Props) {
  const animatedPositionValue = useSharedValue(0)

  const animatedPositionStyle = useAnimatedStyle(() => {
    const derivedPosition = position
    return {
      [derivedPosition]: animatedPositionValue.value,
    }
  }, [position])

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      height: 100,
      backgroundColor: 'red',
    },
  })

  return (
    <Animated.View
      style={[
        styles.container,
        positionStyles[position],
        animatedPositionStyle,
      ]}
    >
      <Text>I am a toast message!</Text>
    </Animated.View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.tsx to start working on your app!</Text>
      <Toastable position="top" />
      <Toastable position="bottom" />
      <Toastable position="left" />
      <Toastable position="right" />
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
