import { useState, useEffect } from 'react';

export default function useGitHubUser(username) {
  const [user, setUser] = useState([]);

  useEffect(()=> {  
    let controller = new AbortController();
    const getGithubUser = async () => {
      try{
        if(username.length > 2){
          const url = `https://api.github.com/users/${username}`;
          const response = await fetch(url, {
            signal: controller.signal
          });        
          setUser(await response.json());
          controller = null;
        }else {
          setUser([]);
        }
      }catch(err){
        console.log(err);
      }
    };
    getGithubUser();
    return () => controller?.abort();
  },[username])

  return user;
}
