import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
import {Input ,NativeBaseProvider,Button,Icon,Box}from 'native-base';

// const ReturnButton = ({ onPress }) => (
//     <TouchableOpacity onPress={onPress}>
//       <Text>Return</Text>
//     </TouchableOpacity>
//   );


export function HomeScreen({navigation}){
    // const handleReturn = () => {
    //     navigation.goBack(); // go back to the previous screen
    // };
    return(
        <NativeBaseProvider>
            <View style={styles.container}>
                <View backButtonStyle>
                    <Button style={styles.backButtonDesign} onPress={()=>navigation.goBack()}>
                    <Image
                        source={{uri:'https://firebasestorage.googleapis.com/v0/b/test-396de.appspot.com/o/icons%2Ficons8-back-90.png?alt=media&token=f0236210-2d19-4a7f-bdb9-05017d7f38f9'}}
                        style ={styles.backButtonIcon}
                    />
                    </Button>
                </View>
                <View style={styles.logoHomeStyle}>
                    <Image
                        source={{uri:'https://firebasestorage.googleapis.com/v0/b/test-396de.appspot.com/o/icons%2Flogo%20main%202.png?alt=media&token=66262826-37f1-471e-8e93-65163be1b8b1'}}
                        style ={styles.logoHomeIcon}
                    />
                </View>
                <View style={styles.boxStyle}>
                    <Box>
                        <Text style={styles.headerText}>
                            IoT хаалтны систем
                        </Text>
                        <Text style={styles.bodyText}>
                            Энэхүү ухаалаг хаалтны систем нь Улаанбаатар хотод тулгараад буй зогсоолын асуудлыг шийдэхийн тулд маш их хувь нэмэр оруулах төсөл юм. Уг төслийг хэрэгжүүлсэнээр албан байгууллага, хувь хүн, орон сууцны автомашины хаалтыг ашиглахад хялбар, бага зардлаар хэрэглэгчийг ухаалаг систем ашиглах онцлогийг бий болгож байгаа нь онцлог юм.
                        </Text>
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
        // justifyContent: 'center',
        // alignItems: 'center',   
    },
    headerText:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign:'center',
        marginBottom:"7%",
    },
    bodyText:{
        fontSize: 16.5,
        fontWeight: 'bold',
        textAlign: 'left',
        marginLeft:"5%",
        marginRight:"5%",
    },
    backButtonStyle:{
        justifyContent:'space-around',
    },
    logoHomeStyle:{
        height:"30%",
        width:"100%",
        marginTop:-30,
        resizeMode:'cover',
        position:'relative',
    },
    logoHomeIcon:{
        position:'relative',
        height:"100%",
        width:"100%"
    },
    backButtonDesign:{
        backgroundColor:"transparent",
        marginTop:30,
        marginLeft:10,
    },
    backButtonIcon:{
        borderRadius: 30,
        width: 60,
        height: 60,
        left:'-270%',
        // marginTop: 10,
    },
    boxStyle:{
        justifyContent:'space-around',
        backgroundColor:"#fff",
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        position: 'absolute',
        left: '33.5%',
        top: '48.5%',
        right:'-16.5%',
        bottom:'3%',
        transform: [{ translateX: -100 }, { translateY: -100 }],
    }
})