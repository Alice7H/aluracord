import appConfig from '../config.json';
import { Box, Button, TextField } from '@skynexui/components';

export default function MessageForm(props) {
  const { message, handleSubmit, handleChangeMessage, handleEnter } = props;

  return (
    <>
      <Box as="form" onSubmit={()=>handleSubmit} 
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
         onChange={()=>handleChangeMessage}
         onKeyPress={()=>handleEnter}
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
