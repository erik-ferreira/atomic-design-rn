import React from "react"

import { View } from "react-native"

import {
  MessengerIcon,
  CameraIcon,
  LogoIcon,
  IgtvIcon,
} from "../../global/styles/icons"

import { Posts } from "../../components/templates/Posts"
import { Stories } from "../../components/templates/Stories"

import { posts } from "../../utils/posts"
import { profiles } from "../../utils/profiles"

import { styles } from "./styles"

export function Feed() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerSide}>
          <CameraIcon />
        </View>

        <LogoIcon />

        <View style={styles.headerSide}>
          <IgtvIcon />
          <MessengerIcon style={styles.messengerIcon} />
        </View>
      </View>

      <Stories stories={profiles} />

      <Posts posts={posts} />
    </View>
  )
}
