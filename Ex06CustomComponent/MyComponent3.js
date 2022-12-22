import React from 'react'
import {View, Text, Button, TextInput, Image, StyleSheet} from 'react-native'

// class로 컴포넌트를 만들지 않고 함수로 컴포넌트의 역할을 대신

// function MyComponent3(){

// }

// 화살표함수
// const MyComponent3= ()=>{
//     return (
//         <View>
//             <Text>함수형 컴포넌트</Text>
//         </View>
//     )
// }

// export default MyComponent3

// 화살표함수
export default MyComponent3= ()=>{
    return (
        <View style={style.root}>
            <Text style={style.text}>함수형 컴포넌트 MyComponent3</Text>
        </View>
    )
}

const style= StyleSheet.create({
    root:{margin:4,},
    text:{color:'green', padding:2},
})