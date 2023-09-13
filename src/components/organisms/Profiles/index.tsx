import { FlatList, ImageProps } from "react-native"

import { styles } from "./styles"
import { Profile } from "../../molecules/Profile"

export interface ProfileData {
  id: string
  name: string
  avatar: ImageProps
}

interface ProfilesProps {
  profiles: ProfileData[]
}

export function Profiles({ profiles }: ProfilesProps) {
  return (
    <FlatList
      data={profiles}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.profiles}
      keyExtractor={(profile) => profile.id}
      renderItem={({ item }) => (
        <Profile key={item.id} name={item.name} avatar={item.avatar} />
      )}
    />
  )
}
