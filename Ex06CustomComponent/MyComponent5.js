import React, { useState } from 'react'
import {View,Text, Button, StyleSheet} from 'react-native'

export default MyComponent5= ()=>{

    let message= "hello" // 일반 지역변수
    // 일반변수에 값을 변경해도 화면갱신이 자동으로 되지 않음
    // 화면에 영향을 미치는 특별한 멤버변수 state가 필요함
    // 함수형컴포넌트는 state라는 특별한 멤버변수가 존재하지 않음
    // 그래서 등장한 새로운 기술 : HOOK -- state를 만들 수 있고. 라이프사이클메소드도 보유시켜주는 기술

    // "msg"라는 이름으로 state 변수와 이를 변경하는 setState()함수도 만들어보기
    let [msg, setMsg] = useState("Hello") // msg변수의 초기값 지정도 가능함
    let [age, setAge] = useState(2)

    return (
        <View style={style.root}>
            <Text style={style.text}>{msg}</Text>
            <Button title='글씨변경' onPress={()=>{ setMsg("Nice to meet you") }}></Button>
            
            <Text style={style.text}>{age}</Text>
            <Button title='숫자 증가' onPress={()=>{setAge(age+1)}} color='orange'></Button>
            
        </View>
    )
}


const style= StyleSheet.create({
    root:{margin:4, alignItems:'center',},
    text:{color:'green', padding:2, fontWeight:'bold', marginBottom:8,},
})