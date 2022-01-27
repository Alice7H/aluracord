import { Box, Text, Image, Button } from '@skynexui/components';
import appConfig from '../config.json';

export default function MessageList(props) {
  const mensagens = props.mensagens || [];
  const handleRemoveMessage = props.onClick || null;

  return (
      <>
      <Box
          tag="ul"
          styleSheet={{
              display: 'flex', borderRadius: '5px',
              flexDirection: 'column-reverse', flex: 1,
              backgroundColor: appConfig.theme.colors.neutrals['600'],
              color: appConfig.theme.colors.neutrals['000'],
              marginBottom: '16px', overflow: 'auto',
          }}
      >
        { mensagens.length > 0 && mensagens.map(mensagem => 
          <Text
              key={mensagem?.id || 0}
              tag="li"
              styleSheet={{
                  borderRadius: '5px', padding: '6px',
                  margin: '0px 20px 12px 20px',
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                  hover: {
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                  },
              }}
          >
              <Box styleSheet={{marginBottom: '8px',}}>
                  <Image
                      styleSheet={{
                          width: '20px',height: '20px',
                          borderRadius: '50%',
                          display: 'inline-block',
                          marginRight: '8px',
                      }}
                      src={`https://github.com/${mensagem?.de}.png`}
                  />
                  <Text tag="strong">
                      {mensagem?.de || 'nada'}
                  </Text>
                  <Text
                      styleSheet={{
                          fontSize: '10px', marginLeft: '8px',
                          color: appConfig.theme.colors.neutrals[300],
                      }}
                      tag="span"
                  >
                      {(new Date().toLocaleDateString())}
                  </Text>  
                  <Button type='button' rounded="full" iconName="FaTrash"  
                    onClick={()=> handleRemoveMessage(mensagem.id)}
                    styleSheet={{ float: 'right', marginTop: '5px'}}
                    colorVariant="negative"
                  />              
              </Box>
              {mensagem.texto}
          </Text>      
         )
        }
      </Box>
    </>
  );
}