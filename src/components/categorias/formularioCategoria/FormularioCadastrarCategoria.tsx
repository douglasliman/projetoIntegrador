import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categoria";
import { cadastrar } from "../../../services/Service";

function FormularioCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  //const [foto, setFoto] = useState<string | null>(null); // Altera para string
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      // Agora você pode enviar os dados como JSON
      await cadastrar(
        `/categorias`,
        {
          nomeCategoria: categoria.nomeCategoria,
          descricaoCategoria: categoria.descricaoCategoria,
          fotoCategoria: categoria.fotoCategoria,
        },
        setCategoria,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      alert("Categoria cadastrada com sucesso");
      retornar();
    } catch (error: any) {
      if (error.toString().includes("403")) {
        alert("O token expirou, favor logar novamente");
        handleLogout();
      } else {
        alert("Erro ao cadastrar a Categoria");
      }
    }
  }

  function retornar() {
    navigate("/categorias");
  }

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [token]);

  // Função para lidar com a seleção de um novo link de foto
  //  function handleFotoChange(e: ChangeEvent<HTMLInputElement>) {
  //     setFoto(e.target.value); // Captura o valor do campo de entrada como uma string
  //  }

  return (
    <div
      className="container flex flex-col items-center justify-center mx-auto bg-fundo-cadastros bg-cover bg-center bg-no-repeat "
      style={{ minHeight: "80vh", minWidth: "100%" }}
    >
      <h1 className="text-4xl text-center my-8 mb-1 text-verde-escuro">
        Cadastre uma nova Categoria
      </h1>

      <form
        className="w-1/2 flex flex-col gap-4 bg-white bg-opacity-0 rounded-lg p-8"
        onSubmit={gerarNovaCategoria}
      >
        <div className="flex flex-col gap-2">
          <label  className=" text-verde-escuro font-semibold"  htmlFor="nomeCategoria">Nome da Categoria</label>
          <input
            type="text"
            placeholder="Nome da Categoria"
            name="nomeCategoria"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.nomeCategoria}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCategoria({ ...categoria, [e.target.name]: e.target.value })
            }
          />
          <label  className=" text-verde-escuro font-semibold"  htmlFor="descricaoCategoria">Descrição da Categoria</label>
          <input
            type="text"
            placeholder="Descrição da Categoria"
            name="descricaoCategoria"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.descricaoCategoria}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCategoria({ ...categoria, [e.target.name]: e.target.value })
            }
          />
          <label className=" text-verde-escuro font-semibold"  htmlFor="fotoCategoria">Link da Foto da Categoria</label>
          <input
            type="text"
            placeholder="Link da Foto"
            name="fotoCategoria"
            className="border-2 border-slate-700 rounded p-2"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCategoria({ ...categoria, [e.target.name]: e.target.value })
            }
          />
        </div>
        <button
          className="rounded text-slate-100 bg-verde-escuro hover:bg-verde-medio-hover text-white w-1/2 py-2 mx-auto block mt-5 transition-colors duration-300 ease-in-out hover:delay-300"
          type="submit"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default FormularioCategoria;
