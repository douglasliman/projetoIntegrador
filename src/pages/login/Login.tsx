import { ChangeEvent, useContext, useEffect, useState } from "react";
import "./Login.css";

import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import UsuarioLogin from "../../models/UsuarioLogin";
import { RotatingLines } from "react-loader-spinner";

function Login() {
  const navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);

  const { isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <div
      className="flex justify-center items-center h-screen bg-[url'./src/assets/fundologin.png')] bg-cover bg-center bg-fixed"
      style={{ minHeight: "100vh", minWidth: "100%" }}
    >
      <form
        className="bg-verde-claro-hover p-6 bg-opacity-50 rounded-lg shadow-lg w-1/2 gap-4"
        onSubmit={login}
      >
        <h2 className="text-verde-escuro text-5xl text-center ">Entrar</h2>
        <div className="flex flex-col w-full">
          <label className="text-verde-escuro" htmlFor="emailUsuario">
            Usuário
          </label>
          <input
            type="text"
            id="emailUsuario"
            name="emailUsuario"
            placeholder="Usuario"
            className="border-2 border-slate-700 rounded p-2 mt-2"
            value={usuarioLogin.emailUsuario}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col w-full">
          <label
            className="text-verde-escuro"
            htmlFor="senhaUsuario text-verde-escuro"
          >
            Senha
          </label>
          <input
            type="password"
            id="senhaUsuario"
            name="senhaUsuario"
            placeholder="Senha"
            className="border-2 border-slate-700 rounded p-2 mt-2"
            value={usuarioLogin.senhaUsuario}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          type="submit"
          className="rounded  bg-verde-escuro hover:bg-verde-medio-hover text-white w-1/2 py-2 mx-auto block mt-4 transition-colors duration-300 ease-in-out hover:delay-300 mb-4"
        >
          {isLoading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            />
          ) : (
            <span>Entrar</span>
          )}
        </button>
        <hr className="border-slate-800 w-full mt-4" />
        <p className="mt-4">
          Ainda não tem uma conta?{" "}
          <Link
            to="/cadastro"
            className="text-verde-escuro  duration-400 ease-in-out transition-all duration-500 hover:underline"
          >
            Cadastre-se
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
