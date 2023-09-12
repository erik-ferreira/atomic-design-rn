import { View, ImageProps } from "react-native"

import { PostPhoto } from "../../atoms/PostPhoto"
import { PostDescription } from "../../atoms/PostDescription"

import { PostAbout } from "../../molecules/PostAbout"
import { PostHeader } from "../../molecules/PostHeader"
import { PostOptions } from "../../molecules/PostOptions"

import { styles } from "../../../pages/Feed/styles"

export interface ProfileData {
  id: string
  name: string
  avatar: ImageProps
}

export interface PostData {
  id: string
  username: string
  location: string
  likes: string
  cover: ImageProps
  description: string
  lastLiked: ProfileData
}

interface PostProps {
  data: PostData
}

export function Post({ data }: PostProps) {
  return (
    <View style={styles.post}>
      <PostHeader username={data.username} location={data.location} />

      <PostPhoto source={data.cover} />

      <View style={styles.postFooter}>
        <PostOptions />

        <PostAbout lastLikedAvatar={data.lastLiked.avatar} likes={data.likes} />

        <PostDescription description={data.description} />
      </View>
    </View>
  )
}
