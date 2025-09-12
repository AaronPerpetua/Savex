import React, { useState } from 'react';
import { View, TextInput, Button, Text ,Alert } from 'react-native';

import { useRouter } from 'expo-router';
import { supabase } from '../../utils/supabase';
import * as Linking from "expo-linking";


export default function Register() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


    const handleRegister = async () => {
    const redirectUrl = Linking.createURL("/home"); // deep link to home after email confirm

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl,
      },
    });

    if (error) {
      Alert.alert("Registration failed", error.message);
    } else {
      Alert.alert("Check your email", "Confirm your account via the link sent.");
      router.navigate("/registration");
    }
  };

  return (
    <View>
      <Text>Register</Text>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Sign Up" onPress={handleRegister} />
      <Button title="Go to Login" onPress={() => router.navigate('/')} />
    </View>
  );
}
