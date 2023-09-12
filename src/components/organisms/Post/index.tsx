import { View, Text, Image, ImageProps } from "react-native"

import {
  MessengerIcon,
  FavoriteIcon,
  CommentIcon,
  SaveIcon,
  ProfileIcon,
} from "../../../global/styles/icons"

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
      <View style={styles.postHeader}>
        <Image source={ProfileIcon} style={styles.postAvatar} />
        <View>
          <Text style={styles.postUsername}>{data.username}</Text>
          <Text style={styles.postLocation}>{data.location}</Text>
        </View>
      </View>

      <Image source={data.cover} style={styles.cover} />

      <View style={styles.postFooter}>
        <View style={styles.postOptions}>
          <View style={styles.postOptionsSide}>
            <FavoriteIcon style={styles.postOptionsIcon} />
            <CommentIcon style={styles.postOptionsIcon} />
            <MessengerIcon style={styles.postOptionsIcon} />
          </View>

          <SaveIcon />
        </View>

        <View style={styles.postAbout}>
          <Image source={data.lastLiked.avatar} style={styles.lastLiked} />
          <Text style={styles.likes}>{data.likes}</Text>
        </View>
        <Text style={styles.description}>{data.description}</Text>
      </View>
    </View>
  )
}
