import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import logo from "../../assets/desconto-expresso-logo.png";
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("Usuário deslogado com sucesso");
    navigate("/login");
  }

  return (
    <>
      <div className="w-full bg-verde-claro-hover flex justify-center py-4">
        <div className="container flex justify-between text-lg items-center">
          <div className="flex justify-center items-center text-2xl text-verde-escuro italic font-black uppercase">
            <img src={logo} className="w-12"></img>
            <h1>Desconto Expresso</h1>
          </div>

          <div className="flex gap-4 font-bold">
            <Link to="/home" className="hover:text-verde-escuro transition-colors duration-400 ease-in-out transition-all duration-500">
              Home
            </Link>
            <div className="relative dropdown">
              <button className="hover:text-verde-escuro transition-colors duration-400 ease-in-out transition-all duration-500">
                Categorias
              </button>
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 dropdown-content">
                <div className="py-1 transition-colors duration-800 ease-in-out" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link to="/categorias" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Todas as Categorias</Link>
                  <Link to="/cadastrarCategoria" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Cadastrar Categorias</Link>
                </div>
              </div>
            </div>
            <div className="relative dropdown">
              <button className="hover:text-verde-escuro transition-colors duration-400 ease-in-out transition-all duration-500">
                Produtos
              </button>
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 dropdown-content">
                <div className="py-1 transition-colors duration-800 ease-in-out" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link to="/produtos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Todos os Produtos</Link>
                  <Link to="/cadastrarProduto" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Cadastrar Produtos</Link>
                </div>
              </div>
            </div>
            <Link to="/sobreNos" className="hover:text-verde-escuro transition-colors duration-400 ease-in-out transition-all duration-500">
              Sobre Nós
            </Link>
            <div className="relative dropdown">
              <button>
              <img src={usuario.fotoUsuario} alt="Foto do usuário" className="rounded-full w-8 h-8" />
              </button>
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 dropdown-content">
                <div className="py-1 transition-colors duration-800 ease-in-out" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <Link to="/perfil" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Perfil</Link>
                  <Link to="/login" onClick={logout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Login</Link>
                  <Link to="/home" onClick={logout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Sair</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
