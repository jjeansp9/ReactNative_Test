import React, { useState } from 'react'
import {View,Text,TextInput,StyleSheet,Button,Image, Alert} from 'react-native'
import InputComponent from '../components_login/InputComponent'
import TabComponent from '../components_login/TabComponent'

export default ResetPassword = (props) =>{
    
    // 화면에 영향을 주는 아주 특별한 멤버변수 state 로 만들기
    // 탭 버튼에 보여질 라벨 글씨들을 가진 멤버변수(배열)
    let [tabs,setTabs]= useState(["이메일", "전화번호"])
    // 2) 현재 선택된 탭의 번호를 저장할 변수
    let [tabIndex, setTabIndex]= useState(0)
    // 3) 탭에 따라 보여질 메세지 글씨들을 가진 일반 배열변수
    const messages = [
        "이메일을 입력하면 임시 비밀번호를 보내드립니다.",
        "전화번호를 입력하면 임시 비밀번호를 보내드립니다.",
    ]

    
    return (
        <View style={style.root}>
            {/* 크게 2개 영역으로 구성 */}
            {/* 1. 콘텐츠 영역 */}
            <View style={style.content}>
                {/* 1-1. 자물쇠 이미지 표시 영역 */}
                <View style={style.lockImageContainer}>
                    <Image source={require('../images/lock.png')}></Image>
                </View>

                {/* 2. 타이틀 글씨 */}
                <Text style={style.title}>로그인에 문제가 있나요?</Text>

                {/* 3. 탭에 따라 메세지가 다르게 노출됨 */}
                <Text style={style.message}>{messages[tabIndex]}</Text>

                {/* 4. 탭 만들기 - 이미 만들어놓은 TabComponent를 재사용 */}
                <View style={style.tabContainer}>
                    {/* tabs 배열의 개수만큼 자동으로 호출되는 메소드 */}
                    {
                        tabs.map((value, index)=>{
                            return <TabComponent label={value} selected={index==tabIndex} onPress={()=>setTabIndex(index)}></TabComponent>
                        })
                    }
                </View>

                {/* 5. 입력상자 만들기 - 미리 만들어놓은 입력상자 컴포넌트를 재사용 */}
                <InputComponent placeholder={tabs[tabIndex]}></InputComponent>

                {/* 6. NEXT 버튼 */}
                <View style={{width:'100%', margin:16,}}>
                    <Button title='다음' onPress={()=> Alert.alert('임시 비밀번호가 발송되었습니다.', '로그인 후 정보수정을 통해 안전한 비밀번호로 변경하세요.')}></Button>
                </View>

            </View>
            {/* 2. Footer 영역 */}
            <View style={style.footer}>
                <Text style={style.goBack} onPress={()=>{props.navigation.goBack()}}>로그인화면으로 돌아가기</Text>
            </View>
        </View>
    )
}

const style= StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:'#FEFFFF',
    },
    content:{
        flex:1,
        width:'100%',
        alignItems:'center',
        padding:32,
    },
    footer:{
        borderTopWidth:1,
        borderTopColor:'#D3D3D3',
        padding:8,
    },
    goBack:{
        color:'#3796EF',
        textAlign:'center'
    },
    lockImageContainer:{
        padding: 24,
        borderWidth:2,
        borderColor:'#292929',
        borderRadius: 100, // 너비의 절반사이즈 이상이면 원이 됨
        margin:16,
    },
    title:{
        fontWeight:'bold',
        marginBottom:16,

    },
    tabContainer:{
        flexDirection:'row',
        marginBottom:16,
    },
    message:{
        textAlign:'center',
        marginBottom:16,
        color:'#292929',
    },
})