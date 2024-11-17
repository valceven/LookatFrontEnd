import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router'

export default function App() {
  return (
    <View className="bg-accent1 flex-1 items-center justify-center">
      <Text className='text-white'>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Link className='text-accent2' href="/profile"> Go to Profile </Link>
    </View>
  );
}

