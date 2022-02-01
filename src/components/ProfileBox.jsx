import appConfig from '../../config.json';
import { Box, Image } from '@skynexui/components';
import FollowList from '../components/FollowList';

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
        <figcaption>{user?.name || ' Indefinido'}</figcaption>
      </figure>
      <p>Github: <a href={user?.html_url} alt="Github do usuário" target="_blank">{ user?.html_url || ' Indefinido' } </a></p>
      <p>Seguidores: { user?.followers || 0 }</p>
      <p>Seguindo: { user?.following || 0 }</p>
      <p>Repositórios públicos: {user?.public_repos || 0 }</p>
      <hr />
      <Box styleSheet={{maxHeight: '100%', maxWidth: '99%', overflow: 'auto'}}>
        <Box tag="div" name="Listas" 
         styleSheet={{ marginTop: '10px'}}
        >
          <Box aria-label="Lista de seguidores">
            <h3>Seguidores:</h3>               
            <FollowList user={user?.login} url={`https://api.github.com/users/${user?.login}/followers`}/>          
          </Box>
          <Box aria-label="Lista de quem sigo">
            <h3>Seguindo:</h3>
            <FollowList user={user?.login} url={`https://api.github.com/users/${user?.login}/following`}/>          
          </Box>
        </Box>
      </Box>
    
      <style jsx>
        {`
          hr { margin: 10px 20px; }
          p { 
            margin: 0px 10px; 
            line-height: 24px;  
            word-wrap: break-word;
          }
          a {
            text-decoration: none;
            color: ${appConfig.theme.colors.neutrals['000']};
          }
          figure {
            text-align: center;
            align-items: center;
          }
          h3 { font-size: 14px; }   
        `}
      </style>
    </>
  );
}
