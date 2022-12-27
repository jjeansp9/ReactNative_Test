import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// 사용할 스크린 컴포넌트들 import
import Login from '../screen_login/Login'
import Signup from '../screen_login/Signup'
import ResetPassword from '../screen_login/ResetPassword'

const Stack = createStackNavigator()

export default LoginNav = ()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Login' component={Login}></Stack.Screen>
            <Stack.Screen name='Signup' component={Signup}></Stack.Screen>
            <Stack.Screen name='ResetPassword' component={ResetPassword}></Stack.Screen>
        </Stack.Navigator>
    )
}
