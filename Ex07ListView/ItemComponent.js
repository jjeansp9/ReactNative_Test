import React from 'react'
import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native'

export default ItemComponent= (props)=>{
    return(
        <TouchableOpacity style={style.item} onPress={()=>{
            alert(item.name)
        }}>
            <Image source={props.item.img} style={style.itemImg}></Image>
            <View>
                <Text style={style.itemName}>{props.item.name}</Text>
                <Text style={style.itemMessage}>{props.item.message}</Text>
            </View>
        </TouchableOpacity>
    )
}

const style= StyleSheet.create({
    item:{
        flexDirection:'row',
        borderWidth: 1,
        borderRadius: 4,
        padding: 8,
        marginBottom: 10,
    },
    itemImg:{
        width:160,
        height:100,
        resizeMode:'cover',
        marginRight:8,
    },
    itemName:{
        fontSize:24,
        color:'black',
        fontWeight:'bold',

    },
    itemMessage:{
        fontSize:16,
        fontStyle:'italic',
    }
})