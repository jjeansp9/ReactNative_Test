import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";

// RN은 컴포넌트를 상속한 클래스만 화면에 보여짐
class MainComponent extends Component{
    // 이 컴포넌트가 보여줄 뷰를 만들어서 리턴해주는 라이프사이클 콜백 메소드 [ React를 꼭 import 해야함 ]
    render(){
        return (
            <View style={style.root}>
                {/* 콜백함수 등록할 때 함수명만 써야함 '()호출문'까지 쓰면 화면에 보일 때 자동실행됨 */}
                {/* <Button title="button" onPress={clickBtnFunction()}></Button> */}
                {/* 콜백함수를 클래스 밖에 전역함수로 지정할 수 있지만 권장하지 않음 */}
                {/* <Button title="button" onPress={clickBtnFunction}></Button> */}

                {/* 그래서 가급적 이벤트 처리용 콜백함수는 멤버메소드로 만들 것을 권장함 */}
                {/* JS언어에서는 멤버를 사용할 때 반드시 this. 키워드가 있어야만 함 */}
                <Button title="button" onPress={this.clickBtn}></Button>

                {/* 버튼 클릭시에 글씨변경해보기 */}
                <Button title="글씨변경" color='red' onPress={this.changeText}></Button>
                <Text>Hello</Text>
            </View>
        )
    }// render()

    // 버튼클릭 이벤트처리용 콜백메소드. class 안에서는 var, function과 같은 키워드 사용안함
    clickBtn(){
        Alert.alert('Clicked Button')
    }

    changeText(){
        
    }

}// MainComponent class

// 전역함수의 위치. MainComponent 클래스 밖임. 즉, 멤버가 아님
// 버튼을 클릭했을 때 발동할 콜백용 함수
// 동작은 되지만 컴포넌트의 멤버가 아니기에 컴포넌트의 버튼을 클릭하여 발동하는
// 콜백용으로 사용하기는 적합하지 않음 [예: 멤버변수 접근이 불가능]
function clickBtnFunction(){
    //alert('aaa')
    // RN용 경고창 다이얼로그
    Alert.alert('PRESS BUTTON')
}

// 컴포넌트들의 스타일을 설정하는 객체
const style= StyleSheet.create({
    root:{
        flex:1,
        padding:16,
    },
})



// MainComponent 클래스를 다른 .js문서에서 사용할 수 있도록
export default MainComponent