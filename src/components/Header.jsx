import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Box, Text, Button } from '@skynexui/components';
import appConfig from '../../config.json';
import ProfileBox from '../components/ProfileBox';
import useEscapeListen from '../hooks/useEscapeListen';
import useOnClickOutside from '../hooks/useOnClickOutside';
import { useRouter } from 'next/router';

export default function Header(props) {
  const  router = useRouter();
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  useEscapeListen(()=>setIsOpenProfile(false))
  useOnClickOutside('#profileBox','#toggleOpenProfile', ()=>setIsOpenProfile(false));
  const { signOut } = useAuth();

  const handleSignOut = () => {
    signOut().then(({error}) => {
      !error && router.push('/');
    })
  }

  return (
      <>
        <Box tag="header" 
          styleSheet={{ 
            width: '100%', maxHeight: '70px', padding: '20px',
            display: 'flex', alignItems: 'center', 
            justifyContent: 'space-between',
            backgroundColor: appConfig.theme.colors.neutrals[900] 
          }} 
        >
            <Text tag="h1" 
              style={{ margin: '10px 20px', fontSize: '24px',
                color: appConfig.theme.colors.primary[900],
            }}>Aluracord</Text>
            
            <Box
              styleSheet={{
               display: 'flex', alignItems: 'center', 
               flexDirection: 'row', justifyContent: 'space-between',
            }}>
              <Button 
                id="toggleOpenProfile"
                name="Ver perfil"
                iconName="FaUser" 
                onClick={()=>setIsOpenProfile(!isOpenProfile)}
                styleSheet={{
                  display: {xs:'flex', md:'none'}, marginRight: '8px',
                  filter: isOpenProfile ? 'grayscale(0)' : 'grayscale(1)',
                  hover: {
                    filter: 'grayscale(0)',
                  }
              }}/>

              <Button
                name="Sair"
                iconName='FaSignOutAlt'
                onClick={handleSignOut}
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: appConfig.theme.colors.primary[900],
                  mainColorLight: appConfig.theme.colors.primary[400],
                  mainColorStrong: appConfig.theme.colors.primary[600],
                }}      
              />
            </Box>
            { isOpenProfile && 
              <Box id="profileBox"
                styleSheet={{
                  position: 'fixed', 
                  zIndex: '2', left: '10%', top: '120px',
                  width: '80%', height: '70%', padding: '20px',
                  backgroundColor: appConfig.theme.colors.neutrals['800'],
                  color: appConfig.theme.colors.neutrals['000'],
                  border: `2px ridge ${appConfig.theme.colors.neutrals['200']}`,
                  borderRadius: '18px',
                  display: {sm: 'flex', md: 'none'},
                  flexDirection: 'column',
                  overflow: 'auto',
              }}>
                  <ProfileBox user={props.user}/>
              </Box>
            }
        </Box>
      </>
  );
}
