import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = "https://kctfrpdmiktsclektvsl.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjdGZycGRtaWt0c2NsZWt0dnNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1NzA2NDgsImV4cCI6MjA3MzE0NjY0OH0.TSSYECwrEpVKsPlpZ4yJ52ifUBQNL05qTFBzbwTFtTs"
  
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
 