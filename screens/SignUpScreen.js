import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';  // Import TouchableOpacity from 'react-native'
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeInUp, FadeInDown } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {
    const navigation = useNavigation();
    
    return (
        <View className="bg-white h-full w-full">
            <StatusBar style="light" />
            <Image
                className="h-full w-full absolute"
                source={require('../assets/background.png')}
            />

            {/* lights */}
            <View className="flex-row justify-around w-full absolute">
                <Animated.Image
                    entering={FadeInUp.delay(200).duration(1000).springify()}
                    className="h-[225px] w-[90px]"
                    source={require('../assets/light.png')}
                />
                <Animated.Image
                    entering={FadeInUp.delay(400).duration(1000).springify()}
                    className="h-[225px] w-[65px] -mt-16"
                    source={require('../assets/light.png')}
                />
            </View>

            {/* title and form */}
            <View className="h-full w-full flex justify-around pt-48">
                {/* Title */}
                <View className="flex items-center">
                    <Animated.Text
                        entering={FadeInUp.delay(1000).duration(1000).springify()}
                        className="text-white font-bold tracking-wider text-5xl"
                    >
                        Sign Up
                    </Animated.Text>
                </View>

                {/* form */}
                <Animated.View
                    entering={FadeInDown.duration(1000).springify()}
                    className="flex items-center mx-4 space-y-4"
                >
                    <View className="bg-black/5 p-5 rounded-2xl w-full">
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="gray"
                        />
                    </View>

                    <Animated.View
                        entering={FadeInDown.delay(200).duration(1000).springify()}
                        className="bg-black/5 p-5 rounded-2xl w-full"
                    >
                        <TextInput
                            placeholder="Username"
                            placeholderTextColor="gray"
                        />
                    </Animated.View>

                    <Animated.View
                        entering={FadeInDown.delay(400).duration(1000).springify()}
                        className="bg-black/5 p-5 rounded-2xl w-full mb-3"
                    >
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor="gray"
                            secureTextEntry={true}
                        />
                    </Animated.View>

                    <Animated.View
                        entering={FadeInDown.delay(600).duration(1000).springify()}
                        className="w-full"
                    >
                        <TouchableOpacity
                            className="bg-sky-400 p-3 rounded-2xl mb-3"
                        >
                            <Text className="text-white text-center text-lg font-bold">Sign Up</Text>
                        </TouchableOpacity>
                    </Animated.View>

                    <Animated.View
                        entering={FadeInDown.delay(800).duration(1000).springify()}
                        className="flex-row justify-center"
                    >
                        <Text>Already have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text className="text-sky-600">Login</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </Animated.View>
            </View>
        </View>
    );
}
