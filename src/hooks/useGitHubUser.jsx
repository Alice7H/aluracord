import { useState, useEffect } from 'react';

export default function useGitHubUser(username) {
  const [user, setUser] = useState([]);

  useEffect(()=> {  
    const getGithubUser = async () => {
      try{
        const url = await `https://api.github.com/users/${username}`;
        const response = await fetch(url);        
        setUser(await response.json());
      }catch(err){
        console.log(err);
      }
    };
    getGithubUser();
  },[username])

  return user;
}
