import React from 'react'
import { View, Text, TouchableOpacity, Linking } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles'

interface InfoBadgeProps {
  forks: number
  stars: number
  fulllName: string
}

const InfoBadge = ({ forks, stars, fulllName }: InfoBadgeProps) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.infoContainer}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(`http://github.com/${fulllName}/network/members`)
          }}
          style={styles.label}
        >
          <MaterialIcon size={20} name="usb" />
          <Text style={styles.text}>Fork</Text>
        </TouchableOpacity>
        <View style={styles.size}>
          <Text>{forks}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(`http://github.com/${fulllName}/stargazers`)
          }}
          style={styles.label}
        >
          <MaterialIcon size={20} name="star-border" />
          <Text style={styles.text}>Star</Text>
        </TouchableOpacity>
        <View style={styles.size}>
          <Text>{stars}</Text>
        </View>
      </View>
    </View>
  )
}

export default InfoBadge
