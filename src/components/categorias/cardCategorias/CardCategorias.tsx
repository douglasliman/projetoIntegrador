//import React from "react";
import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";

interface CardCategoriasProps {
  categoria:Categoria
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function CardCategorias({categoria}:CardCategoriasProps) {
  return (
    <div className='border border-gray-600 text-slate-900 w-fit h-fit flex flex-col gap-20 rounded-lg overflow-hidden justify-center p-5'>
      <p className='p-2 text-3xl bg-white text-center h-1'>{categoria.nomeCategoria}</p>
      <p className='p-2 text-sm bg-white text-center h-1'>{categoria.descricaoCategoria}</p>
      <img className="w-42 h-52 object-cover m-2 rounded-lg" src={categoria.fotoCategoria} alt="" />
      <div className="flex justify-between mb-0 mx-2 my-0">
        <Link to= {`/editarCategoria/${categoria.id}`} className='"text-slate-900 bg-green-500 font-medium hover:bg-green-600 hover:text-white flex items-center justify-center px-5 py-2 rounded-lg'>
          <button>Editar</button>
        </Link>
        <Link to= {`/deletarCategoria/${categoria.id}`} className='text-white bg-red-600 font-medium hover:bg-red-500 flex items-center justify-center px-4 py-2 rounded-lg'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardCategorias
