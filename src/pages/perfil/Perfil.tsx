import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import capaLogin from '../../assets/capa-login.jpg';

function Perfil() {
  let navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            alert('Você precisa estar logado')
            navigate("/login")
        }
    }, [usuario.token])
    
  return (
    <div className='container mx-auto mt-4 rounded-2xl overflow-hidden'>
      <img className='w-full h-72 object-cover border-b-8 border-white' src={capaLogin} alt="Capa do Perfil" />
      <img src={usuario.fotoUsuario} alt={`Foto de perfil de ${usuario.nomeUsuario}`} className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10' />
      <div className="relative mt-[-6rem] h-72 flex flex-col font-bold bg-verde-escuro text-white text-2xl items-center justify-center">
        <p>Nome: {usuario.nomeUsuario} </p>
        <p>Email: {usuario.emailUsuario}</p>
      </div>
    </div>
  )
}

export default Perfil