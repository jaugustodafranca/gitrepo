import React from 'react'

import { View, Text } from 'react-native'

import { RepositoriesList } from '../../components'
import { useAppContext } from '../../context/AppContext'

import styles from './styles'

const Favorites = () => {
  const { data } = useAppContext()
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Favorites repository list:</Text>
      {data?.favorites?.length ? (
        <RepositoriesList data={data.favorites} />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.empty}>You don't have favorites yet.</Text>
        </View>
      )}
    </View>
  )
}

export default Favorites
