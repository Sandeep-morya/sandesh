﻿import { View, Text } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { useSlice } from "../../redux/utils";
import { StatusBar } from "expo-status-bar";

export default function index() {
	const { mode } = useSlice("appSettings");
	const router = useRouter();

	const bg = mode === "light" ? "bg-gray-200" : "bg-slate-800";
	const text = mode === "light" ? "text-black" : "text-white";

	return (
		<View className={`${bg} flex-1`}>
			<Text className={`${text}`}>Messages</Text>
			<StatusBar style="light" />
		</View>
	);
}
