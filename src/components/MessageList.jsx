import { Box, Text, Image, Button } from '@skynexui/components';
import appConfig from '../../config.json';
import Loading from '../components/Loading';

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
        {props.isLoading && <Loading user={props.user} />}
        {mensagens.length > 0 && mensagens.map(mensagem =>
          <Text
            key={mensagem?.id || 0}
            tag="li"
            styleSheet={{
              borderRadius: '5px', padding: '6px',
              margin: '0px 20px 12px 20px',
              backgroundColor: appConfig.theme.colors.neutrals[600],
              hover: {
                backgroundColor: appConfig.theme.colors.neutrals[800],
              },
            }}
          >
            <Box styleSheet={{ marginBottom: '8px', minHeight: '35px'}}>
              <Image
                styleSheet={{
                  width: '25px', height: '25px',
                  borderRadius: '50%',
                  display: 'inline-block',
                  marginRight: '8px',
                  cursor: 'zoom-in',              
                  hover: {
                    borderRadius: '8px',
                    position: 'absolute', top: '20px', left: 'calc(50% - 100px)',
                    width: '200px', 
                    height: '200px',
                    zIndex: 10,
                  }
                }}
                src={`https://github.com/${mensagem.de}.png`}
              />
              <Text tag="a" 
                href={`http://github.com/${mensagem.de}`}
                alt={`Abre nova aba para o github de ${mensagem.de}`}
                target='_blank'
                styleSheet={{ 
                  color: appConfig.theme.colors.neutrals['000'],
                  textDecoration: 'none',
                }}
              >
                {mensagem.de || 'desconhecido'}
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
                onClick={() => handleRemoveMessage(mensagem.id)}
                styleSheet={{ float: 'right', marginTop: '5px' }}
                colorVariant="negative"
              />
            </Box>
            {
              mensagem.texto.startsWith(':sticker:')
            ? <Image src={mensagem.texto.replace(':sticker:', '')} 
              styleSheet={{ maxHeight: '100px'}}
              />
            : mensagem.texto
            }
          </Text>
        )}
      </Box>
    </>
  );
}