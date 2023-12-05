import { useContext } from "react"
import { AuthContext } from "../../../features/auth/context/auth_context"

export const useAuth = ()=>{

  const {isLoggedIn, login, logout} = useContext(AuthContext)

  return {
    isLoggedIn,
    login,
    logout,
  };
}