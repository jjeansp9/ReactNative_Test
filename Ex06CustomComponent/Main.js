import React, {Component} from 'react'
import {View,Text,TextInput,Image,Button, StyleSheet} from 'react-native'
import MyComponent from './MyComponent'
import MyComponent2 from './MyComponent2'
import MyComponent3 from './MyComponent3'
import MyComponent4 from './MyComponent4'
import MyComponent5 from './MyComponent5'

export default class Main extends Component{
    
    state= {
        msg: "Custom Component"
    }

    render(){
        return (
            <View style={style.root}>
                <Text style={style.title}>{this.state.msg}</Text>

                {/* 나만의 Component 만들어 사용해보기 [마치 Fragment 처럼] */}
                <MyComponent></MyComponent>
                <MyComponent></MyComponent>

                {/* 별도의 컴포넌트를 사용할 때 다른 데이터가 보이도록 값을 전달 */}
                <MyComponent2 aaa='Sam' btnTitle= 'hello SAM' color='green' onPress={this.clickBtn}></MyComponent2>
                <MyComponent2 aaa='Robin' btnTitle= 'hello ROBIN' color= 'indigo' onPress={this.clickBtn}></MyComponent2>
                
                {/* Component를 상속받는 클래스를 만들어서 사용하는 방법으로 하면 코드가 길어짐 */}
                {/* 함수도 객체니까 함수를 Component 역할로 사용할 수도 있음 */}
                {/* Functional Component(함수형 컴포넌트) 라고 부름 - 요즘 대세 */}
                
                {/* 컴포넌트를 리턴하는 함수를 호출하여 컴포넌트를 보여주기 */}
                {MyComponent3()}
                {/* 이 함수를 마치 컴포넌트처럼 태그문으로 사용할 수 있도록 허용 */}
                <MyComponent3></MyComponent3>

                {/* 함수형컴포넌트를 사용하면서 값을 전달하기 */}
                <MyComponent4 name='SAM' title='press' color='yellow'></MyComponent4>
                <MyComponent4 name="Robin" title='click' color='aqua'></MyComponent4>

                {/* 함수형컴포넌트에서 state 사용해보기 */}
                <MyComponent5></MyComponent5>

            </View>
        )
    }

    clickBtn= ()=>{
        alert("clicked Button")
    }

}

// style 객체
const style= StyleSheet.create({
    root:{flex:1,padding:16,},
    title:{color:'black', fontSize:24, padding:8, fontWeight:'bold'},

    
})