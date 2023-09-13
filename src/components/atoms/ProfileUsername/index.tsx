import { Text, TextProps } from "react-native"

import { styles } from "./styles"

interface ProfileUsernameProps extends TextProps {
  name: string
}

export function ProfileUsername({ name, ...rest }: ProfileUsernameProps) {
  return (
    <Text style={styles.username} {...rest}>
      {name}
    </Text>
  )
}
