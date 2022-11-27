type ToastPosition = 'top' | 'bottom'

export type Props = {
  /**
   * Title of the toast message
   */
  title?: string
  /**
   * Body content of the toast message
   */
  message?: string
  isActive?: boolean
  /**
   * Position of where the toast message appears from
   * `Default: 'top'`
   */
  position: ToastPosition
  /**
   * Remove the toast when pressed
   * `Default: true`
   */
  closeOnPress?: boolean
}

import { ReactNode } from 'react'
import { StyleSheet, Text } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'
import { positionStyles } from '../../styles'

export function Toastable({
  title,
  message,
  isActive,
  position = 'top',
}: Props) {
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
      {title && <Text>{title}</Text>}
      {message && <Text>{message}</Text>}
    </Animated.View>
  )
}

export default Toastable
