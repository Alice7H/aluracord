import { useState } from 'react';
import appConfig from '../../config.json';
import { Box, Button, TextField } from '@skynexui/components';
import ButtonSendSticker from '../components/ButtonSendSticker';
import { supabaseClient } from '../services/supabase';
import toast from 'react-hot-toast';

export default function MessageForm(props) {
  const [message, setMessage] = useState('');

  const handleKeyPress = (event) => {
    if(event.code === 'Enter') {
      event.preventDefault();
      handleSubmit(message);
    }
  }

  const handleChangeMessage = (value) => setMessage(value);
  
  const handleClickSticker = (sticker) => handleSubmit(`:sticker:${sticker}`);

  const handleSubmit = (texto) => { 
    const msg = {
      de: props.user,
      texto: texto,
    }
    if(texto != '' && props.user != null){
      // insert supabase
      supabaseClient.from('mensagens').insert(msg)
      .then(({data,error}) => {
        data ? console.log('Mensagem enviada') 
        : (
          toast.error('Não foi possível enviar sua mensagem.')
          && console.log(error)
        );
      });

      setMessage('');
    }else{
      toast.error('Insira sua mensagem');
    }
  }

  return (
    <>
      <Box as="form" onSubmit={(event)=>{
        event.preventDefault();
        handleSubmit(message);
      }} 
        styleSheet={{
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>

        <Box styleSheet={{position: 'relative',}}>
          <ButtonSendSticker onStickerClick={handleClickSticker}/>
        </Box> 

        <TextField as="textarea"
         label="Insira sua mensagem aqui..."
         placeholder="Insira sua mensagem aqui..."
         name="mensagem" 
         id="mensagem" 
         styleSheet={{ 
          width: '100%', resize: 'none',
          border: '0', borderRadius: '5px', 
          marginRight: '12px',
          backgroundColor: appConfig.theme.colors.neutrals[800],
          color: appConfig.theme.colors.neutrals[200],
        }}
         value={message}
         onChange={(event)=>handleChangeMessage(event.target.value)}
         onKeyPress={(event)=>handleKeyPress(event)}
         />

        <Button type='submit' iconName="FaPaperPlane" 
        styleSheet={{ 
          borderRadius: '50%',
          padding: '0 3px 0 0',
          minWidth: '50px',
          minHeight: '50px',
          fontSize: '18px',
          marginBottom: '8px',
          lineHeight: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        buttonColors={{
          contrastColor: appConfig.theme.colors.neutrals["000"],
          mainColor: appConfig.theme.colors.primary[900],
          mainColorLight: appConfig.theme.colors.primary[400],
          mainColorStrong: appConfig.theme.colors.primary[600],
        }} />     
      </Box>
    </>
  );
}
