import React, { useState, createContext, useContext, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export interface Repositories {
  id: number
  name: string
  description: string
  forks_count: number
  stargazers_count: number
  full_name: string
}
export interface GlobalState {
  loadedRepositories?: Repositories[]
  favorites?: Repositories[]
}

type cacheData = string | null | undefined

type ContextType = {
  data: GlobalState
  setData: React.Dispatch<React.SetStateAction<GlobalState>>
}

const INITIAL_PROPS = {
  loadedRepositories: [],
  favorites: [],
}

export const AppContext = createContext<ContextType>({ data: INITIAL_PROPS, setData: () => {} })

const AppContextProvider = ({ children }) => {
  const [data, setData] = useState<GlobalState>(INITIAL_PROPS)

  const loadData = async () => {
    const state: cacheData = (await AsyncStorage.getItem('APP::STATE')) || '{}'
    setData((prevState: GlobalState) => ({ ...prevState, favorites: JSON.parse(state) }))
  }

  useEffect(() => {
    loadData()
  }, [])

  const value = { data, setData }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppContextProvider

interface UseAppContextReturn extends ContextType {
  storeData: (data: GlobalState) => void
}

export const useAppContext = () => {
  const context = useContext<ContextType>(AppContext)
  const { data, setData } = context

  const storeData = (data: GlobalState) => {
    AsyncStorage.setItem('APP::STATE', JSON.stringify(data.favorites))
  }

  return { data, setData, storeData } as UseAppContextReturn
}
