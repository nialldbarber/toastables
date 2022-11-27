import { Dimensions } from 'react-native'

export const { width, height } = Dimensions.get('screen')

export const horizontalStyles = {
  width: width,
}

export const topStyles = {
  ...horizontalStyles,
}

export const bottomStyles = {
  ...horizontalStyles,
}

export const positionStyles = {
  top: topStyles,
  bottom: bottomStyles,
}
