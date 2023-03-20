import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image,  SafeAreaView} from 'react-native';
import {Input ,NativeBaseProvider,Button,Icon,Box}from 'native-base';

export function MenuScreen({navigation}){
    return(
        <NativeBaseProvider>
            <View style={styles.container}>
                <View headerButtonsStyle>
                    <Button style={styles.backButtonDesign} onPress={()=>navigation.goBack()}>
                    <Image
                        source={{uri:'https://firebasestorage.googleapis.com/v0/b/test-396de.appspot.com/o/icons%2Ficons8-back-90.png?alt=media&token=f0236210-2d19-4a7f-bdb9-05017d7f38f9'}}
                        style ={styles.backButtonIcon}
                    />
                    </Button>
                    <Button style={styles.NotifButtonDesign}>
                        <Image
                            source={{uri:'https://firebasestorage.googleapis.com/v0/b/test-396de.appspot.com/o/icons%2Ficons8-notification-96.png?alt=media&token=2216645c-662f-4322-a829-17cb4c96860e'}}
                            style ={styles.NotifButtonIcon}
                        />
                    </Button>
                </View>
                <Text style={styles.headerText}>
                    МЕНЮ
                </Text>
                <View>
                    <View style={styles.border}>
                        <Image
                            source={{uri:'https://firebasestorage.googleapis.com/v0/b/test-396de.appspot.com/o/icons%2Ficons8-account-96.png?alt=media&token=fc8edc65-b015-44c8-b1e8-d4635e250c60'}}
                            style ={styles.UserIcon}
                            />
                        <Text style={styles.UserText}>
                            Хэрэглэгч
                        </Text>
                    </View>
                    <View >
                        <View style={styles.buttonBorders}>
                            <Text style={styles.userTextButton}>
                                Хувийн мэдээлэл шинэчлэх
                            </Text>
                            <Button style={styles.userButtonDesign} onPress={() => navigation.navigate('UserInfo')}>
                                <Image
                                    source={{uri:'https://firebasestorage.googleapis.com/v0/b/test-396de.appspot.com/o/icons%2FEnterButtonIcon.png?alt=media&token=50e83795-5edb-4611-935b-11a20589d4a6'}}
                                    style ={styles.userButtonIcon}
                                />
                            </Button>
                        </View>
                        <View style={styles.buttonBorders}>
                            <Text style={styles.userTextButton}>
                                Нууц үг солих
                            </Text>
                            <Button style={styles.passButtonDesign} onPress={() => navigation.navigate('PassChange')}>
                                <Image
                                    source={{uri:'https://firebasestorage.googleapis.com/v0/b/test-396de.appspot.com/o/icons%2FEnterButtonIcon.png?alt=media&token=50e83795-5edb-4611-935b-11a20589d4a6'}}
                                    style ={styles.userButtonIcon}
                                />
                            </Button>
                        </View>
                        <View style={styles.buttonBorders}>
                            <Text style={styles.userTextButton}>
                                Тусламж
                            </Text>
                            <Button style={styles.helpButtonDesign} onPress={() => navigation.navigate('Help')}>
                                <Image
                                    source={{uri:'https://firebasestorage.googleapis.com/v0/b/test-396de.appspot.com/o/icons%2FEnterButtonIcon.png?alt=media&token=50e83795-5edb-4611-935b-11a20589d4a6'}}
                                    style ={styles.userButtonIcon}
                                />
                            </Button>
                        </View>
                        <View style={styles.buttonBorders}>
                            <Text style={styles.userTextButton}>
                                Мэдэгдэл
                            </Text>
                            <Button style={styles.notificationButtonDesign}>
                                <Image
                                    source={{uri:'https://firebasestorage.googleapis.com/v0/b/test-396de.appspot.com/o/icons%2FEnterButtonIcon.png?alt=media&token=50e83795-5edb-4611-935b-11a20589d4a6'}}
                                    style ={styles.userButtonIcon}
                                />
                            </Button>
                        </View>
                    </View>
                </View>
                <View style={styles.exitButtonStyle}>
                    <Button style={styles.exitButtonDesign} onPress={() => navigation.navigate('Login')}>
                        <Image
                            source={{uri:'https://firebasestorage.googleapis.com/v0/b/test-396de.appspot.com/o/icons%2Ficons8-log-out-96.png?alt=media&token=ac8392e2-cb37-42ac-bef3-8cfd31368147'}}
                            style ={styles.exitButtonIcon}
                        />
                        <Text style={styles.exitButtonText}>
                            Log Out
                        </Text>
                    </Button>
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
    headerButtonsStyle:{
        justifyContent:'space-around',
        flexDirection:'row',

    },
    backButtonDesign:{
        backgroundColor:"transparent",
        marginTop:50,
        marginLeft:20,
        width: 40,
        height: 40,
    },
    backButtonIcon:{
        width: 40,
        height: 40,
        // left:'-270%',
        // marginTop: 10,
    },
    NotifButtonDesign:{
        backgroundColor:"transparent",
        marginTop:-40,
        marginLeft:330,
        width: 40,
        height: 40,
    },
    exitButtonStyle:{
        alignItems:"center",
        
    },
    exitButtonDesign:{
        borderRadius:100,
        width: 85,
        height: 85,
        bottom:"-70%",
        flexDirection:'row',
        backgroundColor:"transparent",
        borderColor:"#628CA8",
        borderWidth:1,
    },
    exitButtonIcon:{
        marginTop:-5,
        width: 40,
        height: 40,
        flexDirection:'row',
    },
    exitButtonText:{
        flexDirection:'row',
        color:"#35628c",
        fontSize: 14,
        fontWeight: 'bold',
    },
    NotifButtonIcon:{
        width: 40,
        height: 40,
        // right:'-270%',
    },
    headerText:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign:'left',
        marginBottom:"7%",
        marginTop:60,
        marginLeft:50,
        color:"#35628c"
    },
    border:{
        borderRightColor:"transparent",
        borderTopColor:"transparent",
        borderLeftColor:"transparent",
        borderBottomColor:"#35628c",
        borderWidth:3,
        flexDirection:'row',
        marginLeft:50,
        marginRight:50,

    },
    UserText:{
        fontSize: 16,
        fontWeight: 'bold',
        textAlign:'left',
        marginLeft:"3%",
        margin:"0%",
        padding:"2%",
        color:"#35628c"
    },
    UserIcon:{
        width: 30,
        height: 30,
    },
    // smallButtonsStyle:{
    //     marginLeft:50,
    // },
    // userButton:{
    //     backgroundColor:"transparent",
    //     marginTop:10,
    //     borderRightColor:"transparent",
    //     borderTopColor:"transparent",
    //     borderLeftColor:"transparent",
    //     borderBottomColor:"#35628c",
    //     borderWidth:1,
    // },
    buttonBorders:{
        borderRightColor:"transparent",
        borderTopColor:"transparent",
        borderLeftColor:"transparent",
        borderBottomColor:"#35628c",
        borderWidth:1,
        flexDirection:'row',
        marginLeft:50,
        marginRight:50,
    },
    userButtonDesign:{
        backgroundColor:"transparent",
        marginTop:5,
        marginLeft:75,
        width: 40,
        height: 40,
    },
    passButtonDesign:{
        backgroundColor:"transparent",
        marginTop:5,
        marginLeft:163,
        width: 40,
        height: 40,
    },
    helpButtonDesign:{
        backgroundColor:"transparent",
        marginTop:5,
        marginLeft:194,
        width: 40,
        height: 40,
    },
    notificationButtonDesign:{
        backgroundColor:"transparent",
        marginTop:5,
        marginLeft:189,
        width: 40,
        height: 40,
    },
    userButtonIcon:{
        marginTop:5,
        width: 20,
        height: 20,
    },
    userTextButton:{
        // backgroundColor:"transparent",
        marginTop:20,
        fontSize: 12,
        fontWeight: 'bold',
        color:"#35628c",
        textAlign:'left',
        padding:"2%",

        // textDecorationLine: 'underline',

    }
})