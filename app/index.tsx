// @@iconify-code-gen
import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Iconify } from 'react-native-iconify';

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1 pb-28" showsVerticalScrollIndicator={false}>
        
        {/* --- HEADER --- */}
        <View className="px-6 pt-6 pb-6 flex-row items-start justify-between">
          <View className="flex-1">
            <Text className="text-3xl font-heading font-bold tracking-tight text-white mb-1">
              Good morning, <Text className="text-primary">Hiren</Text>
            </Text>
            <Text className="text-muted-foreground text-sm font-medium mt-1">
              "The only bad workout is the one that didn't happen."
            </Text>
          </View>
          <View className="relative ml-4">
            <Image
              source={{ uri: "https://avatars.githubusercontent.com/u/261600621?v=4" }}
              className="w-12 h-12 rounded-full border-2 border-border"
              resizeMode="cover"
            />
            <View className="absolute bottom-0 right-0 w-3 h-3 bg-accent rounded-full border-2 border-background" />
          </View>
        </View>

        {/* --- WEEKLY ACTIVITY --- */}
        <View className="px-6 mb-8">
          <View className="bg-card border border-border rounded-lg p-5">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Weekly Activity
              </Text>
              <View className="bg-accent/10 px-2 py-1 rounded">
                <Text className="text-accent text-xs font-bold">On Track</Text>
              </View>
            </View>
            <View className="flex-row items-end justify-between h-32 gap-2">
              {['M', 'T', 'W'].map((day, i) => (
                <View key={day} className="flex-col items-center gap-2 flex-1 h-full justify-end">
                  <View className="w-full bg-primary/20 rounded-t-sm relative overflow-hidden" style={{ height: i === 0 ? '40%' : i === 1 ? '65%' : '30%' }}>
                    <View className="absolute bottom-0 left-0 w-full bg-primary h-full" />
                  </View>
                  <Text className="text-xs text-muted-foreground font-heading">{day}</Text>
                </View>
              ))}
              {/* Today */}
              <View className="flex-col items-center gap-2 flex-1 h-full justify-end">
                <View className="w-full bg-accent/20 rounded-t-sm h-[85%] relative overflow-hidden border border-accent/30">
                  <View className="absolute bottom-0 left-0 w-full bg-accent h-full" />
                </View>
                <Text className="text-xs text-white font-heading font-bold">T</Text>
              </View>
              {/* Future */}
              {['F', 'S', 'S'].map((day, index) => (
                <View key={index + day} className="flex-col items-center gap-2 flex-1 h-full justify-end">
                  <View className="w-full bg-muted rounded-t-sm h-[90%] relative overflow-hidden" />
                  <Text className="text-xs text-muted-foreground font-heading">{day}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* --- START WORKOUT BUTTON --- */}
        <View className="px-6 mb-8">
          <TouchableOpacity className="w-full bg-primary active:bg-primary/90 h-14 rounded-md flex-row items-center justify-between px-6">
            <View className="flex-row items-center gap-3">
              <View className="bg-white/20 p-2 rounded-full">
                <Iconify icon="solar:play-bold" size={20} color="white" />
              </View>
              <Text className="font-bold text-lg text-white tracking-tight">Start Workout</Text>
            </View>
            <Iconify icon="solar:arrow-right-linear" size={24} color="rgba(255,255,255,0.7)" />
          </TouchableOpacity>
        </View>

        {/* --- LAST SESSION --- */}
        <View className="px-6 mb-8">
          <View className="flex-row justify-between items-end mb-4">
            <Text className="text-lg font-bold text-white tracking-tight">Last Session</Text>
            <Text className="text-primary text-sm font-medium">View History</Text>
          </View>
          <View className="bg-card border border-border rounded-lg p-5 relative overflow-hidden">
            <View className="flex-row justify-between items-start mb-6">
              <View>
                <Text className="text-xl font-heading font-bold text-white mb-1">Upper Body Power</Text>
                <View className="flex-row items-center gap-1">
                  <Iconify icon="solar:calendar-linear" size={16} color="#9CA3AF" />
                  <Text className="text-muted-foreground text-sm">Yesterday, 5:30 PM</Text>
                </View>
              </View>
              <View className="bg-accent/10 border border-accent/20 px-3 py-1 rounded">
                <Text className="text-accent text-xs font-bold uppercase tracking-wider">Completed</Text>
              </View>
            </View>
            <View className="flex-row border-t border-border pt-4">
              <View className="flex-1">
                <Text className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Duration</Text>
                <Text className="text-xl font-heading font-bold text-white">45 <Text className="text-sm text-muted-foreground font-normal">min</Text></Text>
              </View>
              <View className="flex-1">
                <Text className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Volume</Text>
                <Text className="text-xl font-heading font-bold text-white">8,450 <Text className="text-sm text-muted-foreground font-normal">kg</Text></Text>
              </View>
              <View className="flex-1">
                <Text className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Records</Text>
                <View className="flex-row items-center gap-1">
                  <Iconify icon="solar:medal-star-bold" size={20} color="#D4FF00" />
                  <Text className="text-xl font-heading font-bold text-white">2</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* --- NEXT UP --- */}
        <View className="px-6 mb-8">
          <Text className="text-lg font-bold text-white tracking-tight mb-4">Next Up</Text>
          <View className="bg-card border border-border rounded-lg p-1 flex-row items-center">
            <View className="h-20 w-20 bg-muted rounded overflow-hidden relative">
              <Image
                source={{ uri: "https://ggrhecslgdflloszjkwl.supabase.co/storage/v1/object/public/user-assets/XVLq65BaMuH/components/QjlzvNE5bL7.png" }}
                className="w-full h-full opacity-80"
                resizeMode="cover"
              />
              <View className="absolute inset-0 bg-black/20" />
            </View>
            <View className="p-4 flex-1">
              <Text className="font-bold text-white text-base mb-1">High Intensity Cardio</Text>
              <Text className="text-sm text-muted-foreground">Scheduled for Tomorrow</Text>
            </View>
            <TouchableOpacity className="mr-4 h-8 w-8 rounded-full border border-border flex items-center justify-center">
              <Iconify icon="solar:menu-dots-bold" size={16} color="#9CA3AF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* --- RECOMMENDED (Horizontal Scroll) --- */}
        <View className="mb-8">
          <View className="px-6 flex-row justify-between items-end mb-4">
            <Text className="text-lg font-bold text-white tracking-tight">Recommended</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}>
            {/* Card 1 */}
            <TouchableOpacity className="w-64 bg-card border border-border rounded-lg overflow-hidden">
              <View className="h-32 w-full relative">
                <Image
                  source={{ uri: "https://ggrhecslgdflloszjkwl.supabase.co/storage/v1/object/public/user-assets/XVLq65BaMuH/components/0xwgeQIgqI9.png" }}
                  className="w-full h-full"
                  resizeMode="cover"
                />
                <View className="absolute inset-0 bg-black/40" />
                <View className="absolute bottom-3 left-3 bg-primary px-2 py-0.5 rounded-sm">
                  <Text className="text-xs font-bold text-white">Strength</Text>
                </View>
              </View>
              <View className="p-4">
                <Text className="font-bold text-white mb-1">5x5 Stronglift</Text>
                <Text className="text-xs text-muted-foreground mb-3">Classic compound movement routine for raw strength.</Text>
                <View className="flex-row items-center gap-3">
                  <View className="flex-row items-center gap-1">
                    <Iconify icon="solar:clock-circle-linear" size={14} color="#9CA3AF" />
                    <Text className="text-xs text-muted-foreground">60m</Text>
                  </View>
                  <View className="flex-row items-center gap-1">
                    <Iconify icon="solar:dumbbell-linear" size={14} color="#9CA3AF" />
                    <Text className="text-xs text-muted-foreground">Heavy</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            {/* Card 2 */}
            <TouchableOpacity className="w-64 bg-card border border-border rounded-lg overflow-hidden">
              <View className="h-32 w-full relative bg-indigo-900 justify-center items-center">
                <Iconify icon="solar:running-bold" size={60} color="rgba(255,255,255,0.2)" />
                <View className="absolute bottom-3 left-3 bg-accent px-2 py-0.5 rounded-sm">
                  <Text className="text-xs font-bold text-black">Endurance</Text>
                </View>
              </View>
              <View className="p-4">
                <Text className="font-bold text-white mb-1">HIIT Tabata</Text>
                <Text className="text-xs text-muted-foreground mb-3">20s work, 10s rest. Repeat until failure.</Text>
                <View className="flex-row items-center gap-3">
                  <View className="flex-row items-center gap-1">
                    <Iconify icon="solar:clock-circle-linear" size={14} color="#9CA3AF" />
                    <Text className="text-xs text-muted-foreground">20m</Text>
                  </View>
                  <View className="flex-row items-center gap-1">
                    <Iconify icon="solar:flame-linear" size={14} color="#9CA3AF" />
                    <Text className="text-xs text-muted-foreground">Intense</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        
        {/* Padding for Bottom Tabs */}
        <View className="h-10" />
      </ScrollView>
    </SafeAreaView>
  );
}