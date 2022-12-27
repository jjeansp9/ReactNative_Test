import React, {Component} from 'react'
import {View,Text, Button} from 'react-native'

export default class Main extends Component{
    // 컴포넌트클래스가 객체로 생성되어 보여지고 종료될 때까지
    // 특정 순간마다 자동으로 발동하는 라이프사이클 콜백메소드

    // 1. constructor : 생성자
    constructor(){
        super() // 반드시 부모생성자 호출문이 명시적으로 있어야 함

        // 화면에 보여지기 전이기에 표시할 방법이 없어서
        // Log 기록을 남기기 [node 창에 보여짐]
        console.log('constructor...')
    }

    // 2. 화면에 보여지기 전에 이 클래스가 화면에 연결되는 순간 발동하는 메소드
    // componentWillUnmount(){ // deprecated.. 권장 안함

    // }

    // 3. 화면을 그려내는 작업을 하는 메소드가 자동 발동
    render(){
        console.log('render...')
        return(
            <View>
                <Text>라이프사이클 테스트 render</Text>
                <Button title='button' onPress={()=>this.setState({msg:"nice to meet you"})}></Button>
            </View>
        )
        
    }

    // 4. 화면에 완전히 보여지면 발동하는 메소드 [마치 onResume]
    // 이 메소드안에서 데이터를 불러오는 코드들을 작업함
    componentDidMount(){
        console.log('component did mounted...')
    }

    // 5. 화면에 그려진 후 갱신이 필요할 때 (즉, render를 또 실행할 때)
    // state값이 변경될 떄 자동 실행되는 메소드
    componentDidUpdate(){
        console.log('component did update...')
    }

    // 6. 이 컴포넌트가 종료될 때 발동
    componentWillUnmount(){
        console.log('component will unmount...')
    }

}

