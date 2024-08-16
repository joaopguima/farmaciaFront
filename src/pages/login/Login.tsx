import { useState, useContext, useEffect, ChangeEvent } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import UsuarioLogin from "../../models/UsuarioLogin";
import './Login.css'

function Login() {
    let navigate = useNavigate();
  
    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
      {} as UsuarioLogin
    );
  
    const { usuario, handleLogin } = useContext(AuthContext);
  
    const {isLoading} = useContext(AuthContext) 
  
    useEffect(() => {
      if (usuario.token == "") {
          navigate('/home')
      }
  }, [usuario])
  
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
        ...usuarioLogin,
        [e.target.name]: e.target.value
    })
  }
  
  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    handleLogin(usuarioLogin)
  }
  
    return (
      <>
        <div className="flex justify-center place-items-center font-bold h-[80vh]">
          <form className="flex justify-center items-center flex-col w-auto py-8 px-14 gap-4 bg-slate-50 border-emerald-500 border-2 rounded-2xl" onSubmit={login}>
            <h2 className="text-slate-900 text-5xl ">Entrar</h2>
            <div className="flex flex-col w-auto">
              <label htmlFor="usuario">Usuário</label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Usuario"
                className="border-2 border-slate-700 rounded p-2"
                value={usuarioLogin.usuario} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-auto">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                className="border-2 border-slate-700 rounded p-2"
                value={usuarioLogin.senha} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <button  type='submit' className="rounded bg-emerald-500 custom-hover text-white w-1/2 py-2 flex justify-center">
             {isLoading ? <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            /> :
              <span>Entrar</span>}
            </button>
  
            <hr className="border-slate-800 w-1/2" />
  
            <p>
              Ainda não tem uma conta?{' '}
              <Link to="/cadastro" className="text-indigo-80 hover:underline">
                Cadastre-se
              </Link>
            </p>
          </form>
          <div className="fundoLogin hidden lg:block"></div>
        </div>
      </>
    );
  }
  
  export default Login;