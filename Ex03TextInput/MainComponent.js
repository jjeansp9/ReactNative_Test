import React, {Component} from 'react'
import {View, Text, Button, TextInput, StyleSheet, Alert} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

// 다른 js에선 사용할 것이므로 class를 선언하면서 export까지
export default class MainComponent extends Component{

    // 화면에 영향을 주는 아주 특별한 변수
    state= {
        msg: 'hello',
        msg2: 'hello2',
        msg3: 'hello3',
    }

    // 화면변경에 영향이 없는 일반 멤버변수
    // TextInput의 글씨가 변경될때마다 그 글씨를 저장하는 변수
    data=""

    render(){
        return (
            <View style={style.root}>
                {/* 사용자 글씨 입력 컴포넌트 */}
                {/* 스타일이 없으면 화면에 안보임 */}
                {/* 기본적으로는 한줄입력 */}
                <TextInput style={style.input}></TextInput>

                {/* 글씨를 입력할 때마다 글씨가 아래쪽에 Text 컴포넌트에 보이도록 */}
                <TextInput style={style.input} onChangeText={this.changeTxt}></TextInput>
                <Text style={style.txt}>{this.state.msg}</Text>

                {/* 글씨를 입력하고 키보드의 완료버튼을 눌렀을 때 써있는 글씨를 Text에 보여주기 */}
                <TextInput style={style.input} onSubmitEditing={this.submitEdit}></TextInput>
                <Text style={style.txt}>{this.state.msg2}</Text>

                {/* 글씨를 입력하고 아래 위치한 버튼을 클릭했을 때 글씨를 보여주기 */}
                {/* 여러줄 입력 속성 */}
                <TextInput multiline={true} numberOfLines= {3} onChangeText={this.changeText2} style={style.input}></TextInput>
                <Button title='button' onPress={this.onClick}></Button>
                <Text style={style.txt}>{this.state.msg3}</Text>
            </View>
        )
    }

    // TextInput 컴포넌트의 글씨가 변경될 때마다 발동하도록 등록한 콜백용 메소드
    changeTxt= (inputText) =>{ // 변경된 글씨가 이 콜백용 메소드의 파라미터로 전달되어 옴
        // Text 컴포넌트가 보여주는 값을 가진 state 변수의 값을 변경
        this.setState({msg: inputText})
    }

    // TextInput 컴포넌트의 입력을 완료하고 키보드의 완료버튼을 클릭했을 때 반응하도록 등록한 콜백 메소드
    submitEdit= (obj)=>{ // 완료버튼 클릭시 써있는 글씨를 가진 이벤트 객체가 파라미터로 옴 [SubmitEvent객체라고 부름]
        this.setState({msg2: obj.nativeEvent.text})
    }

    // TextInput을 글씨가 변경될때마다 그 글씨를 일반변수에 저장
    changeText2= (value)=>{
        this.data= value
    }

    // 버튼클릭시 일반 멤버변수에 저장된 글씨를 Text 컴포넌트에 state 값으로 설정
    onClick= ()=>{
        this.setState({msg3: this.data})
    }

}

// 스타일 객체
const style= StyleSheet.create({
    root:{
        flex:1,
        padding:16,

    },
    input:{
        borderWidth: 5,
        backgroundColor: 'white',
        borderColor: 'green',
        borderRadius: 2,
        paddingLeft: 16,
        paddingRight: 16,
        margin: 8,
    },
    txt:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 8,
        padding:8,
        color: 'black',
    }
})