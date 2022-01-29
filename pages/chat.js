import { useState, useEffect, useCallback} from 'react';
import { useRouter } from 'next/router';
import appConfig from '../config.json';
import Header from '../components/Header';
import MessageList from '../components/MessageList';
import MessageForm from '../components/MessageForm';
import { Box } from '@skynexui/components';
import { supabaseClient } from '../utils/supabase';

export default function PaginaDoChat() {
  const router = useRouter();
  const usuarioLogado = router.query.username;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const getMessages = async () => {
    const { data,error } = await supabaseClient.from('mensagens').select('*').order('id', {ascending: false});
    data ? setMessages(data) : console.log(error);
    setIsLoading(false);
  };
  
  useCallback(()=>{
    getMessages();
  },[messages])

  useEffect(()=>{
    getMessages();
  },[]);
 
  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  }
  
  const handleKeyPress = (event) => {
    if(event.code === 'Enter') {
      event.preventDefault();
      _saveMessages();
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    _saveMessages();
  }

  const _saveMessages = () => {
    const msg = {
      de: user,
      texto: message,
    }
    if(message != ''){
      // insert supabase
      supabaseClient.from('mensagens').insert(msg)
      .then(({data,error}) => {
        if(data) {
          console.log('message inserted');
          setMessages(prev => [data[0], ...prev]) 
        }else {
          console.log(error);
        }
      })
      setMessage('');
    }else {
      alert('Insira sua mensagem');
    }
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
          />
        </Box> 
      </Box>
    </Box>
  );
}