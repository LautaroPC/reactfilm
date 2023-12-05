import React from 'react'
import { useAuth } from '../../auth/hooks/use_auth'
import AppButton from '../../../core/components/app_button/app_button'
import '../../home/views/home_view'
import '../../../core/components/app_button/button_primary.css'

const Header = ({ children }) => {
  const { isLoggedIn, logout } = useAuth()

  return (
    <div>
      {isLoggedIn ?
        <div style={{
          display: "flex",
          justifyIontent: "space-between",
          alignItems: "center",
        }}
        >
          {children}
          <AppButton style={{
            padding: "3px 10px",
            margin: "0 20px",
            
          }} class="button_primary" onClick={logout}
          >Cerrar sesion</AppButton>
        </div> : null}
    </div>
  )
}

export default Header