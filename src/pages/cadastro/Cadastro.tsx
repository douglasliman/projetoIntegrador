import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { Link, useNavigate } from 'react-router-dom'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../services/Service'
import './Cadastro.css'
import axios from 'axios'

function Cadastro() {

  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [confirmarSenhaUsuario, setConfirmarSenhaUsuario] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nomeUsuario: '',
    sobrenomeUsuario: '',
    cadastroUnico: 0,
    dataNascimento: '',
    telefone: 0,
    cidade: '',
    bairro: '',
    cep: '',
    rua: '',
    numeroCasa: '',
    emailUsuario: '',
    fotoUsuario: '',
    senhaUsuario: ''
  })

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nomeUsuario: '',
    sobrenomeUsuario: '',
    cadastroUnico: 0,
    dataNascimento: '',
    telefone: 0,
    cidade: '',
    bairro: '',
    cep: '',
    rua: '',
    numeroCasa: '',
    emailUsuario: '',
    fotoUsuario: '',
    senhaUsuario: ''
  })

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back()
    }
  }, [usuarioResposta])

  function back() {
    navigate('/login')
  }

  function handleConfirmarSenhaUsuario(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenhaUsuario(e.target.value)
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmarSenhaUsuario === usuario.senhaUsuario && usuario.senhaUsuario.length >= 8) {
      setIsLoading(true)
      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)
        alert('Usuário cadastrado com sucesso')

      } catch (error) {
        alert('Erro ao cadastrar o Usuário')
      }

    } else {
      alert('Dados inconsistentes. Verifique as informações de cadastro.')
      setUsuario({
        ...usuario,
        senhaUsuario: "", 
      })
      setConfirmarSenhaUsuario("") 
    }

    setIsLoading(false)

  }

  const buscarCEP = async (cep: string) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;
      setUsuario(prevState => ({
        ...prevState,
        rua: data.logradouro,
        bairro: data.bairro,
        cidade: data.localidade,
      }));
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
    }
  };

  const handleCEPChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUsuario(prevState => ({
      ...prevState,
      cep: value,
    }));

    if (value.length === 8) {
      buscarCEP(value);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-bet-h-screen font-ligth p-4 bg-fundo-login bg-cover bg-center bg-fixed" style={{ minHeight: "100vh", minWidth: "100%" }}>
        <div className="flex justify-center items-center flex-grow">
          <div className="fundoCadastro hidden lg:block "></div>
          <form className='flex flex-col justify-center items-center w-7/12 gap-3 bg-verde-claro-hover p-6 bg-opacity-50 rounded-lg shadow-lg' onSubmit={cadastrarNovoUsuario}>
            <h2 className='text-verde-escuro text-5xl'>Cadastrar</h2>
            <div className="flex flex-col w-full">
              <label className='text-verde-escuro' htmlFor="nomeUsuario">Nome</label>
              <input
                type="text"
                id="nomeUsuario"
                name="nomeUsuario"
                placeholder="Nome"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.nomeUsuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>

            <div className="flex flex-col w-full">
              <label className='text-verde-escuro' htmlFor="sobrenomeUsuario">Sobrenome</label>
              <input
                type="text"
                id="sobrenomeUsuario"
                name="sobrenomeUsuario"
                placeholder="Sobrenome"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.sobrenomeUsuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>

            <div className="flex flex-col w-full">
              <label className='text-verde-escuro' htmlFor="cadastroUnico">Cadastro Único</label>
              <input
                type="number"
                id="cadastroUnico"
                name="cadastroUnico"
                placeholder="Cadastro Único"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.cadastroUnico}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>

            <div className="flex flex-col w-full">
              <label className='text-verde-escuro' htmlFor="dataNascimento">Data de Nascimento</label>
              <input
                type="text"
                id="dataNascimento"
                name="dataNascimento"
                placeholder="Data de Nascimento"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.dataNascimento}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>

            <div className="flex flex-col w-full">
              <label className='text-verde-escuro' htmlFor="telefone">Telefone</label>
              <input
                type="number"
                id="telefone"
                name="telefone"
                placeholder="Telefone"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.telefone}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>

            <div className="flex flex-col w-full">
              <label className='text-verde-escuro' htmlFor="cep">CEP</label>
              <input
                type="text"
                id="cep"
                name="cep"
                placeholder="CEP"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.cep}
                onChange={handleCEPChange}
              />
            </div>

            <div className="flex flex-col w-full">
              <label className='text-verde-escuro' htmlFor="cidade">Cidade</label>
              <input
                type="text"
                id="cidade"
                name="cidade"
                placeholder="Cidade"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.cidade}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>

            <div className="flex flex-col w-full">
              <label className='text-verde-escuro' htmlFor="bairro">Bairro</label>
              <input
                type="text"
                id="bairro"
                name="bairro"
                placeholder="Bairro"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.bairro}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>

            <div className="flex flex-col w-full">
              <label className='text-verde-escuro' htmlFor="rua">Rua</label>
              <input
                type="text"
                id="rua"
                name="rua"
                placeholder="Rua"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.rua}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>

            <div className="flex flex-col w-full">
              <label className='text-verde-escuro' htmlFor="numeroCasa">Número Casa</label>
              <input
                type="text"
                id="numeroCasa"
                name="numeroCasa"
                placeholder="Número Casa"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.numeroCasa}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>

            <div className="flex flex-col w-full">
              <label className='text-verde-escuro' htmlFor="emailUsuario">Email</label>
              <input
                type="text"
                id="emailUsuario"
                name="emailUsuario"
                placeholder="Email"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.emailUsuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className='text-verde-escuro' htmlFor="fotoUsuario">Foto</label>
              <input
                type="text"
                id="fotoUsuario"
                name="fotoUsuario"
                placeholder="Foto"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.fotoUsuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className='text-verde-escuro' htmlFor="senhaUsuario">Senha</label>
              <input
                type="password"
                id="senhaUsuario"
                name="senhaUsuario"
                placeholder="Senha"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.senhaUsuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label className='text-verde-escuro' htmlFor="confirmarSenhaUsuario">Confirmar Senha</label>
              <input
                type="password"
                id="confirmarSenhaUsuario"
                name="senhaUsuario" // Atualizado para corresponder ao estado do React
                placeholder="Confirmar Senha"
                className="border-2 border-slate-700 rounded p-2"
                value={confirmarSenhaUsuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenhaUsuario(e)}
              />
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-8">
              
              <button className='rounded bg-verde-escuro w-1/2 py-2 hover:bg-verde-medio-hover text-white transition-colors duration-300 ease-in-out hover:delay-300' type='submit'>
                {isLoading ? <RotatingLines
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="24"
                  visible={true}
                /> :
                  <span>Cadastrar</span>
                }
              </button>
              <Link to="/login" className="text-red-700  duration-400 ease-in-out transition-all duration-500 hover:underline">
            Cancelar
              </Link>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}

export default Cadastro