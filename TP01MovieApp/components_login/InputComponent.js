import React from 'react'
import {View,TextInput,StyleSheet} from 'react-native'

// 재사용 될 컴포넌트
export default InputComponent = (props)=>{
    return (
        <View style={style.container}>
            <TextInput 
                secureTextEntry={props.secureTextEntry}
                style={style.input}
                placeholder={props.placeholder} // 컴포넌트 사용하는 곳에서 지정된 property 속성 사용
                onChangeText={props.onChangeText} // 글씨가 변경될 때마다 실핼될 콜백함수를 property로 전달받기
                > 
            </TextInput>
        </View>
    )
}

const style= StyleSheet.create({
    container:{
        width:'100%',
        height:40,
        paddingLeft:16,
        paddingRight:16,
        borderWidth:2,
        borderColor:'#D3D3D3',
        borderRadius:4,
        backgroundColor:'#FAFAFA',
        marginTop:8,
        marginBottom:8,
    },
    input:{
        flex:1,
        color:'#292929',
    },
})