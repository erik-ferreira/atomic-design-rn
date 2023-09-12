import { View } from "react-native"

import { PostAvatar } from "../../atoms/PostAvatar"
import { PostUsername } from "../../atoms/PostUsername"
import { PostLocation } from "../../atoms/PostLocation"

import { ProfileIcon } from "../../../global/styles/icons"

import { styles } from "../../../pages/Feed/styles"

interface PostHeaderProps {
  username: string
  location: string
}

export function PostHeader({ username, location }: PostHeaderProps) {
  return (
    <View style={styles.postHeader}>
      <PostAvatar source={ProfileIcon} />

      <View>
        <PostUsername username={username} />
        <PostLocation location={location} />
      </View>
    </View>
  )
}
