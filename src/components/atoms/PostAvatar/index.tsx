import { Image, ImageProps } from "react-native"

import { styles } from "../../../pages/Feed/styles"

interface PostAvatarProps extends ImageProps {}

export function PostAvatar({ ...rest }: PostAvatarProps) {
  return <Image style={styles.postAvatar} {...rest} />
}
