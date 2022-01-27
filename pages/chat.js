import appConfig from '../config.json';
import ProfileBox from '../components/ProfileBox';
import MessageBox from '../components/MessageBox';
import Header from '../components/Header';
import { Box } from '@skynexui/components';

export default function PaginaDoChat() {
  return(
    <Box
      styleSheet={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', 
        backgroundColor: appConfig.theme.colors.primary['050'],
        backgroundImage: `url(${appConfig.backgrounds[3]})`,
        backgroundRepeat: 'no-repeat', backgroundSize: 'cover', 
        backgroundBlendMode: 'multiply',
        color: appConfig.theme.colors.neutrals['000'],
      }}
    >    
      <Box styleSheet={{
          backgroundColor: appConfig.theme.colors.neutrals['900'],
          borderRadius: '5px',
          boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
          display: 'flex', flexDirection: 'column', flex: 1,
          height: '100%',maxHeight: '95vh',
          maxWidth: '95%' , padding: '32px',
        }}
      >
        <Header />
        <Box as="main" 
          styleSheet={{
            backgroundColor: appConfig.theme.colors.neutrals[900],
            color: appConfig.theme.colors.neutrals['050'],
            borderRadius: '5px', padding: '16px',
            display: 'flex', flex: 1, flexDirection: 'column',
            height: '80%', width: '100%',
            position: 'relative', alignItems: 'left', lineHeight: '24px',
          }}>
          <MessageBox/>
        </Box> 
      </Box>
    </Box>
  );
}