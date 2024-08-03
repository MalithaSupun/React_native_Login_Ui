import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';  // Import TouchableOpacity from 'react-native'
import React from 'react';
import { StatusBar } from 'expo-status-bar';

export default function LoginScreen() {
  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="light" />
      <Image
        className="h-full w-full absolute"
        source={require('../assets/background.png')}
      />

      {/* lights */}
      <View className="flex-row justify-around w-full absolute">
        <Image
          className="h-[225px] w-[90px]"
          source={require('../assets/light.png')}
        />
        <Image
          className="h-[225px] w-[65px] -mt-16"
          source={require('../assets/light.png')}
        />
      </View>

      {/* title and form */}
      <View className="h-full w-full flex justify-around pt-40 pb-10">
        {/* Title */}
        <View className="flex items-center">
          <Text className="text-white font-bold tracking-wider text-5xl">Login</Text>
        </View>

        {/* form */}
        <View className="flex items-center mx-4 space-y-4">
          <View className="bg-black/5 p-5 rounded-2xl w-full">
            <TextInput
              placeholder="Email"
              placeholderTextColor="gray"
            />
          </View>
          <View className="bg-black/5 p-5 rounded-2xl w-full mb-3">
            <TextInput
              placeholder="Password"
              placeholderTextColor="gray"
              secureTextEntry={true}
            />
          </View>
          <View className="w-full">
            <TouchableOpacity
              className="bg-sky-400 p-3 rounded-2xl mb-3">
              <Text className="text-white text-center text-lg font-bold">Login</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-center">
          <Text>Don't have an account?</Text>
          <TouchableOpacity>
            <Text className="text-sky-600">SignUp</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
