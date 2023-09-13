import { Image, ImageProps } from "react-native"

import { styles } from "./styles"

interface PostLikedAvatarProps extends ImageProps {}

export function PostLikedAvatar({ ...rest }: PostLikedAvatarProps) {
  return <Image style={styles.lastLiked} {...rest} />
}
