import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Alert, Image } from "react-native";

// RN은 컴포넌트를 상속한 클래스만 화면에 보여짐
class MainComponent extends Component{

    // Text컴포넌트에 보여질 글씨를 가진 일반 멤버변수
    text="Hello"
    change= 0

    // 화면에 영향을 미치는 값들을 가진 아주 특별한 멤버변수
    // 변수가 여러개 필요할 수도 있기에.. 변수 여러개를 가진 객체로 만들어야 함
    state= {
        msg: "Hellllo",
        img: require('./image/img_01.jpg')
    }

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
                <Button title="글씨변경" color='red' onPress={this.changeTextByArrowFunction}></Button>
                {/* Text의 글씨가 고정되지 않고 변경되려면 별도의 변수의 글씨가 있어야만 함 */}
                {/* 일반 멤버변수를 사용하면 값 변경시  화면갱신이 안됨 */}
                {/* <Text>{this.text}</Text> */}
                {/* 화면갱신에 영향을 주는 특별한 멤버변수 */}
                <Text style={style.msg}>{this.state.msg}</Text>

                {/* 한김에  버튼 클릭시에 이미지 변경해보기 */}
                <Button title="change image" color='orange' onPress={this.changeImg}></Button>
                {/* 이미지가 변경되려면 state라는 특별한 변수에 이미지 값이 있어야 함 */}
                <Image source={this.state.img} style={style.img}></Image>
                <Text>{this.change}</Text>
            </View>
        )
    }// render()

    changeImg= () =>{
        if(this.change % 2 == 1) {
            this.setState({img: require('./image/img_01.jpg')})
            this.change ++
        }else {
            this.setState({img: require('./image/test2.jpg')}) 
            this.change ++
        }
    }

    // 화살표함수
    changeTextByArrowFunction= () =>{
        // 화면에 영향을 미치는 특별한 멤버변수 state를 변경
        // 단, setState()라는 메소드를 이용해야만 함
        this.setState({msg:'Nice'})
    }

    // ******************* 종합하면 *********************
    // 화면에 보이는 값을 가진 멤버는 무조건 state로 만들고
    // 멤버메소드는 화살표함수로 만드는 것이 에러가 별로 없음
    // **************************************************

    // 버튼클릭 이벤트처리용 콜백메소드. class 안에서는 var, function과 같은 키워드 사용안함
    clickBtn(){
        Alert.alert('Clicked Button')
    }

    changeTextByState(){
        // state의 변수값을 변경
        // 주의! : 화면갱신이 되려면 반드시  '=' 대입연산자 말고
        // setState()라는 멤버메소드를 이용해야만 자동갱신됨
        this.setState({msg:"nice"}) // <-- 이 코드에서 error
        // 이유! : this. 키워드가 클래스를 지칭하지 않고 본인을 객체로 인식하여 this가 함수가 되버림
        // 마치 안드로이드에서 Listener 안에서 this를 사용하면 리스너객체를 의미하는 상황과 유사함
        // this를 함수로 인식하지 않도록 하려면 선언적함수나, 익명함수가 아니라
        // 화살표함수로 만들어야 this가 클래스로 인식됨
        // 그래서 이벤트용 콜백함수들은 특별한 경우가 아니면 무조건 화살표함수로 만들것을 권함    
    }
    

    changeText(){
        // Text 컴포넌트를 참조하는 것이 아니라
        // Text 컴포넌트가 보여주는 글씨를 가진 변수{this.text}의 값을 바꿈
        this.text= "Nice"
        alert(this.text)
        // 값은 변경되었지만 화면을 다시 갱신하지 않아 화면에 안보여짐
        // 여기 RN만의 독특한 시스템이 존재함
        // RN의 컴포넌트들은 state라는 아주 특별한 멤버변수를 기본으로 내장하고 있음
        // 기본적으로 RN의 컴포넌트가 보여주는 값들은 무조건 state라는 변수에 저장해야
        // 화면에 보여지고 값 변경시 갱신도 됨
        // this.text는 일반 멤버변수여서 값이 변경되도 화면갱신이 자동으로 이루어지지 않음
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
    msg:{
        color:'green',
        padding: 16,
        fontWeight: 'bold',
        marginTop:16,
        marginBottom: 24,
    },
    img:{
        marginTop:8,
        flex:1,
        width:null,
        resizeMode:"cover"
    }
})



// MainComponent 클래스를 다른 .js문서에서 사용할 수 있도록
export default MainComponent