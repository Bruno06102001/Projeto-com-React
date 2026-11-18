import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Alunos from './pages/Alunos'
import Professores from './pages/Professores'
import RotaProtegida from './components/RotaProtegida'
import { supabase } from './supabase'
import { useState, useEffect } from 'react'
import { use } from 'react'

function App() {

    const [sessao, setSessao] = useState(null)
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        async function verificarSessao() {
            const { data } = await supabase.auth.getSession()
            setSessao(data.session)
            setCarregando(false)
        }

        verificarSessao()

        const { data } = supabase.auth.onAuthStateChange((evento, sessaoAtual) => { setSessao(sessaoAtual) })

        return () => { data.subscription.unsubscribe() }

    }, [])

    if (carregando) {
        return <p>Carregando...</p>
    }

    <Route
        path="/dashboard"
        element={
            <RotaProtegida sessao={sessao}>
                <Dashboard />
            </RotaProtegida>
        } />

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/alunos" element={<Alunos />} />
                <Route path="/professores" element={<Professores />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App