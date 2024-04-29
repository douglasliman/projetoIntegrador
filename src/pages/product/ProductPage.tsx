import  { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { buscarPorId } from "../../services/Service";
import Produto from "../../models/Produto";
import { AuthContext } from "../../contexts/AuthContext";

const ProdutoPage = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState(null as Produto | null);
  const [loading, setLoading] = useState(true);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        if (id) {
          await buscarPorId("/produtos", id, setProduto, {
            headers: {
              Authorization: token,
            },
          });
        } else {
          console.error("ID do produto não fornecido.");
        }
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
        handleLogout();
      } finally {
        setLoading(false);
      }
    };

    fetchProduto();
  }, [id, token, handleLogout]);

  if (loading) return <ScaleLoader />;

  if (!produto) return <div>Produto não encontrado.</div>;
  const handleVoltar = () => {
    history.back();
  };
  return (
    <div className="container mx-auto my-5">
      <div className="flex flex-col md:flex-row items-center gap-5">
        {produto && produto.fotoProduto && (
          <img
            className="w-full md:w-1/3 h-auto"
            src={produto.fotoProduto}
            alt={produto.nomeProduto}
          />
        )}
        <div className="flex flex-col w-full md:w-2/3">
          <h1 className="text-3xl font-semibold">{produto.nomeProduto}</h1>
          <p className="text-lg mt-2">{produto.descricaoProduto}</p>
          <p className="text-lg mt-2">
            <span className="font-semibold">Preço:</span> R$
            {produto.preco.toFixed(2)}
          </p>
          <p className="text-lg mt-2">
            <span className="font-semibold">Data de Validade:</span>{" "}
            {produto.dataValidade}
          </p>
          <p className="text-lg mt-2">
            <span className="font-semibold">Categoria:</span>{" "}
            {produto.categoria?.nomeCategoria || "Não especificada"}
          </p>
          <button
            className="btn-buy mt-4 p-2 rounded-lg text-white bg-indigo-600 hover:bg-indigo-800"
            onClick={handleVoltar}
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProdutoPage;
