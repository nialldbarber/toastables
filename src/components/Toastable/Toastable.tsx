import { useEffect } from 'react'
import { StyleSheet, Text } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { useToastable } from '../../utils/methods'
import { positionStyles } from '../../styles'

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
  /**
   * Hmmmmmmm
   */
  isActive?: boolean
  /**
   * Position of where the toast message appears from
   * `Default: 'top'`
   */
  position: ToastPosition
  /**
   * Show a progress bar indicating how long the
   * toast message has left to display
   * `Default: false`
   */
  progressBar?: boolean
  /**
   * The time it takes in milliseconds for the toast
   * message to close
   * `Default: 5000`
   */
  autoClose?: number
  /**
   * Remove the toast when pressed
   * `Default: true`
   */
  closeOnPress?: boolean
  /**
   * Remove the toast when swiped
   * `Default: true`
   */
  closeOnSwipe?: boolean
}

const INITIAL_POSITION = -100

export function Toastable({
  title,
  message,
  isActive,
  position = 'top',
  progressBar = false,
  closeOnPress,
  closeOnSwipe,
}: Props) {
  const { visibility, showToastable, hideToastable } = useToastable()
  const animatedPositionValue = useSharedValue(INITIAL_POSITION)

  const animatedPositionStyle = useAnimatedStyle(() => {
    const derivedPosition = position
    return {
      [derivedPosition]: animatedPositionValue.value,
    }
  }, [position])

  useEffect(() => {
    if (visibility === 'show') {
      animatedPositionValue.value = withTiming(0)
    }
    return () => {
      animatedPositionValue.value = withTiming(INITIAL_POSITION)
    }
  }, [visibility])

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
