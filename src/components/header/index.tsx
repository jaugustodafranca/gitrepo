import React, { useState, useCallback } from 'react'
import { View } from 'react-native'
import { TextInput, Text, Chip, ProgressBar } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { DialogError } from '../'
import { useAppContext, GlobalState, Repositories } from '../../context/AppContext'
import { api } from '../../service/api'

import styles from './styles'
import { RootStackParamList } from '_containers/AppNavigator'

const ERROR_MSG = {
  title: 'Ops!',
  message:
    'An error occurred while processing your request, please try again in few minutes or contact the support.',
}

const Header = () => {
  const [repoName, setRepoName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const { data, setData } = useAppContext()
  console.log('data', data)
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Search Repositories'>>()

  const toggleErrorDialog = () => {
    setError(prevState => !prevState)
  }

  const getRepositories = useCallback(async (): Promise<void> => {
    try {
      setLoading(true)
      const response: { data: Array<Repositories> } = await api.get(`/users/${repoName}/repos`)
      setData((prevState: GlobalState) => ({
        ...prevState,
        loadedRepositories: response.data,
      }))
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }, [repoName, setData])

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setRepoName}
        mode="outlined"
        value={repoName}
        label="Github username"
        onSubmitEditing={getRepositories}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <View style={styles.container}>
        <Chip icon="folder" style={{ marginRight: 10 }} textStyle={{ margin: 10 }} mode="outlined">
          <Text style={styles.chipText}>{data?.loadedRepositories?.length}</Text>
        </Chip>
        <Chip icon="heart" mode="outlined">
          <Text style={styles.chipText}>{data?.favorites?.length}</Text>
        </Chip>
        <Chip
          mode="outlined"
          style={styles.button}
          onPress={() => {
            navigation.navigate('Favorites')
          }}
        >
          See favorites
        </Chip>
      </View>
      <ProgressBar style={styles.loader} visible={loading} indeterminate={true} />
      <DialogError
        visible={error}
        handleConfirm={toggleErrorDialog}
        title={ERROR_MSG.title}
        message={ERROR_MSG.message}
      />
    </View>
  )
}

export default Header
