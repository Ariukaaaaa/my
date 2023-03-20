import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image,  SafeAreaView} from 'react-native';
import {Input ,NativeBaseProvider,Button,Icon,Box}from 'native-base';

export function PassChangeScreen({navigation}){
    return(
        <NativeBaseProvider>
            <View style={styles.container}>
                <View>
                    <Text style={styles.headerText}>
                        Нууц үг солих
                    </Text>
                    {/* <Image
                        source={{uri:'https://firebasestorage.googleapis.com/v0/b/test-396de.appspot.com/o/icons%2Ficons8-account-96.png?alt=media&token=fc8edc65-b015-44c8-b1e8-d4635e250c60'}}
                        style ={styles.UserIcon}
                    /> */}
                    <Text style={styles.userInfoText}>
                        Хуучин нууц үг
                    </Text>
                    <View style={styles.userInfoInput}>
                        <Input
                            variant ="outline"
                            _light={{
                                placeholderTextColor:"#fff"
                            }}
                            _dark={{
                                placeholderTextColor:"#35628c"
                            }}
                            />
                    </View>

                    <Text style={styles.userInfoText}>
                        Шинэ нууц үг
                    </Text>
                    <View style={styles.userInfoInput}>
                        <Input
                            variant ="outline"
                            _light={{
                                placeholderTextColor:"#fff"
                            }}
                            _dark={{
                                placeholderTextColor:"#35628c"
                            }}
                            />
                    </View>

                    <Text style={styles.userInfoText}>
                        Шинэ нууц үг дахин давтах
                    </Text>
                    <View style={styles.userInfoInput}>
                        <Input
                            variant ="outline"
                            _light={{
                                placeholderTextColor:"#fff"
                            }}
                            _dark={{
                                placeholderTextColor:"#35628c"
                            }}
                            />
                    </View>
                </View>
                <View style={{flexDirection:"row", borderRadius:100, borderColor:"#628CA8",borderWidth:1,marginTop:210}}>
                    <View style={styles.saveButton}>
                        <Button style={styles.saveButtonDesign} onPress={() => navigation.navigate('Menu')} >
                            <Text style={styles.saveButtonText}>
                                Хадгалах
                            </Text>                       
                        </Button>
                    </View>
                    <View style={styles.saveButton}>
                        <Button style={styles.saveButtonDesign} onPress={() => us} >
                            <Text style={styles.saveButtonText}>
                            Устгах
                            </Text>
                        </Button>
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
        alignItems: 'center',  
        // margin:2, 
    },
    headerText:{
        fontSize: 19,
        fontWeight: 'bold',
        textAlign:'left',
        marginBottom:"7%",
        marginTop:100,
        marginLeft:-70,
        color:"#35628c"
    },
    userInfoText:{
        fontSize: 14,
        fontWeight: 'bold',
        textAlign:'left',
        marginBottom:"1.5%",
        marginTop:20,
        marginLeft:-70,
        color:"#35628c"
    },
    userInfoInput:{
        backgroundColor:"#fff",
        // borderRadius:50,
        placeholderBorderRadius:10,
        marginLeft:-70,
        marginRight:-70,
        borderColor:"#35628c",
    },
    UserIcon:{
        width: 70,
        height: 70,
        alignItems: 'center',   
        marginLeft:90,
    },
    saveButtonDesign:{
        color:"#35628c",
        backgroundColor:"transparent",
        
    },
    saveButtonText:{
        color:"#35628c",
        fontSize: 14,
        fontWeight: 'bold',
    }
})