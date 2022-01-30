import appConfig from '../../config.json';
import { Box, Image } from '@skynexui/components';

export default function ProfileBox(props) {
  const user = props.user;
  return (
    <>
      <figure>
        <Image     
          src={user?.avatar_url || appConfig.backgrounds[0]}
          styleSheet={{ 
            borderRadius: '50%',  
            width: '70px', 
            alignSelf: 'center',
            margin: '10px auto',
          }}
        />
        <figcaption>{user?.name || 'Indefinido'}</figcaption>
      </figure>
      <hr />
      <Box>
        <p>Seguidores: { user?.followers || 0 }</p>
        <p>Seguindo: { user?.following || 0 }</p>
        <p>Repositórios públicos: {user?.public_repos || 0 }</p>
      </Box>
    
      <style jsx>
        {`
          hr { margin: 10px 20px; }
          p { margin: 0px 5px; line-height: 24px }
         
          figure {
            text-align: center;
            align-items: center;
          }   
        `}
      </style>
    </>
  );
}
