import { useFonts } from 'expo-font'; 
import * as SplashScreen from 'expo-splash-screen'; 
import {useEffect} from 'react';
import { Stack } from 'expo-router';


SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
 const [loaded, error] = useFonts({
   'Forum': require('../assets/fonts/ForumRegular.ttf'),
 });

 useEffect(() => {
   if (loaded || error) {
     SplashScreen.hideAsync();
   }
 }, [loaded, error]);

 if (!loaded && !error) {
   return null;
 }
 return (
  <Stack>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    <Stack.Screen name="+not-found" />
  </Stack>
   );
}
