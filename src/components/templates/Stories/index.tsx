import { View, ViewProps } from "react-native"

import { Profiles, ProfileData } from "../../organisms/Profiles"

import { styles } from "./styles"

interface StoriesProps extends ViewProps {
  stories: ProfileData[]
}

export function Stories({ stories, ...rest }: StoriesProps) {
  return (
    <View style={styles.stories} {...rest}>
      <Profiles profiles={stories} />
    </View>
  )
}
