import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import appConfig from '../../config.json';
import ProfileBox from '../../components/ProfileBox';
import MessageBox from '../../components/MessageBox';

export default function PaginaDoChat() {
  const router = useRouter();
  const [user, setUser] = useState([]);
  const { pid } = router.query;
  
  useEffect(()=> {  
    const getUser = async () => {
      try{
        const url = `https://api.github.com/users/${pid}`;
        const response = await fetch(url);
        const data = await response.json();
        if(data){ setUser(data); }
        else{ alert('Usuário não encontrado.'); }
      }catch(err){
        alert(err);
      }
    }

    getUser();

  },[pid])

  return(
    <>
      <main>
        <ProfileBox user={user}/>
        <MessageBox/>
      </main>
      <style jsx>
        {`
          main {
            background-color: ${appConfig.theme.colors.neutrals[900]};
            color: ${appConfig.theme.colors.neutrals['050']};
            display: flex;
            flex-direction: row;
            justify-content: top;
            align-items: left;
            line-height: 24px;
            width: 100%;
          }

          @media (max-width: 768px){
            main {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  );
}