import { Box, Button, Text, Image } from '@skynexui/components';
import { useRouter } from 'next/router';
import appConfig from '../config.json';

export default function PaginaNaoEncontrada () {
  const router = useRouter();

  const handleBackToHome = () => {
   router.push(`/`);
  }

  return (
    <>
    <Box
      tag="main"
      styleSheet={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: appConfig.theme.colors.primary['600'],
        backgroundImage: `url(${appConfig.backgrounds[2]})`,
        backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply', backgroundPosition: 'center'
      }}
    >
      <Box
        tag="section"
        styleSheet={{
          backgroundColor: appConfig.theme.colors.neutrals['999'],
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
          borderRadius: '5px',
        }}
      >
        <Image styleSheet={{ borderRadius: '50%', marginBottom: '16px', width: '200px'}}
            src={`${appConfig.backgrounds[1]}`}
        />
        <Text tag="h1" styleSheet={{
          color: appConfig.theme.colors.neutrals['200'],
          fontSize: '42px', fontWeight: 'bold'
        }}>
          404 ERROR
        </Text>
        <Text tag="h2" styleSheet={{ 
          margin: '24px 0px', color: appConfig.theme.colors.neutrals['100'], 
          fontSize: '24px', fontWeight: 'bold'}}>
           Página não encontrada
        </Text>
        <Button
          type='button'
          label='Voltar ao início'
          iconName="arrowLeft"
          onClick={handleBackToHome}
          buttonColors={{
            contrastColor: appConfig.theme.colors.neutrals["000"],
            mainColor: appConfig.theme.colors.primary[900],
            mainColorLight: appConfig.theme.colors.primary[400],
            mainColorStrong: appConfig.theme.colors.primary[600],
          }}
          styleSheet={{
            marginBottom: '30px',
          }}
        />
      </Box>
    </Box>
    </>
  );
}