import { Image, ImageProps } from "react-native"

import { styles } from "./styles"

interface PostAvatarProps extends ImageProps {}

export function PostAvatar({ ...rest }: PostAvatarProps) {
  return <Image style={styles.postAvatar} {...rest} />
}
