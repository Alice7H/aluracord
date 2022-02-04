import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabaseClient } from '../utils/supabase';

export const AuthContext = createContext();

export default function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userLoading, setUserLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [messageError, setMessageError] = useState('');
  const router = useRouter();

  const signUp = async (email, password) => {
    try{
      setLoading(true);
      const { user, error } = await supabaseClient.auth.signUp({ 
        email: email, 
        password: password 
      })
      error ? setMessageError(error.message) : setUser(user);
    } catch(error){ 
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const signInWithEmail = async (email, password) => {
    try{
      setLoading(true);
      const { user, error } = await supabaseClient.auth.signIn({
        email: email,
        password: password,
      });
      error ?  setMessageError(error.message) : setUser(user);      
    } catch(error){
       console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const signInWithProvider = async (provider) => {
    try {
      setLoading(true);
      const { error, user } = await supabaseClient.auth.signIn({
        provider: provider
      });
      error ?  setMessageError(error.message) : setUser(user);
    } catch (error) {
       console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const signOut = async () => await supabaseClient.auth.signOut();

  useEffect(() => {
    const user = supabaseClient.auth.user();
    if (user) {
      setUser(user);
      setUserLoading(false);
      setLoggedIn(true);
      router.push('/chat');
    } else {
      setUserLoading(false)
      router.push('/')
    }

    const { data } = supabaseClient.auth.onAuthStateChange((_event, session) => {
       console.log(_event);
      const user = session?.user || null
      setUserLoading(false)
      if (user) {
        setUser(user)
        setLoggedIn(true)
        router.push('/chat')
      } else {
        setUser(null)
        router.push('/')
      }
    })

    return () => {
      data.unsubscribe();
    }
  }, [])

  return (
    <AuthContext.Provider
    value={{
      signUp,
      signInWithProvider,
      signInWithEmail,
      signOut,
      user,
      loading,    
      loggedIn,  
      userLoading,
      messageError
    }}>
      {props.children}
    </AuthContext.Provider>
  );
}
