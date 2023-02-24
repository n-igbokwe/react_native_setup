import React, {useEffect, useState} from 'react'
import {Button, View, Text} from 'react-native'
import { User } from './interface'
import axios from 'axios'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

type BlinkProps = {
  text: string
}

const Blink = (props: BlinkProps) => {
  const [isShowing, setIsShowing] = useState(true)


useEffect(() => {
  const toggle = setInterval(() => {
    setIsShowing(!isShowing)
  }, 1000)

  return () => clearInterval(toggle)
})


if (!isShowing){
  return null
};

return <Text> {props.text}</Text>
}


const BlinkApp = () => {
  return (
    <View style={{marginTop: 50}}>
      <Blink text="I love to blink" />
      <Blink text="Yes blinking is so great" />
      <Blink text="Why did they ever take this out of HTML" />
      <Blink text="Look at me look at me look at me" />
    </View>
  )
}

function HomeScreen({navigation}){
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
      title="Settings"
      onPress={() => navigation.navigate('Details', {
        itemId: 100,
        Item: 'cup'
      })}
      />
    </View>
  )
}

function DetailsScreen({navigation, route}){

  const {itemId, Item} = route.params
   return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings</Text>
      <Text> itemId: {JSON.stringify(itemId)}</Text>
      <Text> item: {JSON.stringify(Item)}</Text>
      <Button
      title="Settings"
      onPress={() => navigation.push('Details', {
        itemId: Math.floor(Math.random() * 100)
      })}
      />
      <Button title="Home" onPress={() => navigation.navigate('Home')}/>
      <Button title="Back" onPress={() => navigation.goBack()}/>
      <Button title='First Screen in Stack' onPress={() => navigation.popToTop()}/>
    </View> 
   )
}
const Stack = createNativeStackNavigator()

const App = () => {
  const [userData, setUserData] = useState<User[]>([])
  console.log('user data', userData)

  useEffect(() => {
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
    .then((response) =>{
      console.log(response, "<<<")
      setUserData(response.data)
    })
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='blink' component={BlinkApp}/>
        <Stack.Screen name='Home' component={HomeScreen} options={{title: 'Home Page'}}/>
        <Stack.Screen name='Details' component={DetailsScreen} options={{title: 'Settings'}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );

}

export default App;
