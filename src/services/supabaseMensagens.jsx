import { supabaseClient } from '../utils/supabase';

export const selectMessages = async() => {
  return await supabaseClient.from('mensagens').select('*')
  .order('id', {ascending: false});
}

export const deleteMessages = async (id) =>{
  return await supabaseClient
  .from('mensagens')
  .delete().match({ 'id': id })
}

export const insertMessages = async (msg) => {
  return await supabaseClient
  .from('mensagens')
  .insert(msg);
}

export const listenerMessagesRealtime = (newMessage) => {
  return supabaseClient.from('mensagens').on('*', payload => {
    newMessage(payload);
  }).subscribe();
}