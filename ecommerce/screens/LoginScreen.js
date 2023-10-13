import { StyleSheet,Text,View, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Pressable } from "react-native";
import React from "react";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import logo from '../assets/amazon_logo.png'
import AntDesign from 'react-native-vector-icons/AntDesign';
// Import vector icons
// import Icon from 'react-native-vector-icons/FontAwesome';
import {useState} from 'react'
import { useNavigation } from "@react-navigation/native";

const LoginScreen=()=>{

    const [email, setEmail] = useState('')
    const [passowrd, setPassword]= useState('')
    const navigation = useNavigation();
    
    const handleLogin=()=>{
        const user={
            email:email,
            passowrd:passowrd
        }
        console.log(user)
    }


    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Image
                    style={styles.logo}
                    source={logo}
                />
            </View>
            <KeyboardAvoidingView>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontWeight:'bold', color:'black', marginBottom:45}}>Login In to your Account</Text>
                </View>
                <View style={ styles.textinputContainer}>
                    <MaterialIcons style={styles.icon} name="email" size={24} color='black'/>
                    <TextInput
                        style={{color:'black', marginVertical:10, width:300}}
                        onChangeText={setEmail}
                        placeholder="Enter your Email"
                    />
                </View>
                <View>
                    <View style={styles.textinputContainer}>
                        <AntDesign
                                    style={styles.icon}
                                    name="lock1"
                                    size={24}
                                    color="black"
                                    
                                    
                        />
                        <TextInput
                            // style={styles.textinputContainer}
                            style={{color:'black', marginVertical:10, width:300}}
                            placeholder="enter your pasword"
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </View>

                </View>
                <View style={{flexDirection:"row",justifyContent: 'space-between'}}>
                    <Pressable>
                        <Text style={{marginTop:15, color:'black'}}>Keep me logged In</Text>
                    </Pressable>
                    <Pressable>
                        <Text style={{marginTop:15, color:'#1a65e8',fontWeight:"bold"}}>Forgot Password?</Text>
                    </Pressable>
                </View>
                <View>
                    <Pressable onPress={handleLogin}>
                        <Text style={styles.buttonStyle} >Login</Text>
                    </Pressable>
                    <Pressable onPress={()=>navigation.navigate("Register")} >
                        <Text style={{marginTop:20,textAlign:'center'}} >Don't have an account? Sign Up</Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
export default LoginScreen;

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        alignItems:'center',
    },
    logo:{
        width:250,
        height:100,
        marginTop:25,
    },
    textinputContainer:{
        flexDirection:'row', 
        alignContent:'center',
        justifyContent:'center', 
        backgroundColor:'#c8cbcf', 
        marginTop:40, 
        borderRadius:20,
    },
    icon:{
        marginTop:22, 
        marginLeft:10, 
        marginRight:10
    },
    buttonStyle:{
        width:140,
        backgroundColor:"#FEBE10",
        borderRadius:6,
        marginLeft:'auto',
        marginRight:'auto',
        padding:10,
        marginTop:45,
        textAlign:'center',
        fontWeight:'bold',
        fontSize:19,
        color:'white'
    },

})