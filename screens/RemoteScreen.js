import React ,{useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
import {Input ,NativeBaseProvider,Button,Icon,Box}from 'native-base';
import {NavigationContainer}from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { HomeScreen } from './Home';
import { MenuScreen } from './Menu';
// import { Bluetooth } from 'expo-bluetooth';

const Stack=createStackNavigator();


function WifiConnectedText(){
    return(
        <View>
            <View style={styles.ConnectedTextHome}>
                <Text style={{ textDecorationLine: 'underline' }}>
                    Wi-Fi connected
                </Text>
            </View>
        </View>
    )
}
function BluetoothConnectedText(){
    return(
        <View>
            <View style={styles.ConnectedTextHome}>
                <Text style={{ textDecorationLine: 'underline'}}>
                    Bluetooth connected
                </Text>
            </View>
        </View>
    )
}
function CelluralConnectedText(){
    return(
        <View>
            <View style={styles.ConnectedTextHome}>
                <Text style={{ textDecorationLine: 'underline' }}>
                    Cellular connected
                </Text>
            </View>
        </View>
    )
}
function Move(){
    return(
        <NavigationContainer>

        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Menu" component={MenuScreen}/>
        </Stack.Navigator>
        </NavigationContainer>
    )
}
const RemoteScreen = () =>{
    // const [bluetoothEnabled, setBluetoothEnabled] = useState(false);
    // const [connectedDevices, setConnectedDevices] = useState([]);

    // const handleClick = async () => {
    //     const enabled = await Bluetooth.getAvailabilityAsync();
    //     setBluetoothEnabled(enabled);

    //     if (enabled) {
    //     const devices = await Bluetooth.getConnectedDevicesAsync();
    //     setConnectedDevices(devices);
    //     }
    // };




    const [selectedIndex, setSelectedIndex] = useState(0);
    const Textuud = [WifiConnectedText,BluetoothConnectedText,CelluralConnectedText];
    const currentText = Textuud[selectedIndex];
    
    return(
        <NativeBaseProvider>
            
            <View style={styles.container}>
                <View style={styles.wifiBack}>
                        <Image
                            source={{uri:'https://firebasestorage.googleapis.com/v0/b/test-396de.appspot.com/o/RemoteHome.JPG?alt=media&token=aada3fef-5699-4fcf-8ab2-f5eb8a7f3b97'}}
                            style ={styles.wifiBg}
                        />
                </View>
                <View>
                    <View style={styles.Buttons}>
                        <Button style={styles.ButtonsDesign} onPress={() => setSelectedIndex(0)}>
                            <Image
                                source={{uri:'https://firebasestorage.googleapis.com/v0/b/test-396de.appspot.com/o/icons%2Ficons8-wifi-64%20(2).png?alt=media&token=113553f2-16a7-42d2-a4d5-671f5657669d'}}
                                style={styles.WifiIcon}
                                // style ={styles.wifiBg}
                            />
                        </Button>
                        <Button style={styles.ButtonsDesign} onPress={handleClick}>
                        <Image
                            source={{uri:'https://firebasestorage.googleapis.com/v0/b/test-396de.appspot.com/o/icons%2Ficons8-bluetooth-48.png?alt=media&token=4f927254-97ba-451b-b45f-e304e63ec7d7'}}
                            style={styles.BTIcon}
                            // style ={styles.wifiBg}
                        />
                        </Button>
                        <Button style={styles.ButtonsDesign} onPress={() => setSelectedIndex(2)}>
                        <Image
                            source={{uri:'https://firebasestorage.googleapis.com/v0/b/test-396de.appspot.com/o/icons%2Ficons8-cellular-network-50.png?alt=media&token=0b5c2134-db07-4d4b-a727-a1ef494cb95e'}}
                            style={styles.HotIcon}

                            // style ={styles.wifiBg}
                        />
                        </Button>
                    </View>
                    {currentText()}
                    {/* <Text>Bluetooth enabled: {bluetoothEnabled ? 'yes' : 'no'}</Text>        */}
                    {/* <Text>Connected devices: {connectedDevices.length}</Text> */}
                    <View style={styles.OpenClose}>
                        <Button style={styles.OpenCloseButton}>
                            <Image
                                source={{uri:'https://firebasestorage.googleapis.com/v0/b/test-396de.appspot.com/o/icons%2Ficons8-auto-barrier-64.png?alt=media&token=94708ec7-2033-4aa2-936a-301fb70e2bb1'}}
                                style={styles.OpenCloseIcon}
                            />
                        </Button>
                    </View>
                    

                </View>
                    
                <View style={styles.HomeButtonsStyle}>
                    <Button style={styles.HomeButtonDesign} onPress={()=>navigation.push('Home')}>
                        <Image
                            source={{uri:'https://firebasestorage.googleapis.com/v0/b/test-396de.appspot.com/o/icons%2Ficons8-home-page-50.png?alt=media&token=042f9ab6-9b46-48ab-b545-200b49adac06'}}
                            style={styles.HomeButtonIcon}
                        />
                    </Button>
                    <Button style={styles.RemoteButtonDesign}>
                        <Image
                            source={{uri:'https://firebasestorage.googleapis.com/v0/b/test-396de.appspot.com/o/icons%2Ficons8-speaker-phone-50.png?alt=media&token=ff0c3d32-8bee-4a95-8b75-1249150a2f95'}}
                            style={styles.RemoteButtonIcon}
                        />
                    </Button>
                    <Button style={styles.MenuButtonDesign} onPress={()=>navigation.push('Menu')}>
                        <Image
                            source={{uri:'https://firebasestorage.googleapis.com/v0/b/test-396de.appspot.com/o/icons%2Ficons8-profile-settings-99.png?alt=media&token=1b935bfe-4482-40a2-b9e5-1549d006785f'}}
                            style={styles.MenuButtonIcon}
                        />
                    </Button>
                </View>
            </View>
        </NativeBaseProvider>

    )
}
export default RemoteScreen
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e5f0fb',
        // position: 'relative',
    },  
    wifiBack:{
        height:"30%",
        width:"100%",
        resizeMode:'cover',

        position:'relative',
        zIndex:1
    },
    wifiBg:{
        position:'relative',
        height:"100%",
        width:"100%"

    },
    WifiIcon:{
        borderRadius: 30,
        width: 70,
        height: 70,
        marginTop: 10,
    },
    HotIcon:{
        borderRadius: 30,
        width: 60,
        height: 60,
        //position: 'inherit',
        marginTop: 10,
        //resizeMode:'scretch',
        
    },
    BTIcon:{
        borderRadius: 30,
        width: 60,
        height: 60,
        //position: 'inherit',
        marginTop: 10,
        //resizeMode:'scretch',
        
    },
    OpenCloseIcon:{
        // borderRadius: 50,
        width: 183,
        height: 183,
        marginTop: 1,
        marginBottom:9,
    },
    Buttons:{
        
        marginTop:10,
        marginLeft:30,
        marginRight:30,
        justifyContent:'space-around',
        height:"25%",
        flexDirection:'row',
    },
    OpenCloseButton:{
        borderColor:"#628CA8",
        borderWidth:3,
        backgroundColor:'transparent',
        marginTop:25,
        borderRadius: 120,
        height: 230,
        width:230
    },
    OpenClose:{
        justifyContent:'space-around',
        alignItems:'center',
    },
    ButtonsDesign:{
        //borderRadius: 30,
        //width:"15%",
        //position : 'inherit',
        backgroundColor: 'transparent',
        //position:'relative',
        marginTop:10,
    },
    ConnectedTextHome:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        marginRight:5,
    },
    HomeButtonsStyle:{
        alignItems:'center',
        justifyContent:'center',
        // marginTop:5,
        marginLeft:30,
        marginRight:30,
        // marginBottom:30,
        justifyContent:'space-around',
        // width:5,
        flexDirection:'row',
        bottom:30,
    },
    HomeButtonDesign:{
        marginRight: -3,
        backgroundColor: 'transparent',
        marginBottom:5,
    },
    RemoteButtonDesign:{
        backgroundColor: 'transparent',
        marginBottom:5,
        borderRightColor:"#628CA8",
        borderTopColor:"transparent",
        borderLeftColor:"#628CA8",
        borderBottomColor:"transparent",
        borderWidth:3,
    },
    MenuButtonDesign:{
        marginLeft:-3,
        backgroundColor: 'transparent',
        marginBottom:5,
    },
    HomeButtonIcon:{
        width: 50,
        height: 50,
        marginRight: 1,
    },
    RemoteButtonIcon:{
        width: 60,
        height: 60,
        // marginBottom: 5,
    },
    MenuButtonIcon:{
        marginLeft:1,
        width: 70,
        height: 70,
        // marginBottom: 5,
    }
});
