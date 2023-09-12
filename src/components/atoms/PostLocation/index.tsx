import { Text, TextProps } from "react-native"

import { styles } from "../../../pages/Feed/styles"

interface PostLocationProps extends TextProps {
  location: string
}

export function PostLocation({ location, ...rest }: PostLocationProps) {
  return (
    <Text style={styles.postLocation} {...rest}>
      {location}
    </Text>
  )
}
