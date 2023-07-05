import React, { Component } from "react";
import { Text, View, Image } from "react-native";

class MateriFlexBox extends Component{
    render() {
        return (
            <View>
                <View style={{flexDirection:'row', backgroundColor:'pink', alignItems:'flex-end',justifyContent:"space-between"}}>
                    <View style={{backgroundColor:'red', flex:1, height:50}} />
                    <View style={{backgroundColor:'blue', flex:1, height:50}} />
                    <View style={{backgroundColor:'green', flex:1, height:50}} />
                    <View style={{backgroundColor:'yellow', flex:1, height:50}} />
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <Text style={{color:'black'}}>Beranda</Text>
                    <Text style={{color:'black'}}>Notifikasi</Text>
                    <Text style={{color:'black'}}>Pencarian</Text>
                    <Text style={{color:'black'}}>Channel</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', marginTop:10}}>
                    <Image
                        source={{ uri: 'https://placekitten.com/640/360' }}
                        style={{ width: 100, height: 100, borderRadius:50, marginRight: 10 }}
                    />
                    <View>
                        <Text style={{fontSize:20, fontWeight:'bold', color:'black'}}>Fikri Ansari</Text>
                        <Text style={{color:'black'}}>fikriansari@umsu.ac.id</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default MateriFlexBox