import React from 'react'
import { View } from 'react-native'
import { useAppContext } from '../../context/AppContext'
import { Header, RepositoriesList } from '../../components'

import styles from './styles'

const Home = () => {
  const { data } = useAppContext()

  return (
    <View style={styles.mainView}>
      <Header />
      <RepositoriesList data={data.loadedRepositories || []} />
    </View>
  )
}

export default Home
