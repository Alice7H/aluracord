import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export const listenerMessagesRealtime = (newMessage) => {
  return supabaseClient.from('mensagens').on('*', payload =>{
    newMessage(payload);
  }).subscribe();
}
