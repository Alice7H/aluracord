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
              margin: '10px 20px 12px 20px',
              backgroundColor: appConfig.theme.colors.neutrals[600],
              hover: {
                backgroundColor: appConfig.theme.colors.neutrals[800],
              },
            }}
          >
            <Box styleSheet={{ marginBottom: '8px', minHeight: '35px'}}>
              <Image className="hover-compatibility"
                styleSheet={{
                  display: 'inline-block', borderRadius: '50%', cursor: 'pointer',              
                  width: 'px', height: '25px', marginRight: '8px',  
                  hover: {
                    width: '200px', height: '200px', zIndex: 10, borderRadius: '8px',
                    position: 'absolute', top: '20px', left: 'calc(50% - 100px)',
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
        <style jsx>
        {`
          .hover-compatibility:hover {
            border-radius: 8px;
            position: absolute; 
            top: 20px; 
            left: calc(50% - 100px);
            height: 200px; 
            width: 200px; 
            z-index: 10;
          }
        `}
        </style>
      </Box>
    </>
  );
}