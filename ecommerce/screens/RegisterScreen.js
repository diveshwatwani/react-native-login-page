import { StyleSheet,Text,View, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Pressable } from "react-native";
import React from "react";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import logo from '../assets/amazon_logo.png'
import AntDesign from 'react-native-vector-icons/AntDesign';
// Import vector icons
// import Icon from 'react-native-vector-icons/FontAwesome';
import {useState} from 'react'
import { useNavigation } from "@react-navigation/native";
import axios from "axios"

const RegisterScreen=()=>{

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [passowrd, setPassword]= useState("")
    const navigation = useNavigation();
    
    const handleRegistration=()=>{
        const user={
            name:name,
            email:email,
            passowrd:passowrd
        };
        console.log(user)
        axios.post('https://localhost:3000/register', user)
        .then((response)=>{
            console.log(response)
            console.log("Registred Succesfully")
            // Alert.alert(
            //     "Registered Succesfully!",
            //     "You have been registered succesfully"
            // )
            // console.log(user)
            // console.log(response.data)
        }).catch((error) => {
            // Alert.alert(
            //   error.message
            // )
            console.error(error);
            //console.log(error.message)
          })
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
                    <Text style={{fontWeight:'bold', color:'black', marginBottom:45}}>Register to your Account</Text>
                </View>
                <View style={ styles.textinputContainer}>
                    <MaterialIcons style={styles.icon} name="person" size={28} color='black'/>
                    <TextInput
                        style={{color:'black', marginVertical:10, width:300}}
                        value={name}
                        onChangeText={setName}
                        placeholder="Enter your name"
                    />
                </View>
                <View style={ styles.textinputContainer}>
                    <MaterialIcons style={styles.icon} name="email" size={24} color='black'/>
                    <TextInput
                        style={{color:'black', marginVertical:10, width:300}}
                        onChangeText={setEmail}
                        value={email}
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
                            value={passowrd}
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
                    {/* <Pressable onPress={handleRegistration}> */}
                    <Pressable onPress={handleRegistration}>
                        <Text style={styles.buttonStyle} >Register</Text>
                    </Pressable>
                    <Pressable onPress={()=>navigation.navigate("Login")} >
                        <Text style={{marginTop:20,textAlign:'center'}} >Already have an account? Sign In</Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
export default RegisterScreen;

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

});