import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../Home'
import FavoritesScreen from '../Favorites'

export type RootStackParamList = {
  Favorites: undefined
  'Search Repositories': undefined
}

const Stack = createStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search Repositories" component={HomeScreen} />
        <Stack.Screen name="Favorites" component={FavoritesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
