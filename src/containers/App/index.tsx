import 'react-native-gesture-handler'
import React from 'react'
import AppContextProvider from '../../context/AppContext'
import { Provider as PaperProvider } from 'react-native-paper'
import AppNavigator from '../AppNavigator'

const App = () => {
  return (
    <AppContextProvider>
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </AppContextProvider>
  )
}

export default App
