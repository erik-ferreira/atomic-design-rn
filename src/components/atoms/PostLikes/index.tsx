import { Text, TextProps } from "react-native"

import { styles } from "../../../pages/Feed/styles"

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
