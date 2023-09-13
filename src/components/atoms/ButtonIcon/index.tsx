import React from "react"
import {
  BorderlessButton,
  BorderlessButtonProps,
} from "react-native-gesture-handler"
import { SvgProps } from "react-native-svg"

import { styles } from "./styles"

interface ButtonIconProps extends BorderlessButtonProps {
  icon: React.FC<SvgProps>
}

export function ButtonIcon({ icon: Icon, ...rest }: ButtonIconProps) {
  return (
    <BorderlessButton style={styles.postOptionsIcon} {...rest}>
      <Icon />
    </BorderlessButton>
  )
}
