import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useRouter } from 'expo-router';

import React, { useEffect,useState } from "react";
import { supabase } from '../utils/supabase';

import '../global.css';


export default function RootLayout() {
  


  const router = useRouter();
   const [session, setSession] =  useState(null);


  useEffect(() => {
    // Load current session
    const getUser = async ()=>{
    await supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    }
     getUser();
    // Listen for login/logout
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
       
        if (session == null) {
          router.replace("/(public)");
          // console.log(session)
        } else {
          router.replace("/(home)");
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };

   
  }, []);

  // if (loading) {
  //   return ; // or splash/loading screen
  // }

  return (
    // <Stack screenOptions={{headerShown: false}}>
    //   <Stack.Protected guard={!isAuthenticated}>
    //     <Stack.Screen name="(public)" />
    //   </Stack.Protected>

    //   <Stack.Protected guard={isAuthenticated}>
    //     <Stack.Screen name="(home)" />
    //   </Stack.Protected>
    //   {/* Expo Router includes all rohomeutes by default. Adding Stack.Protected creates exceptions for these screens. */}
    // </Stack>

   <Stack screenOptions={{ headerShown: false }}>
       
    </Stack>
  );
}
