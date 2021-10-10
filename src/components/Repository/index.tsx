import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Card, Title, Paragraph, Chip, DataTable } from 'react-native-paper'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import { InfoBadge } from '../'
import { useAppContext, Repositories } from '../../context/AppContext'

import styles from './styles'

interface RepositoryProps {
  repositoryData: Repositories
}

const Repository = ({ repositoryData }: RepositoryProps) => {
  const { data, setData, storeData } = useAppContext()

  const isAlreadyIncluded = !!data.favorites?.find((repo: any) => repo?.id === repositoryData?.id)

  const handleFavorite = (repository: any) => () => {
    setData((prevState: any) => {
      if (!isAlreadyIncluded) {
        const state = {
          ...prevState,
          favorites: [...prevState.favorites, repository],
        }
        storeData(state)
        return state
      }
      const state = {
        ...prevState,
        favorites: prevState.favorites.filter((repo: any) => repo?.id !== repository?.id),
      }
      storeData(state)
      return state
    })
  }

  return (
    <Card style={styles.cardContainer} key={repositoryData.id}>
      <Card.Content style={styles.cardContent}>
        <Title>{repositoryData.name}</Title>
        <Paragraph>{repositoryData.description ?? '-'}</Paragraph>
        <View style={styles.footer}>
          <InfoBadge
            forks={repositoryData.forks_count}
            stars={repositoryData.stargazers_count}
            fulllName={repositoryData.full_name}
          />
          <TouchableOpacity style={styles.button} onPress={handleFavorite(repositoryData)}>
            <MaterialIcon name="heart" color={isAlreadyIncluded ? 'red' : 'black'} />
          </TouchableOpacity>
        </View>
      </Card.Content>
    </Card>
  )
}

export default Repository
