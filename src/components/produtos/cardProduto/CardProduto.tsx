import React from "react";
import { Link } from "react-router-dom";
import Produto from "../../../models/Produto";
import placeholderImage from "../../../assets/placeholder-image.jpg";
import "./CardProduto.css";

interface CardProdutoProps {
  produto: Produto;
}

const CardProduto: React.FC<CardProdutoProps> = ({ produto }) => {
  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.src = placeholderImage;
  };

  const formatarData = (data: string) => {
    const dataObj = new Date(data);
    const dia = dataObj.getDate();
    const mes = dataObj.toLocaleString("default", { month: "long" });
    return `${dia} de ${mes}`;
  };

  return (
    <div className="border border-gray-600 text-slate-900 w-80  flex flex-col gap-2 rounded-lg overflow-hidden justify-between">
      <Link to={`/pageProduto/${produto.id}`}>
        <div className="flex items-center justify-center h-60">
          <img
            className=" w-42 h-52 object-cover"
            src={produto.fotoProduto}
            alt={produto.nomeProduto}
            onError={handleImageError}
          />
        </div>
      </Link>
      <button className="btn-buy p-2 rounded-lg text-white bg-green-500 hover:bg-green-700">
        Comprar
      </button>
      <div className="flex justify-between items-center px-5">
        <p className="text-xl font-semibold text-slate-900">
          <span>R$</span> {produto.preco}
        </p>
      </div>
      <div className="px-5 flex flex-col">
        <h4 className="name-produto font-semibold uppercase mb-2 overflow-hidden">
          <span className="inline-block max-w-full ">
            {produto.nomeProduto}
          </span>
        </h4>
        <p className="text-sm">
          <span className="font-semibold">Data de Validade:</span>{" "}
          {formatarData(produto.dataValidade)}
        </p>
      </div>

      <div className="flex justify-between p-1">
        <Link
          to={`/editarProduto/${produto.id}`}
          className="text-slate-900 bg-green-500 font-medium hover:bg-green-600 hover:text-white flex items-center justify-center px-5 py-2 rounded-lg"
        >
          Editar
        </Link>
        <Link
          to={`/deletarProduto/${produto.id}`}
          className="text-white bg-red-600 font-medium hover:bg-red-500 flex items-center justify-center px-4 py-2 rounded-lg"
        >
          Deletar
        </Link>
      </div>
    </div>
  );
};

export default CardProduto;
