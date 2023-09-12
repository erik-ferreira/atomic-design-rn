import { View, Text, Image, ImageProps } from "react-native"

import { PostLikes } from "../../atoms/PostLikes"
import { PostLikedAvatar } from "../../atoms/PostLikedAvatar"

import { styles } from "../../../pages/Feed/styles"

interface PostAboutProps {
  lastLikedAvatar: ImageProps
  likes: string
}

export function PostAbout({ lastLikedAvatar, likes }: PostAboutProps) {
  return (
    <View style={styles.postAbout}>
      <PostLikedAvatar source={lastLikedAvatar} />
      <PostLikes likes={likes} />
    </View>
  )
}
