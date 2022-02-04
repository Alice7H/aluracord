import { useState } from 'react';
import { Box, Text, Image, Button } from '@skynexui/components';
import appConfig from '../../config.json';
import Loading from '../components/Loading';
import ConfirmAlert from '../components/ConfirmAlert';
import useOnClickOutside from '../hooks/useOnClickOutside';
import { deleteMessages } from '../services/supabaseMensagens';
import toast from 'react-hot-toast';

export default function MessageList(props) {
  const mensagens = props.mensagens || [];
  const [isOpenConfirmAlert, setIsOpenConfirmAlert] = useState(false);
  const [removeId, setRemoveId] = useState(null);
  useOnClickOutside('#confirmAlert', '#toggleConfirmAlert', ()=>setIsOpenConfirmAlert(false));
 
  const handleOpenConfirmAlert = id => {
    setIsOpenConfirmAlert(!isOpenConfirmAlert);
    setRemoveId(id);
  }

  const handleRemoveMessage = () => {
    // delete supabase
    deleteMessages(removeId).then(({ data, error }) => {
      data ? console.log('Mensagem excluída')
      :  (
        toast.error("Não foi possível deletar a mensagem. Tente mais tarde")
        && console.log(error)
      )
    }); 
    setIsOpenConfirmAlert(false);
  }

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
        { props.isLoading ? <Loading user={props.user} />
        : ( mensagens.length == 0 && 
         <p style={{textAlign: 'center'}}>
          Você não possui mensagens
         </p>)
        }

        {mensagens.length > 0 && mensagens.map(mensagem =>
          <li
            key={mensagem?.id || 0}
            className={props.user === mensagem.de ? 'bubbleLeft' : 'bubbleRight'}
          >
            <Box styleSheet={{ marginBottom: '8px', minHeight: '35px'}}>
              <Image 
                styleSheet={{
                  display: 'inline-block', borderRadius: '50%', cursor: 'pointer',              
                  width: '25px', height: '25px', marginRight: '8px',  
                  hover: {
                    width: '200px', height: '200px', zIndex: 10, borderRadius: '8px',
                    position: 'fixed', top: '135px', left: 'calc(50% - 100px)',
                  }
                }}
                src={`https://github.com/${mensagem.de}.png`}
                alt="Foto de quem enviou mensagem"
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
                {new Date(mensagem?.created_at).toLocaleDateString()}
              </Text>
              {
                mensagem?.de === props.user
                && <Button type='button' rounded="full" iconName="times"
                  onClick={()=>handleOpenConfirmAlert(mensagem?.id)}
                  styleSheet={{ float: 'right', marginTop: '5px', marginBottom: '5px' }}
                  colorVariant="negative"
                  id="toggleConfirmAlert"
                />
              }                 
            </Box>
            {
              mensagem?.texto.startsWith(':sticker:')
            ? <Image src={mensagem?.texto.replace(':sticker:', '')} 
              styleSheet={{ maxHeight: '100px'}}
              />
            : mensagem?.texto
            }
          </li>
        )}
        { isOpenConfirmAlert && 
          <Box 
            id="confirmAlert"
            styleSheet={{
            backgroundColor: appConfig.theme.colors.neutrals['800'],
            color: appConfig.theme.colors.neutrals['000'],
            border: `2px ridge ${appConfig.theme.colors.neutrals['200']}`,
            display: 'flex', 
            flexDirection: 'column',
            borderRadius: '5px', padding: '20px',
            position: 'absolute', zIndex: 10, 
            top: '18px', width: '80%',
            textAlign: 'center', fontSize: '32px', 
          }}>         
            <ConfirmAlert           
                handler={()=>setIsOpenConfirmAlert(false)}
                fn={handleRemoveMessage}
                text="Você deseja remover a mensagem?"
                ok="SIM"
                cancel="NÃO"
              />
          </Box>
        }
        <style jsx>
        {` 
          .bubbleLeft, 
          .bubbleRight {
            position: relative;
            border: 1px solid ${appConfig.theme.colors.neutrals[700]};
            border-radius: 10px; 
            padding: 6px;
            margin: 10px 20px 12px 20px;
            background-color: ${appConfig.theme.colors.neutrals[700]};
          }

          .bubbleLeft:after, 
          .bubbleRight:before {
            content: '';
            position: absolute;
            border-style: solid;
            border-color: transparent ${appConfig.theme.colors.neutrals[700]};
            display: block;
            width: 0;
            z-index: 1;
            top: calc(50% - 20px);
          }
          
          .bubbleLeft:after{
            left: -20px;
            border-width: 20px 20px 20px 0;
          }
          .bubbleRight:before{
            right: -20px;
            border-width: 20px 0 20px 20px;
          }
        
          .bubbleLeft:hover,
          .bubbleRight:hover {
            background-color: ${appConfig.theme.colors.neutrals[900]};
          }

          .bubbleLeft:hover:after,
          .bubbleRight:hover:before {
            border-color: transparent ${appConfig.theme.colors.neutrals[900]};
          }
        `}
        </style>
      </Box>
    </>
  );
}