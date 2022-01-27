import { Box, Text, Button } from '@skynexui/components';
import appConfig from '../config.json';

export default function Header() {
  return (
      <>
        <Box tag="header" 
          styleSheet={{ 
            width: '100%', maxHeight: '70px', padding: '20px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            backgroundColor: appConfig.theme.colors.neutrals[900] 
          }} 
        >
            <Text tag="h1" 
              style={{
                alignSelf: 'center', margin: '10px 20px', fontSize: '24px',
                color: appConfig.theme.colors.primary[900],
            }}>Aluracord</Text>

            <Button
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[900],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
              label='Sair'
              iconName='FaSignOutAlt'
              href="/"
            />
        </Box>
      </>
  );
}
