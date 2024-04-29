import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Produto from "../../../models/Produto";
import Categoria from "../../../models/Categoria";
import { buscar, atualizar } from "../../../services/Service";

function FormularioEditarProduto() {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nomeCategoria: "",
    descricaoCategoria: "",
    fotoCategoria: "", // Add the missing property 'fotoCategoria'
  });
  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nomeProduto: "",
    descricaoProduto: "",
    estoque: 0,
    preco: 0,
    dataValidade: "",
    fotoProduto: "",
    categoria: null,
    usuario: null,
  });

  async function buscarProdutoPorId(id: string) {
    await buscar(`/produtos/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategoriaPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategorias() {
    await buscar("/categorias", setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    buscarCategorias();
    if (id !== undefined) {
      buscarProdutoPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
      categoria: categoria,
      usuario: usuario,
    });
  }

  async function editarProduto(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await atualizar(`/produtos`, produto, setProduto, {
        headers: {
          Authorization: token,
        },
      });
      alert("Produto atualizado com sucesso");
      navigate("/produtos");
    } catch (error: any) {
      if (error.toString().includes("403")) {
        alert("O token expirou, favor logar novamente");
        handleLogout();
      } else {
        alert("Erro ao atualizar o Produto");
      }
    }
  }

  return (
    <div
      className="container flex flex-col items-center justify-center mx-auto bg-fundo-cadastros2 bg-cover bg-center bg-fixed"
      style={{ minHeight: "100vh", minWidth: "100%" }}
    >
      <h1 className="text-4xl text-center my-8 mb-1 text-verde-escuro">Editar Produto</h1>
      <form onSubmit={editarProduto} className="flex flex-col w-1/2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-verde-escuro font-semibold" htmlFor="nomeProduto">Nome do Produto</label>
          <input
            value={produto.nomeProduto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Nome do Produto"
            name="nomeProduto"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-verde-escuro font-semibold" htmlFor="descricaoProduto">Descrição do Produto</label>
          <input
            value={produto.descricaoProduto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Descrição do Produto"
            name="descricaoProduto"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-verde-escuro font-semibold" htmlFor="estoque">Estoque do Produto</label>
          <input
            value={produto.estoque}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="number"
            placeholder="Estoque Disponível do Produto"
            name="estoque"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-verde-escuro font-semibold" htmlFor="preco">Preço do Produto</label>
          <input
            value={produto.preco}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="number"
            placeholder="Preço do Produto"
            name="preco"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-verde-escuro font-semibold" htmlFor="dataValidade">Data de Validade do Produto</label>
          <input
            value={produto.dataValidade}
            type="text"
            placeholder="Data de Validade do Produto"
            name="dataValidade"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-verde-escuro font-semibold" htmlFor="fotoProduto">Foto do Produto</label>
          <input
            value={produto.fotoProduto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Foto do Produto"
            name="fotoProduto"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-verde-escuro font-semibold">Categoria do Produto</p>
          <select
            name="categoria"
            id="categoria"
            className="border p-2 border-slate-800 rounded h-10"
            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>
              Selecione uma Categoria
            </option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nomeCategoria}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="rounded text-slate-100 bg-verde-escuro hover:bg-verde-medio-hover text-white w-1/2 py-2 mx-auto block mt-15 transition-colors duration-300 ease-in-out hover:delay-300 mb-4"        >
          Editar
        </button>
      </form>
    </div>
  );
}

export default FormularioEditarProduto;
