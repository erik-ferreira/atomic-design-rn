import { Text, TextProps } from "react-native"

import { styles } from "../../../pages/Feed/styles"

interface PostUsernameProps extends TextProps {
  username: string
}

export function PostUsername({ username, ...rest }: PostUsernameProps) {
  return (
    <Text style={styles.postUsername} {...rest}>
      {username}
    </Text>
  )
}
