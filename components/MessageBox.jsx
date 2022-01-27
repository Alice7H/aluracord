import { useState } from 'react';
import appConfig from '../config.json';
import { Box, Button, TextField } from '@skynexui/components';
import MessageList from './MessageList';

export default function MessageBox() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
 
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
    const data = {
      id: Date.now() + Math.floor(Math.random() * 101),
      de: 'alice7h',
      texto: message,
    }
    setMessages(prev => [data, ...prev]);
    setMessage('');
  }

  const handleRemoveMessage = (id) => {
     let text = "Você realmente deseja remover esta mensagem?";
     if (confirm(text) === true) {
      const msgs = messages.filter(message => message.id !== id);
      setMessages(msgs);
       text = "Removido com sucesso!";
     } else {
       text = "Você cancelou!";
     }
  }

  return (
    <>
      <MessageList mensagens={messages} onClick={handleRemoveMessage} />
      
      <Box as="form" onSubmit={handleSubmit} 
        styleSheet={{display: 'flex', alignItems: 'center'}}>
        
        <TextField as="textarea"
         label="Insira sua mensagem aqui..."
         placeholder="Insira sua mensagem aqui..." 
         id="message" 
         styleSheet={{ 
          width: '100%', resize: 'none',
          border: '0', borderRadius: '5px', 
          marginRight: '12px', padding: '6px 8px',
          backgroundColor: appConfig.theme.colors.neutrals[800],
          color: appConfig.theme.colors.neutrals[200],
        }}
         value={message}
         onChange={handleChangeMessage}
         onKeyPress={handleKeyPress}
         />
        <Button type='submit' iconName="FaPaperPlane" 
         styleSheet={{ 
          height: '45px', marginBottom: '6px',padding: 'auto 10px',
          width: {xs:'20%', md:'10%', xl: "7%"},
        }}
         buttonColors={{
          contrastColor: appConfig.theme.colors.neutrals["000"],
          mainColor: appConfig.theme.colors.primary[900],
          mainColorLight: appConfig.theme.colors.primary[400],
          mainColorStrong: appConfig.theme.colors.primary[600],
        }}
        />
      </Box>
    </>
  );
}
