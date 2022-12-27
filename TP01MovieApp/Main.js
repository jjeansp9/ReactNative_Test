// ############## 앱 제작에 주요 작업순서 ##########################

// 1) react navigation(화면전환), AsyncStorage(데이터저장) 라이브러리 설치 - 완료
// 2) Intro 화몀ㄴ 컴포넌트 제작
// 3) Login 관련 화면 컴포넌트와 Navigator 제작 [ screen_login 폴더 ]
// 4) 앱의 주요기능 및 서브기능 관련 작업
//   4-1) 앱의 주요기능(영화정보제공) 화면 컴포넌트들과 Navigator 제작 [ screen_movie 폴더 ]
//   4-2) 앱의 서브기능(커뮤니티 등) 화면 컴포넌트들과 Navigator 제작 [ screen_community 폴더 ]

// ################################################################

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Intro from './Intro'
import LoginNav from './navigators/LoginNav'
import MainDrawerNav from './navigators/MainDrawerNav'

// 앱의 전체화면을 전환하는 최상위 StackNavigator 객체 생성
const RootStack = createStackNavigator()

// 함수형 컴포넌트로 제작
export default Main= ()=>{
    return(
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{headerShown:false}}>
                <RootStack.Screen name='Intro' component={Intro}></RootStack.Screen>
                <RootStack.Screen name='LoginNav' component={LoginNav}></RootStack.Screen>
                <RootStack.Screen name='MainDrawerNav' component={MainDrawerNav}></RootStack.Screen>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}



