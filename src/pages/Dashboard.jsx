//import { useState } from 'react'
//import reactLogo from '../assets'
//import viteLogo from '../../public/vite.svg'
import Cabecalho from '../components/Cabecalho'
import MenuLateral from '../components/MenuLateral'
import Botao from '../components/Botao'
import CampoTexto from '../components/CampoTexto'
import CartaoIndicador from '../components/CartaoIndicador'
import './Dashboard.css'


function Dashboard() {
  return (
    <>
      <div>
        <Cabecalho />
      </div>

      <div className="layout">
        <MenuLateral />

        <main className="conteudo">
          <h2>Dashbord</h2>
          <p>Bem-vindo ao sistema!</p>

          <div className="indicadores">
            <CartaoIndicador
              titulo="Total de alunos"
              valor="120"
            />

            <CartaoIndicador
              titulo="Total de professores"
              valor="15"
            />

            <CartaoIndicador
              titulo="Avaliações realizadas"
              valor="85"
            />
          </div>

        </main>
      </div>

      <div>
        <CampoTexto
          label="Cadastre seu E-mail para receber nossas novidades:"
          tipo="email" />
      </div>

      <div>
        <Botao>Cadastrar</Botao>
      </div>

    </>
  )
}

export default Dashboard
