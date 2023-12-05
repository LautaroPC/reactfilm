import { useEffect, useState } from "react";
import { AuthContext } from "../context/auth_context"
import {AppStorage} from "../../../core/base/app_storage";


export const AUTJ_KEY = "isLoggedIn"

export const AuthProvider = ({ children, fallback }) => {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [isLoading, setIsloading] = useState(true);
  
  const saveLoginState = async (state) => AppStorage.save(AUTJ_KEY, state);
  const getLoginState = async () => AppStorage.get(AUTJ_KEY);
  const removeLoginState = async () => AppStorage.remove(AUTJ_KEY);

  useEffect(() => {

    const initAuth = async () => {
      try {
        const loginState = await getLoginState();
        if (!loginState) return;
        setIsloggedIn(loginState);
      } catch (error) {
        console.log(error)
      }finally{
        setIsloading(false);
      }
    };

    initAuth();
  }, [])

  const login = async (email, password) => {

    if (email!=="usuario@example" || password!=="contraseña") return ;
    setIsloggedIn(true);
    saveLoginState(true);
  }
  
  const logout = async () => {
    
    setIsloggedIn(false);
    removeLoginState();
  };

  if (fallback && isLoading) return fallback;

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>)
};

