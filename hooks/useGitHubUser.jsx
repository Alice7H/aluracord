import { useState, useEffect } from 'react';

export default function useGitHubUser(username) {
  const [user, setUser] = useState([]);

  useEffect(()=> {  
    const getUser = async () => {
      try{
        if(username.length > 2){
          const url = `https://api.github.com/users/${username}`;
          const response = await fetch(url);
          const data = await response.json();
          data ? setUser(data) : setUser([]);
        }else {
          setUser([]);
        }
      }catch(err){
        alert(err);
      }
    }

    getUser();

    return () => { getUser();}

  },[username])

  return user;
}
