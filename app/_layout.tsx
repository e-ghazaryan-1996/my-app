import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image } from 'react-native';
import Animated, { FadeIn, ZoomOut, SlideInDown } from 'react-native-reanimated';
import '@/i18n';

import { useColorScheme } from '@/hooks/useColorScheme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [showSplash, setShowSplash] = useState(true);
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      // Hide splash after 2 seconds
      setTimeout(() => {
        setShowSplash(false);
      }, 2000);
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {showSplash ? (
        <Animated.View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
          }}
          entering={FadeIn.duration(1000)}
          exiting={ZoomOut.duration(1000)}
        >
          <Image
            source={require('../assets/images/splash-flower.png')} // Add your splash image
            style={{ width: 200, height: 200 }}
            resizeMode="contain"
          />
        </Animated.View>
      ) : (
        <Animated.View style={{ flex: 1 }} entering={SlideInDown.duration(1000)}>
          <Stack>
            <Stack.Screen name="login" options={{ headerShown: false }} />
            <Stack.Screen name="signup" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
        </Animated.View>
      )}
    </ThemeProvider>
  );
}
