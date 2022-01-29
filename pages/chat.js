import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@skynexui/components';
import appConfig from '../config.json';
import Header from '../src/components/Header';
import MessageList from '../src/components/MessageList';
import MessageForm from '../src/components/MessageForm';
import { supabaseClient } from '../src/utils/supabase';

export default function PaginaDoChat() {
  const router = useRouter();
  const usuarioLogado = router.query.username;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMessages = async () => {
    const { data,error } = await supabaseClient.from('mensagens').select('*').order('id', {ascending: false});
    data ? setMessages(data) : console.log(error);
    setIsLoading(false);
  };

  // const listenerMessagesRealTime = () => {
  //   return supabaseClient.from('mensagens').on('*', payload => {
  //     console.log('Change received!', payload.eventType);
  //   }).subscribe();
  // }
  
  useEffect(()=>{
    getMessages();
    // const subscription = listenerMessagesRealTime();
    // return () => subscription.unsubscribe();
  },[]);
 
  const handleChangeMessage = (value) => setMessage(value)
  
  const handleSubmit = (texto) => { 
    const msg = {
      de: usuarioLogado,
      texto: texto,
    }
    if(texto != '' && usuarioLogado != null){
      // insert supabase
      supabaseClient.from('mensagens').insert(msg)
      .then(({data,error}) => {
        data 
        ? setMessages(prev => [data[0], ...prev]) && console.log('message inserted') 
        : console.log(error);
      });

      setMessage('');
    }else{
      alert('Insira sua mensagem');
    }
  }

  const handleKeyPress = (event) => {
    if(event.code === 'Enter') {
      event.preventDefault();
      handleSubmit(message);
    }
  }

  const handleClickSticker = (sticker) => {
    handleSubmit(`:sticker:${sticker}`);
  }

  const handleRemoveMessage = (id) => {
     let text = "Você realmente deseja remover esta mensagem?";
     if (confirm(text) === true) {
        // delete supabase
        supabaseClient.from('mensagens').delete().match({ 'id': id })
        .then(({ data, error }) => {
          if(data){
            const res = messages.filter(message => message.id !== data[0].id);
            setMessages(res);
          }else {
            console.log(error);
          }
        });
     }
  }


  return(
    <Box
      styleSheet={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', 
        backgroundColor: appConfig.theme.colors.primary['050'],
        backgroundImage: `url(${appConfig.backgrounds[3]})`,
        backgroundRepeat: 'no-repeat', backgroundSize: 'cover', 
        backgroundBlendMode: 'multiply',
        color: appConfig.theme.colors.neutrals['000'],
      }}
    >    
      <Box styleSheet={{
          backgroundColor: appConfig.theme.colors.neutrals['900'],
          borderRadius: '5px',
          boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
          display: 'flex', flexDirection: 'column', flex: 1,
          height: '100%',maxHeight: '95vh',
          maxWidth: '95%' , padding: '32px',
        }}
      >
        <Header />
        <Box as="main" 
          styleSheet={{
            backgroundColor: appConfig.theme.colors.neutrals[900],
            color: appConfig.theme.colors.neutrals['050'],
            borderRadius: '5px', padding: '16px',
            display: 'flex', flex: 1, flexDirection: 'column',
            height: '80%', width: '100%',
            position: 'relative', alignItems: 'left', lineHeight: '24px',
          }}>
          
          <MessageList 
            mensagens={messages} 
            onClick={handleRemoveMessage} 
            user={usuarioLogado}
            isLoading={isLoading}
          />
          
          <MessageForm 
            message={message} 
            handleSubmit={handleSubmit} 
            handleChangeMessage={handleChangeMessage}
            handleEnter={handleKeyPress} 
            handleClickSticker={handleClickSticker}
          />
        </Box> 
      </Box>
    </Box>
  );
}