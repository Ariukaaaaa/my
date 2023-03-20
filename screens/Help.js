import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image,  SafeAreaView} from 'react-native';
import {Input ,NativeBaseProvider,Button,Icon,Box}from 'native-base';
export function HelpScreen({navigation}){
    return(
        <NativeBaseProvider>
            <View style={styles.container}>
                <View>
                    <View style={styles.headerBorder}>
                        <Text style={styles.helpHeaderText}>
                            Тусламж
                        </Text>
                    </View>
                </View>
            </View>
        </NativeBaseProvider>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e5f0fb',
        // justifyContent: 'center',
        // alignItems: 'center',   
    },
    headerBorder:{
        borderRightColor:"transparent",
        borderTopColor:"transparent",
        borderLeftColor:"transparent",
        borderBottomColor:"#35628c",
        borderWidth:3,
        flexDirection:'row',
        marginTop:70,
        marginLeft:50,
        marginRight:50,

    },
    helpHeaderText:{
        fontSize: 16,
        fontWeight: 'bold',
        textAlign:'left',
        marginLeft:"3%",
        margin:"0%",
        padding:"2%",
        color:"#35628c"
    },
})