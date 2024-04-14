import { View, Text, Image, TextInput, TouchableOpacity, Touchable } from 'react-native'
import React, { FC, ReactElement, useState } from 'react'
import {StatusBar} from 'expo-status-bar';
import Animated,{ FadeIn, FadeOut } from 'react-native-reanimated';
import {useNavigation} from "@react-navigation/native";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';



export default function SignUpScreen() {
  const navigation = useNavigation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleRegister = () => {
    navigation.navigate("Login")


  };
  const handleSubmit = async ()=>{
    if(email && password){
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      catch(err){
        console.log('got error: ', err.message);
      }
    }
  }

   return (
    <View className="bg-white h-full w-full">
        <StatusBar style="light"/>
        <Image className="h-full w-full absolute" source={require('../assets/background.png')}/>

        <View className="flex-row justify-around w-full absolute">
          <Image className="h-[250] w-[150]" source = {require('../assets/movieclip.png')}/>
          <Image className="h-[320] w-[125]" source = {require('../assets/movieclip.png')}/>

        </View>
        <View className = "h-full w-full flex justify-around pt-48">
          <View className = "flex items-center">
            <Text className="text-white font-bold tracking-wider text-5xl">
              Sign Up
            </Text>
          </View>
          <View className = "flex items-center mx-4 space-y-4">
            <View className="bg-black/5 p-5 rounded-2xl w-full mt-10"> 
              <TextInput placeholder='Username' placeholderTextColor={"gray"}/>
            </View>
            <View className = "bg-black/5 p-5 rounded-2xl w-full">
              <TextInput placeholder='Email' value = {email} onChangeText={value=> setEmail(value)} placeholderTextColor={"gray"}/>
            </View>
            <View className = "bg-black/5 p-5 rounded-2xl w-full mb-3">
              <TextInput placeholder='Password' value = {password} onChangeText={value=> setPassword(value)} placeholderTextColor={"gray"} secureTextEntry/>
            </View>
            <View className = "w-full">
              <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mb-3" onPress = {handleSubmit}>
                <Text className="text-xl font-bond text-white text-enter"> Signup</Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row justify-center">
                <Text> Have an account?</Text>
              <TouchableOpacity onPress ={handleRegister}>
                <Text className = "text-sky-600"> Login </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    </View>
  )
}