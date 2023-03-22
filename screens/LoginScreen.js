import React ,{useEffect, useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
import {Input ,NativeBaseProvider,Button,Icon,Box}from 'native-base';
import { TextInput } from 'react-native-gesture-handler';
import {auth} from '../firebaseCnfg';
import { useNavigation } from '@react-navigation/core';
const LoginScreen = () =>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigation=useNavigation()
    useEffect(()=> {
        const unsubscribe = auth.onAuthStateChanged(user=>{
            if(user){
                navigation.replace("Remote")
            }
        })
        return unsubscribe
    },[])

    const handleSignUp = () =>{
        auth 
        .createUserWithEmailAndPassword(email,password)
        .then(userCredentials =>{
            const user= userCredentials.user;
            console.log('Registered width:',user.email);
        })
        .catch(error => alert(error.message))
    }
    const handleLogin= () =>{
        auth
        .signInWidthEmailAndPassword(email.password)
        ,then(userCredentials =>{
            const user =userCredentials.user;
            console.log('Logged in width',user.email);
        })
        .catch(error=>alert(error.message))
    }
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
                
                

                <View style={styles.BoxContainer}>
                {/* Box */}
                    <Box style={styles.boxContainer}>
                        {/* Group Buttons Login Sign up */}
                            {/* Username email input field */}
                            <View style ={styles.emailInputContainer}>
                                <TextInput 
                                placeholder='Email '
                                valu={email}
                                onChanceText={text=>setEmail(text)}
                                style={styles.emailInput}
                                />
                                <TextInput 
                                placeholder='password '
                                valu={password}
                                onChanceText={text=>setPassword(password)}
                                style={styles.emailInput}
                                secureTextEntry
                                />
                            </View>

                            {/* Button */ }
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity 
                                onPress={handleLogin}
                                    style={[styles.LoginButtonsDesign,styles.LoginButtonsDesignOutline]}
                                >
                                    <Text style={styles.LoginButtonText}>Login</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                onPress={handleSignUp}
                                    style={[styles.LoginButtonsDesign,styles.LoginButtonsDesignOutline]}
                                >
                                    <Text style={styles.LoginButtonText}>Sign up</Text>
                                </TouchableOpacity>
                            </View>                     
                    </Box> 
                </View>
            </View>
        </NativeBaseProvider>
    )
}
export default LoginScreen
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
    emailInputContainer:{
        marginTop:30,
        width:"80%",
        
    },
    emailInput:{
        width:"100%",
        padding:15,
        borderColor:"#539ee3",
        borderWidth:2,
        borderRadius: 15,
        marginTop:5,
        marginLeft:35,
    },
    buttonContainer:{
        width:200,
        marginTop:20,

    },
    LoginButtonsDesignOutline:{
        borderColor:"#539ee3",
        borderWidth:2
    },
    LoginButtonsDesign:{
        marginLeft:70,
        // backgroundColor:'#539ee3',
        width:"100%",
        padding:15,
        marginTop:5,
        borderRadius: 15,

    },
    BoxContainer:{
        width:'96%',
        height:"58%",
        top:"38.9%",
        left: '27.5%',
        
    },
    boxContainer:{
        backgroundColor: '#fff',
        borderRadius: 30,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        justifyContent:'center',
        alignContent:"center",
        position: 'absolute',
        zIndex:3,
        // right:'-23%',
        width:"100%",
        height:"100%",
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