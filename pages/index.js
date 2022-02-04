import { Box, Button, Text, Image} from '@skynexui/components';
import appConfig from '../config.json';
import Title from '../src/components/Title';
import { useAuth } from '../src/hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';
import Loading from '../src/components/Loading';

export default function PaginaInicial() {
  const { 
    signInWithProvider, 
    messageError, 
    userLoading,
    loggedIn
  } = useAuth();

  const handleSignInWithGithub = (event) => {
    event.preventDefault();
    signInWithProvider("github");

    messageError && toast.error('Usuário não credenciado');
  };

  if(userLoading && loggedIn) {
    return <Loading />
  }

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Box tag='main'
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column',
          backgroundColor: appConfig.theme.colors.primary['600'],
          backgroundImage: `url(${appConfig.backgrounds[2]})`,
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply', backgroundPosition: 'center'
        }}
      >
        
          {/* SignIn */}
          <Box 
            styleSheet={{
              backgroundColor: appConfig.theme.colors.neutrals[999],
              padding: '30px', borderRadius: '8px', minHeight: '270px',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%', md: '40%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Title tag='h2'>Seja Bem-Vindo(a)!</Title>
            <Text variant='body3' styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
              {appConfig.name} 
            </Text>
            <Image
              src='images/chat.gif'
              alt="Usuário"
              styleSheet={{ 
                width: '150px', 
                height: '140px', 
                borderRadius: '50%',
              }}
            />
            <Button
              type="button"
              label="Entrar com"
              iconName="github"
              title="Entrar com o GitHub"
              onClick={handleSignInWithGithub}
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[900],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[700],
              }}
              styleSheet={{ marginTop: "40px", maxWidth: "250px"}}
            />
          </Box>
          {/* SignIn */}
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