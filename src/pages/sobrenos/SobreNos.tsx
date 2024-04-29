// import React from 'react';
import './SobreNos.css';
import nossaMissao from '../../assets/nossamissao.png';
import sobreNos from '../../assets/sobrenos.png';


export default function SobreNos() {
    return (
        <>
            
            <div className='flex flex-wrap justify-center items-center gap-10 mt-10 space-x-2'>
            <div className="sobre-nos">
                    <img src={sobreNos} alt="Sobre Nós" className="w-96" />
                </div>
                <div className='w-96'>
                    <h1 className='font-bold text-verde-escuro text-2xl mb-3'>Nossa Missão</h1>
                    <p className='text-base text-verde-escuro'>
                        Em nosso marketplace, cada transação vai além de uma simples compra. É um ato de solidariedade que nutre não apenas o corpo, mas também o espírito daqueles que recebem nossa ajuda.
                        Estamos comprometidos em construir pontes entre quem tem recursos e quem precisa de apoio, promovendo uma conexão humana genuína através da partilha de alimentos.
                        Através da nossa plataforma, não apenas proporcionamos acesso a alimentos de qualidade, mas também promovemos o orgulho e a dignidade de cada pessoa, reconhecendo sua necessidade e valorizando sua autonomia.
                    </p>
                </div>
                
                
            </div>
            <div className='flex flex-wrap justify-center items-center gap-10 mt-10 space-x-2'> 
            <div className='w-96'>
                    <h1 className='font-bold text-verde-escuro text-2xl mb-3'>Sobre Nós</h1>
                    <p className='text-base text-verde-escuro'>
                        Compaixão e solidariedade guiam nossa missão no mercado online que estamos construindo, 
                        destinado a fornecer alimentos essenciais para aqueles que enfrentam dificuldades econômicas.
                        Nossa visão é simples: garantir que todos tenham acesso a alimentos nutritivos e de qualidade, 
                        não importa sua condição financeira.
                        Trabalhamos lado a lado com uma ampla rede de estabelecimentos e produtores locais, 
                        unindo esforços para oferecer uma variedade diversificada de opções saudáveis e frescas.
                        Acreditamos firmemente que o direito à alimentação adequada é universal, 
                        e estamos empenhados em tornar essa crença uma realidade palpável para comunidades
                        em necessidade.
                    </p>
                </div>
            
                <div className="nossa-missao">
                    <img src={nossaMissao} alt="Nossa Missão" className="w-96" /> 
                </div>
            </div> 

            <div className='flex flex-wrap justify-center items-center gap-10 mt-10 bg-azul-sobre-nos text-white p-6 mx-64 mb-40'>
                <h1>ODS 1 DA ONU - ERRADICAÇÃO DA POBREZA EXTREMA</h1>
                <p>
                    Na ONU, a Erradicação da Pobreza é o primeiro passo para um mundo melhor.
                    É sobre garantir que todas as pessoas, independentemente de sua condição financeira,
                    tenham acesso a alimentos nutritivos e de qualidade. É sobre estender uma mão 
                    solidária àqueles que enfrentam dificuldades econômicas. No nosso e-commerce,
                    estamos comprometidos com esse objetivo. Ao trabalharmos em parceria com 
                    estabelecimentos locais e produtores, não só oferecemos uma variedade de 
                    opções saudáveis, mas também contribuímos para a dignidade e o bem-estar de cada pessoa.
                    Juntos, estamos construindo um futuro onde ninguém seja deixado para trás.
                </p>
            </div>

            <p className='text-verde-escuro flex flex-wrap justify-center items-center text-2xl'>Colaboradores</p>
            <div className="flex justify-center items-center mx-4 my-4">
                
                <div className="mx-4 hover:opacity-75 transition duration-300">
                    <img src="src/assets/caio.png" alt="Caio Cajueiro" className="w-20" />
                    <h2 className='text-verde-escuro text-center text-sm'>Caio</h2>
                    <h2 className='text-verde-escuro text-center text-sm'>Cajueiro</h2>
                </div>
                
                <div className="mx-4 hover:opacity-75 transition duration-300">
                    <img src="src/assets/doug.png" alt="Douglas Lima" className="w-20" />
                    <h2 className='text-verde-escuro text-center text-sm'>Douglas</h2>
                    <h2 className='text-verde-escuro text-center text-sm'>Queiroz</h2>
                </div>
                
                <div className="mx-4 hover:opacity-75 transition duration-300">
                    <img src="src/assets/sabrina.png" alt="Sabrina Furtado" className="w-20" />
                    <h2 className='text-verde-escuro text-center text-sm'>Sabrina</h2>
                    <h2 className='text-verde-escuro text-center text-sm'>Furtado</h2>
                </div>
            
                <div className="mx-4 hover:opacity-75 transition duration-300">
                    <img src="src/assets/pati.png" alt="Patricia Byrro" className="w-20" />
                    <h2 className='text-verde-escuro text-center text-sm'>Patricia</h2>
                    <h2 className='text-verde-escuro text-center text-sm'>Byrro</h2>
                </div>
                
                <div className="mx-4 hover:opacity-75 transition duration-300">
                    <img src="src/assets/gustavo.png" alt="Gustavo Kamimura" className="w-20" />
                    <h2 className='text-verde-escuro text-center text-sm'>Gustavo</h2>
                    <h2 className='text-verde-escuro text-center text-sm'>Kamimura</h2>
                </div>
                
                <div className="mx-4 hover:opacity-75 transition duration-300">
                    <img src="src/assets/bia.png" alt="Bianca Villalba" className="w-20" />
                    <h2 className='text-verde-escuro text-center text-sm'>Bianca</h2>
                    <h2 className='text-verde-escuro text-center text-sm'>Villalba</h2>
                </div>
            </div>
        </>
    );
}