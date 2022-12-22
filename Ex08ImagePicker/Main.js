// ## RN 에는 갤러리앱이나 카메라앱을 실행하는 기능이 없음 ##
// 대신 외부 라이브러리를 이용하여 기능들을 구현함. 이런 방식을 meta 는 권장함

// react-native-image-picker Library 추가하기
// install : npm install react-native-image-picker
import React, {Component} from 'react'
import {View,Text,Image,Button,StyleSheet} from 'react-native'

// image-picker 기능을 사용하기 위해 import
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'

export default class Main extends Component{
    
    state={
        imgUri:{uri:"https://cdn.pixabay.com/photo/2022/01/11/21/59/christmas-6931584__340.jpg"}
    }

    render(){
        return(
            <View style={{flex:1, padding:16}}>
                
                <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
                    <Button title='show camera' onPress={this.showCamera}></Button>
                    <Button title='show photo' color='green' onPress={this.showPhoto}></Button>
                </View>
                
                {/* 선택한 이미지의 경로정보 */}
                <Text>{this.state.imgUri.uri}</Text>
                <Image source={this.state.imgUri} style={{marginTop:8, flex:1,}}></Image>
            </View>
        )
    }

    // 카메라앱을 실행하는 작업코드
    showCamera= ()=>{
        // image picker library를 이용하여 카메라앱 실행

        // 옵션객체
        const options={
            mediaType:'photo',   // 카메라앱의 촬영모드 [사진,동영상]
            cameraType:'back',   // 전면/후면 카메라 선택
            saveToPhotos:true,   // 캡쳐한 사진을 디바이스에 저장할지 여부
            quality: 1.0,        // 사진의 화질 0.0 ~ 1.0
            videoQuality:'high', // 동영상 화징
        }

        launchCamera(options, (response)=>{
            
            if(response.didCancel) alert('촬영을 취소했습니다.')
            else if(response.errorMessage) alert('촬영중 오류발생')
            else{
                // 이곳에 왔다면 촬영 성공
                // 응답객체의 정보 assets : 다중 선택되었을 경우를 위해 배열로 옴
                //alert(response.assets[0].uri + "")

                // 사진경로를 state 변수값에 설정
                const source={uri:response.assets[0].uri}
                this.setState({imgUri:source})
            }

        })
    }

    // 사진앱을 실행하는 작업코드
    showPhoto=async ()=>{
        // image picker library를 이용하여 사진앱 실행            
        
        // 옵션들
        const options={
            mediaType: 'photo',
            SelectionLimit:5,   // 최대성택 가능 갯수
        }

        const response= await launchImageLibrary(options)
        if(response.didCancel) alert('선택 취소')
        else if(response.errorMessage) alert('오류 발생'+ response.errorMessage)
        else{
            const source={uri:response.assets[0].uri}
            this.setState({imgUri:source})
        }
    }
}