import { Image, ImageProps } from "react-native"

import { styles } from "../../../pages/Feed/styles"

interface PostLikedAvatarProps extends ImageProps {}

export function PostLikedAvatar({ ...rest }: PostLikedAvatarProps) {
  return <Image style={styles.lastLiked} {...rest} />
}
