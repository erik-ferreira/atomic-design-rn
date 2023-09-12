import { Image, ImageProps } from "react-native"

import { styles } from "../../../pages/Feed/styles"

interface PostPhotoProps extends ImageProps {}

export function PostPhoto({ ...rest }: PostPhotoProps) {
  return <Image style={styles.cover} {...rest} />
}
