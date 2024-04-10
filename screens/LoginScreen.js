import { View, Text, Image, TextInput, TouchableOpacity, Touchable } from 'react-native'
import React, { FC, ReactElement, useState } from 'react'
import {StatusBar} from 'expo-status-bar';
import Animated,{ FadeIn, FadeOut } from 'react-native-reanimated';
import {useNavigation} from "@react-navigation/native";


export default function LoginScreen() {
  const navigation = useNavigation()
  const handleRegister = () => {
    navigation.navigate("SignUp")


  };

   return (
    <View className="bg-white h-full w-full">
        <StatusBar style="light"/>
        <Image className="h-full w-full absolute" source={require('../assets/background.png')}/>

        <View className="flex-row justify-around w-full absolute">
          <Image className="h-[250] w-[150]" source = {require('../assets/movieclip.png')}/>
          <Image className="h-[320] w-[125]" source = {require('../assets/movieclip.png')}/>

        </View>
        <View className = "h-full w-full flex justify-around pt-40 pb-10">
          <View className = "flex items-center">
            <Text className="text-white font-bold tracking-wider text-5xl">
              Login
            </Text>
          </View>
          <View className = "flex items-center mx-4 space-y-4">
            <View className = "bg-black/5 p-5 rounded-2xl w-full">
              <TextInput placeholder='Email' placeholderTextColor={"gray"}/>
            </View>
            <View className = "bg-black/5 p-5 rounded-2xl w-full mb-3">
              <TextInput placeholder='Password' placeholderTextColor={"gray"} secureTextEntry/>
            </View>
            <View className = "w-full">
              <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
                <Text className="text-xl font-bond text-white text-enter"> Login</Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row justify-center">
                <Text> Don't have an account?</Text>
              <TouchableOpacity onPress ={handleRegister}>
                <Text className = "text-sky-600"> SignUp </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    </View>
  )
}