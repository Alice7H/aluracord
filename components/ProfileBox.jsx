import appConfig from '../config.json';
import { Image } from '@skynexui/components';

export default function ProfileBox(props) {
  const user = props.user;
  return (
    <>
    <section>
      <h1>Aluracord</h1>
      <Image     
        src={`${user?.avatar_url}`}
        styleSheet={{ 
          borderRadius: '50%', marginTop: '20px', width: '45px', alignSelf: 'center',
        }}
      />
      <h2>{ user?.name }</h2>
      <hr />
      <p>Seguidores: { user?.followers }</p>
      <p>Seguindo: { user?.following }</p>
    </section>
    <style jsx>
        {`
          h1,h2,hr { margin: 10px 20px; }
          p { margin: 0px 20px;}
          h1 { 
            font-size: 24px;
            color: ${appConfig.theme.colors.primary[800]};
            align-self: center; 
          }
          h2 { 
            font-size: 18px;
            align-self: center; 
          }
          section { 
            background-color: ${appConfig.theme.colors.neutrals[900]};
            color: ${appConfig.theme.colors.neutrals['050']};
            display: flex;
            flex-direction: column;
            align-items: left;
            width:20%;
          }

          @media(max-width: 768px) {
            section { 
              width: 100%; 
              margin-bottom: 20px 
            }
          }
        `}
      </style>
    </>
  );
}
