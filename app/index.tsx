import React  from "react";
import { View, Text, TouchableOpacity, ScrollView, Touchable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index()
{
    return(
        <SafeAreaView className="flex1 bg-black">
            <ScrollView className="px-4 pt-6">

                {/* --- HEADER -- */}
                <View className="flex-row items-center justify-between mb-8">
                    <View>
                        <Text className="text-gray-400 text-lg">Welcome Back, </Text>
                        <Text className="text-white text-3xl font-bold">Ready to Lift?</Text>
                    </View>
                    <View className="w-12 h-12 bg-gray-800 rounded-full" />
                </View>
                {/* --- CALL TO ACTION --- */}
                <TouchableOpacity className="bg-blue-600 rounded-2xl py-4 justify-center mb-8 active:bg-blue-700">
                    <Text className="text-white text-lg font-bold">Start Empty Workout</Text>
                </TouchableOpacity>

                {/* --- ROUTINES SECTION --- */}
                <Text className="text-white text-xl font-bold mb-4">Your Routines</Text>

                {/* --- ROUTINE CARD 1 --- */}
                <TouchableOpacity className="bg-gray-900 rounded-2xl p-4 mb-4">
                    <Text className="text-white text-lg font-semibold">Push Day</Text>
                    <Text className="text-gray-400 mt-1">Bench Press, Overhead Press, Triceps</Text>
                </TouchableOpacity>

                {/* --- ROUTINE CARD 2 --- */}
                <TouchableOpacity className="bg-gray-900 rounded-2xl p-4 mb-4">
                    <Text className="text-white text-lg font-semibold">Pull Day</Text>
                    <Text className="text-gray-400 mt-1">Deadlift, Pull-ups, Rows</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}