// RN은 화면전환 문법이 없음. 그래서 외부라이브러리 사용 (React Navigation Lib) : https://reactnavigation.org/
// 설치 : npm install @react-navigation/native

// # 화면전환을 해주는 객체 - Navigator
// # Navigator를 놓을 수 있는 NavigationContainer 를 최상위로 배치
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

// 화면전환 형태에 따라 여러종류의 Navigator가 있음 [첫줄에 기재한 사이트에서 가이드문서 참고]
// 원하는 Navigator를 쓰려면 각각 라이브러리를 추가해야함
// 1) StackNavigator
// 2) Bottom Tabs Navigator
// 3) Material Top Tabs Navigator
// 4) Drawer Navigator

// 우선 가장 기본인 StackNavigator 사용해보기
import { createStackNavigator } from '@react-navigation/stack'

// Stack에 의해 보여질 화면 컴포넌트들 import
import Home from './screen/Home'
import Second from './screen/Second'
import { Button } from 'react-native'

// StackNavigator 객체 생성
const Stack = createStackNavigator() 

// 단순히 Navigator만 가지고 있기에 함수형 컴포넌트로 제작
export default Main = ()=>{
    return (
        <NavigationContainer>
            {/* 원하는 화면전환 형태에 따라 해당 능력을 가진 Navigator를 선택 */}
            <Stack.Navigator 
                screenOptions={{
                    headerStyle:{backgroundColor:'green'},
                    headerTintColor:'white',
                    headerTitleStyle:{fontWeight:'bold'},
                    headerTitleAlign:'center',
                }}>
                {/* 화면컴포넌트 배치 - 각각 전환할때 사용할 별명을 name속성에 지정 */}
                <Stack.Screen 
                    name='Home!!'
                    component={Home}
                    options={{
                        title:'홈',
                        headerRight: () => <Button title='menu'></Button>
                    }}></Stack.Screen>
                <Stack.Screen name='Second!!' component={Second}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}