import { useState, useEffect } from 'react';
import { useAuth } from '../src/hooks/useAuth';
import HomePage from '../pages/index';
import { Box } from '@skynexui/components';
import appConfig from '../config.json';
import Header from '../src/components/Header';
import ProfileBox from '../src/components/ProfileBox';
import MessageList from '../src/components/MessageList';
import MessageForm from '../src/components/MessageForm';
import Loading from '../src/components/Loading';
import useGitHubUser from '../src/hooks/useGitHubUser';
import toast, { Toaster } from 'react-hot-toast';
import { selectMessages, listenerMessagesRealtime } from '../src/services/supabaseMensagens';
import { supabaseClient } from '../src/utils/supabase';

export default function PaginaDoChat() {
  const { user, userLoading } = useAuth();
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const usuarioLogado = user?.user_metadata?.user_name?.toLowerCase();
  const currentGithubUser = useGitHubUser(usuarioLogado);
  
  useEffect(()=>{
    const getMessages = () => {
      selectMessages().then(({data,error})=>{
        data ? setMessages(data) 
        : (
          toast.error('Não foi possível encontrar as mensagens.') 
          && console.log(error)
        );
      }) 
      setIsLoading(false);
    };
    getMessages();

    listenerMessagesRealtime(newMessage =>{
      newMessage.eventType == 'INSERT'
      && setMessages(prev=>[newMessage.new, ...prev]);
      
      newMessage.eventType == 'DELETE' 
      && setMessages(prev=>prev.filter(m=>m.id !== newMessage.old.id));

      newMessage.errors && console.log(newMessage.errors);
    });
    
   return ()=> supabaseClient.removeAllSubscriptions();
  },[])

  return(
    <>
    { 
    (!usuarioLogado && userLoading)
    ? <Loading />
    : (!usuarioLogado && !userLoading && !user)
    ? <HomePage />
    : <Box
      styleSheet={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', 
        backgroundColor: appConfig.theme.colors.primary['600'],
        backgroundImage: `url(${appConfig.backgrounds[2]})`,
        backgroundRepeat: 'no-repeat', backgroundSize: 'cover', 
        backgroundBlendMode: 'multiply',
        color: appConfig.theme.colors.neutrals['000'],
        overflow: 'hidden', height: '100%',
      }}
    >  
      <Box 
        styleSheet={{
          backgroundColor: appConfig.theme.colors.neutrals['900'],
          borderRadius: '5px',
          boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
          display: 'flex', flexDirection: 'column', flex: 1,
          height: '100%',maxHeight: '95vh',
          maxWidth: '95%' , padding: '32px',
        }}
      >
        <Toaster position="top-right" reverseOrder={false} />
        
        <Header user={currentGithubUser}/>
        
        <Box as="main" 
          styleSheet={{
            backgroundColor: appConfig.theme.colors.neutrals[900],           
            color: appConfig.theme.colors.neutrals['050'],
            borderRadius: '5px', padding: '16px',
            display: 'flex', 
            flexDirection: {xs:'column', md: 'row'},
            height: '90%', width: '100%',
            position: 'relative', alignItems: 'flex-start', lineHeight: '24px',
          }}>

          <Box as="aside"
            styleSheet={{
              backgroundColor: appConfig.theme.colors.neutrals['900'],
              color: appConfig.theme.colors.neutrals['050'],
              display: {xs:'none', md:'flex'},
              flexDirection: 'column',
              width: {sm:'100%', md:'20%'},
              marginBottom: '10px',
              maxHeight: '100%',
            }}
          > 
            <ProfileBox user={currentGithubUser}/>
          </Box>

          <Box tag="section"
            styleSheet={{ display: 'flex', width: {xs: '100%',md:'80%'}, 
            flexDirection: 'column', height: '100%',
          }}>
            <MessageList 
              mensagens={messages} 
              user={usuarioLogado}
              isLoading={isLoading}
            />
          
            <MessageForm user={usuarioLogado}/>
          </Box>
        </Box> 
      </Box> 
    </Box>
    }
    </>
  );
}