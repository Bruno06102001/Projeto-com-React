import './MenuLateral.css'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase'

function MenuLateral() {
    const navegador = useNavigate()

    async function sair() {
        const { error } = await supabase.auth.signOut()

        console.log("Usuario fez logout no Supabase")

        if (error) {
            alert('Erro ao sair do sistema!')
            return
        }

        navegador('/')
    }

    function PaginaDashboard() {
        navegador('/dashboard')
    }

    function PaginaAluno() {
        navegador('/alunos')
    }

    function PaginaProfessor() {
        navegador('/professores')
    }

    return (
        <aside className="menu-lateral">
            <h2>Menu</h2>
            <ul>
                <li>
                    <a onClick={PaginaDashboard}>Dashboard</a>
                </li>
                <li>
                    <a onClick={PaginaAluno}>Alunos</a>
                </li>
                <li>
                    <a onClick={PaginaProfessor}>Professores</a>
                </li>
            </ul>

            <br />
            <button onClick={sair}>
                Sair
            </button>

        </aside>
    )
}

export default MenuLateral