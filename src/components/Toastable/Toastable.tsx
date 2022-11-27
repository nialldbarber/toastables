import { StyleSheet, Text } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'
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

export function Toastable({
  title,
  message,
  isActive,
  position = 'top',
  progressBar = false,
  closeOnPress,
  closeOnSwipe,
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
