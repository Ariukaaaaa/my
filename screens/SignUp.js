import React ,{useState} from 'react';
import { ButtonGroup } from 'react-native-elements';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
import {Input ,NativeBaseProvider,Button,Icon,Box}from 'native-base';
import {useNavigation,NavigationContainer} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { config } from './config';

export function SignUpScreen({navigation}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async () => {
        try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log('User signed up successfully!');
        } catch (error) {
        console.log(error.message);
        setError(error.message);
        }
    };

    const handleLogin = async () => {
        try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log('User logged in successfully!');
        } catch (error) {
        console.log(error.message);
        setError(error.message);
        }
    };
    return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <Image
                    source={{uri:'https://firebasestorage.googleapis.com/v0/b/test-396de.appspot.com/o/Login1.png?alt=media&token=7c1169bb-b10b-4e41-b2ca-c5eef7f79f2c'}}
                    style ={styles.Login1Image}
                />
                
                <Image
                    source={{uri:'https://firebasestorage.googleapis.com/v0/b/test-396de.appspot.com/o/Login3.png?alt=media&token=367c2fc2-bd04-4bd6-a4f2-b93923e21280'}}
                    style ={styles.Login3Image}
                />
                
                

                
                {/* Box */}
                
                <View style={styles.boxStyle}>
                    <Box style={{alignItems:'center'}}>
                        {/* Group Buttons Login Sign up */}
                        <View >
                            <View style={{flexDirection:"row"}}>
                                <Button style={styles.LoginButtonsDesign} onPress={() => navigation.navigate('Login')} >
                                    Login                      
                                </Button>
                                <Button style={styles.LoginButtonsDesign}>
                                    Sign up
                                </Button>
                            </View>
                            <Text>{error}</Text>
                            {/* Username email input field */}
                                <View style={styles.emailInput}>
                                    <Input
                                        variant="outline"
                                        placeholder="Username or Email"
                                        value={email}
                                        onChangeText={setEmail}
                                        autoCapitalize="none"
                                        _light={{
                                            placeholderTextColor:"bluegray.400"
                                        }}
                                        _dark={{
                                            placeholderTextColor:"bluegray.50"
                                        }}
                                        />
                                </View>

                            {/* Password Input Field */}
                                <View style={styles.emailInput}>
                                    <Input
                                        variant ="outline"
                                        secureTextEntry={true}
                                        value={password}
                                        onChangeText={setPassword}
                                        placeholder="Password"
                                        _light={{
                                            placeholderTextColor:"blueGray.400"
                                        }}
                                        _dark={{
                                            placeholderTextColor:"blueGray.50"
                                        }}
                                        />
                                </View>
                                <View style={styles.emailInput}>
                                    <Input
                                        variant ="outline"
                                        secureTextEntry={true}
                                        placeholder="Password"
                                        _light={{
                                            placeholderTextColor:"blueGray.400"
                                        }}
                                        _dark={{
                                            placeholderTextColor:"blueGray.50"
                                        }}
                                        />
                                </View>

                            {/* Button */ }
                            <View style={styles.emailInput}>
                                <Button style={styles.LoginButtonDesign} onPress={handleSignUp} >
                                    Sign up
                                </Button>
                            </View>                     
                            
                                
                        </View>
                    </Box> 

                </View>
            </View>
        </NativeBaseProvider>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e5f0fb',
        position: 'relative',
    },  
    Login1Image:{
        height:"30%",
        width:"100%",
        resizeMode:'cover',
        position:'absolute',
        zIndex:1
    },
    emailInput:{
        marginTop:30,
    },
    LoginButtonDesign:{
        backgroundColor:'#539ee3'
    },
    LoginButtonsDesign:{
        backgroundColor:'#539ee3',
        width:150
    },
    boxStyle:{
        justifyContent:'space-around',
        backgroundColor: '#fff',
        borderRadius: 30,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        position: 'absolute',
        zIndex:3,
        left: '27.5%',
        top: '38.5%',
        right:'-23%',
        bottom:'3%',
        transform: [{ translateX: -100 }, { translateY: -100 }],
    },
    Login3Image:{
        height:"30%",
        width:"100%",
        resizeMode:'contain',
        position:'absolute',
        bottom:'-1%',
        zIndex:4
    },
})