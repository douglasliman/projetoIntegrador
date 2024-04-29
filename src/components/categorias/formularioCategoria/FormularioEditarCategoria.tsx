import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categoria";
import { atualizar, buscar } from "../../../services/Service";

function FormularioEditarCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [foto, setFoto] = useState<string | null>(null); // Altera para string
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const categoriaId = parseInt(id ?? "");
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: number) {
    const eString = id.toString();
    await buscar(`/categorias/${eString}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (categoriaId !== undefined) {
      buscarPorId(categoriaId);
    }
  }, [categoriaId]);

  async function editarCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await atualizar(`/categorias`, categoria, setCategoria, {
        headers: {
          Authorization: token,
        },
      });
      alert("Categoria atualizada com sucesso");
      retornar();
    } catch (error: any) {
      if (error.toString().includes("403")) {
        alert("O token expirou, favor logar novamente");
        handleLogout();
      } else {
        alert("Erro ao atualizar a Categoria");
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

  return (
    <div
      className="container flex flex-col items-center justify-center mx-auto bg-fundo-cadastros bg-cover bg-center bg-no-repeat "
      style={{ minHeight: "80vh", minWidth: "100%" }}
    >
      <h1 className="text-4xl text-center my-8 mb-1 text-verde-escuro">
        Editar Categoria
      </h1>

      <form
        className="w-1/2 flex flex-col gap-4 bg-white bg-opacity-0 rounded-lg p-8"
        onSubmit={editarCategoria}
      >
        <div className="  flex flex-col gap-2">
          <label
            className=" text-verde-escuro font-semibold"
            htmlFor="nomeCategoria"
          >
            Nome da Categoria
          </label>
          <input
            type="text"
            placeholder="Nome"
            name="nomeCategoria"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.nomeCategoria}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCategoria({ ...categoria, [e.target.name]: e.target.value })
            }
          />
          <label
            className=" text-verde-escuro font-semibold"
            htmlFor="descricaoCategoria"
          >
            Descrição da Categoria
          </label>
          <input
            type="text"
            placeholder="Descrição"
            name="descricaoCategoria"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.descricaoCategoria}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCategoria({ ...categoria, [e.target.name]: e.target.value })
            }
          />
          <label
            className=" text-verde-escuro font-semibold"
            htmlFor="fotoCategoria"
          >
            Novo Link da Foto da Categoria
          </label>
          <input
            type="text" // Altera para text
            placeholder="Link da Foto"
            name="fotoCategoria"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.fotoCategoria}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCategoria({ ...categoria, [e.target.name]: e.target.value })
            }
          />
        </div>
        <button
          className="rounded text-slate-100 bg-verde-escuro hover:bg-verde-medio-hover text-white w-1/2 py-2 mx-auto block mt-5 transition-colors duration-300 ease-in-out hover:delay-300"
          type="submit"
        >
          Editar
        </button>
      </form>
    </div>
  );
}

export default FormularioEditarCategoria;
