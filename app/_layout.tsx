import { supabase } from "@/utils/supabase";
import { router, Stack } from "expo-router";
import { useEffect, useState } from "react";

import "../global.css";
export default function RootLayout() {
  const [isSession, setSession] = useState(null);

  useEffect(() => {
    // Load current session
    const getUser = async () => {
      await supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session);
      });
    };

    getUser();

    // Listen for login/logout
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);

      if (session == null) {
        router.replace("/(auth)");
        // console.log(session)
      } else {
        router.replace("/(home)");
        console.log("authenticated");
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
       
    </Stack>
  );
}
