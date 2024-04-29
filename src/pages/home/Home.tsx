import "./Home.css";
import Destaques from "../../components/homeComponents/destaques/Destaques";
import { useEffect, useState } from "react";
import { buscar } from "../../services/Service";
import CardProduto from "../../components/produtos/cardProduto/CardProduto";
import { Link } from "react-router-dom";
import Produto from "../../models/Produto";
function Home() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Atribua o resultado de buscar a uma variável para garantir o tipo correto
        const response = await buscar("/produtos", setProdutos, {});
        // Verifique se response é um array antes de aplicar filter
        if (Array.isArray(response)) {
          const produtosLimitados = response.filter((_, index) => index < 8);
          setProdutos(produtosLimitados);
        }
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div>
        <Destaques></Destaques>

        <div className="produtos-container">
          <div className="acessar-produtos w-">
            <h1 className=" text-4xl font-semibold text-zinc-800">Produtos</h1>
            <Link to="/produtos">
              <p className="text-2xl font-normal text-gray-900 hover:text-green-500">
                Ver mais
              </p>
            </Link>
          </div>
          {/* Exibe os cards de produto */}
          <div className="flex gap-3 flex-wrap py-8 justify-center items-center produtos">
            {(produtos as { id: string }[]).slice(0, 8).map((produto) => (
              <CardProduto key={produto.id} produto={produto} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
