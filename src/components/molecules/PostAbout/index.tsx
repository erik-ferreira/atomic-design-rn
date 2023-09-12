import { View, Text, Image, ImageProps } from "react-native"

import { styles } from "../../../pages/Feed/styles"

interface PostAboutProps {
  lastLikedAvatar: ImageProps
  likes: string
}

export function PostAbout({ lastLikedAvatar, likes }: PostAboutProps) {
  return (
    <View style={styles.postAbout}>
      <Image source={lastLikedAvatar} style={styles.lastLiked} />
      <Text style={styles.likes}>{likes}</Text>
    </View>
  )
}
