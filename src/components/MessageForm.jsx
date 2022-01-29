import appConfig from '../../config.json';
import { Box, Button, TextField } from '@skynexui/components';
import ButtonSendSticker from '../components/ButtonSendSticker';

export default function MessageForm(props) {
  const { 
    message, 
    handleSubmit, 
    handleChangeMessage, 
    handleEnter,
    handleClickSticker 
  } = props;

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
          
        <ButtonSendSticker onStickerClick={handleClickSticker}/>

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
         onChange={(event)=>handleChangeMessage(event.target.value)}
         onKeyPress={(event)=>handleEnter(event)}
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
