import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
      
    <div className="flex flex-col justify-between h-screen font-light p-4 bg-fundo-login bg-cover bg-center bg-fixed" style={{ minHeight: "100vh", minWidth: "100%" }}>
    <div className='flex flex-col justify-center items-center w-3/5 mx-auto gap-3 bg-verde-claro-hover p-6 bg-opacity-50 rounded-lg shadow-lg'>
      <img src="src/assets/abacate404.png" alt="Avocado" className="justify-center mb-4" />
      <h2 className="text-2xl font-semibold text-white mb-4">Página não Encontrada</h2>
      <button
          type="submit"
          className="rounded bg-verde-escuro hover:bg-verde-medio-hover text-white w-1/2 py-2 mx-auto block mt-15 transition-colors duration-300 ease-in-out hover:delay-300 mb-4">
          <Link to="/home">Home</Link>
        </button>
    </div>
  </div>
  
      
  )
};

export default NotFound;