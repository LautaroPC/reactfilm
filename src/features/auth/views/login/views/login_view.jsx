import React, { useState } from 'react'
import { useAuth } from '../../../hooks/use_auth';

import AppButton from '../../../../../core/components/app_button/app_button';
import Loading from '../../../../components/loading/Loading';
import '../../../../../css/components/login.css'
import '../../../../../core/components/app_button/button_primary.css'

const LoginView = () => {
  const { login } = useAuth()

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const { email, password } = Object.fromEntries(new FormData(e.target));
      if (!email || !password) throw new Error("Todos los campos son obligatorios");
      if (e.target.email.value !== "usuario@example" || e.target.password.value !== "contraseña")
        throw new Error("La credencial ingresada es incorrecta");
      await login(email, password);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="form-div">
      <div className="form-box">
        <h1> LOGIN </h1>
        <form onSubmit={handleSubmit}>
          <h4> Usuario </h4>
          <input type="email" name="email" />
          <h4> Contraseña </h4>
          <input type="password" name="password" />
          <br />
          <AppButton style={{
            padding: "5px 0",
            marginBottom: "10px",
            width: "100%"
          }} className="button_primary" type={"submit"} onClick={login}>Iniciar Sesion</AppButton>
          <p>{error}</p>
        </form>
        {isLoading ? <Loading></Loading> : null}
      </div>
    </div>
  )
}

export default LoginView
