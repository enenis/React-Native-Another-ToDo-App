import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Input from './src/pages/Input'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/Context/reducers'
import InitalStore from "./src/Context/store"
import Output from './src/pages/Output'

const Tab = createBottomTabNavigator()

function Router(){
  return(
    <Provider store={createStore(reducers,InitalStore)}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='InputPage' component={Input} options={{headerShown:false}}/>
          <Tab.Screen name='OutputPage' component={Output} options={{headerShown:false}} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default Router