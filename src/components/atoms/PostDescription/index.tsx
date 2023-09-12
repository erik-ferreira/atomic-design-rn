import { Text, TextProps } from "react-native"

import { styles } from "../../../pages/Feed/styles"

interface PostDescriptionProps extends TextProps {
  description: string
}

export function PostDescription({
  description,
  ...rest
}: PostDescriptionProps) {
  return (
    <Text style={styles.description} {...rest}>
      {description}
    </Text>
  )
}
