import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export const listenerInsertedMessagesRealTime = (newMessage) => {
  return supabaseClient.from('mensagens').on('INSERT', payload => {
    console.log('Change received!', payload);
    payload.new && newMessage(payload.new);
  }).subscribe();
}

export const listenerDeletedMessagesRealTime = (newMessage) => {
  return supabaseClient.from('mensagens').on('DELETE', payload => {
    console.log('Change received!', payload);
    payload.old.id && newMessage(payload.old.id);
  }).subscribe();
}
