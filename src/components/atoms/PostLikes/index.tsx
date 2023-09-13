import { Text, TextProps } from "react-native"

import { styles } from "./styles"

interface PostLikesProps extends TextProps {
  likes: string
}

export function PostLikes({ likes, ...rest }: PostLikesProps) {
  return (
    <Text style={styles.likes} {...rest}>
      {likes}
    </Text>
  )
}
