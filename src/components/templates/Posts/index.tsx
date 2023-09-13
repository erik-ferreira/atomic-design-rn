import { FlatList } from "react-native"

import { Post, PostData } from "../../organisms/Post"

import { styles } from "./styles"

interface PostsProps {
  posts: PostData[]
}

export function Posts({ posts }: PostsProps) {
  return (
    <FlatList
      data={posts}
      style={styles.posts}
      showsVerticalScrollIndicator={false}
      keyExtractor={(post) => post.id}
      renderItem={({ item }) => <Post data={item} />}
    />
  )
}
