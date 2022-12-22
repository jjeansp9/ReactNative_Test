import React, {Component} from 'react'
import {View,Text,Button,StyleSheet,FlatList} from 'react-native'

export default class Main extends Component{

    // RN에서 대량의데이터를 보여주는 List형태의 뷰를 위한 컴포넌트 : FlatList

    // 1. 먼저 단순한 연습을 위해 문자열만으로 있는 배열 데이터들(대량의 데이터들)
    state={
        datas:["aaa","bbb","ccc","ddd"],
    }

    render(){
        return (
            <View style={style.root}>
                <Text style={style.title}>Flat List Test</Text>

                {/* 1. this.state.datas 라는 대량의 데이터를 Text컴포넌트들로 보여주기 */}
                {/* FlatList 사용 [ 필수속성이 2개 ] */}
                {/* 1) data - FlatList가 보여줄 대량의 데이터를 지정 */}
                {/* 2) renderItem - 아이템 하나의 모양(컴포넌트)를 만들어서 리턴해주는 콜백함수 지정 */}
                <FlatList 
                    data={this.state.datas}
                    renderItem={(obj)=>{ // 이 콜백함수의 파라미터로 객체 하나가 전달됨
                        // 이 파라미터 객체안에 3개의 멤버변수가 존재함 [item, index, separators]
                        return(
                            <View>
                                <Text>{obj.item}    :    {obj.index}</Text>
                            </View>
                        )
                    }}></FlatList>


                    {/* 2. FlatList의 renderItem 콜백함수 파라미터를 '구조분해할당'기법으로 사용해보기 */}
                    <FlatList 
                    data={this.state.datas}
                    renderItem={({item,index})=>{ // 이 콜백함수의 파라미터로 객체 하나가 전달됨
                        // 이 파라미터 객체안에 3개의 멤버변수가 존재함 [item, index, separators]
                        return(
                            <View>
                                <Text>{item}    :    {index}</Text>
                            </View>
                        )
                    }}></FlatList>


                    {/* 3. 조금더 Item 하나의 모양이 복잡한 것 */}
            </View>
        )
    }
}

const style= StyleSheet.create({
    root:{flex:1, padding:16},
    title:{color:'black',fontWeight:'bold', fontSize:24, alignSelf:'center',},
})