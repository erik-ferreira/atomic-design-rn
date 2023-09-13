import { View, Image, ImageProps } from "react-native"

import { ProfileUsername } from "../../atoms/ProfileUsername"

import { styles } from "./styles"

interface ProfileProps {
  name: string
  avatar: ImageProps
}

export function Profile({ name, avatar }: ProfileProps) {
  return (
    <View style={styles.profile}>
      <Image source={avatar} />
      <ProfileUsername name={name} />
    </View>
  )
}
