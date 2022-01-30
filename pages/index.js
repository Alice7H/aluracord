import { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Text, TextField, Image} from '@skynexui/components';
import appConfig from '../config.json';
import Title from '../src/components/Title';

export default function PaginaInicial() {
  const [username, setUsername] = useState('');
  const isValid = username.length > 2;
  const router = useRouter();

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/chat?username=${username}`);
  }

  return (
    <>
      <Box tag='main'
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column',
          backgroundColor: appConfig.theme.colors.primary['600'],
          backgroundImage: `url(${appConfig.backgrounds[2]})`,
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply', backgroundPosition: 'center'
        }}
      >
        <Box tag='section'
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexDirection: { xs: 'column',sm: 'row'},
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals[999],
          }}
        >
          {/* Formulário */}
          <Box as='form' onSubmit={handleSubmit}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Title tag='h2'>Seja Bem-Vindo(a)!</Title>
            <Text variant='body3' styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
              {appConfig.name} {username ? `- ${username}` : ''}
            </Text>

            <TextField
              id='username'
              name='username'
              label='Informe o seu nome de usuário'
              placeholder='Informe o seu nome de usuário'
              value={username}
              onChange={handleChangeUsername}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />

            <Button
              type='submit'
              label='Entrar'
              iconName='FaSignInAlt'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals['000'],
                mainColor: appConfig.theme.colors.primary[900],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }
            }/>
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image styleSheet={{ borderRadius: '50%', marginBottom: '16px'}}
              src={ isValid ?`https://github.com/${username}.png` : `${appConfig.backgrounds[0]}`}
            />
            <Text
              variant='body4'
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username || ''}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
      <style jsx>
        {`p { 
          color: ${appConfig.theme.colors.neutrals[200]};
          line-height: 24px;
        } 
        `}
      </style>
    </>
  );
}