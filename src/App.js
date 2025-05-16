import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/layout/Menu';
import AdmHome from './components/pages/Adm/Home'
import Login from './components/pages/Geral/Login'
import ContainerComMenu from './components/layout/ContainerComMenu';
import AdmAluno from './components/pages/Adm/Alunos'
import AdmCurso from './components/pages/Adm/Curso'
import AdmProfessor from './components/pages/Adm/Professor'
import AdmPerfil from './components/pages/Adm/Perfil'
import EsqueciSenha from './components/pages/Geral/EsqueciSenha';


export default function App() {
  return (
    <div>

      {/* Criação das rotas*/}
      <BrowserRouter>
        <Routes>

          {/* Telas sem container (Sem menu) */}
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/esquecisenha' element={<EsqueciSenha></EsqueciSenha>}></Route>


          {/* Telas com container (Com menu) */}
          <Route element={<ContainerComMenu />}>
            <Route path="/admhome" element={<AdmHome></AdmHome>} />
            <Route path="/admaluno" element={<AdmAluno></AdmAluno>} />
            <Route path="/admperfil" element={<AdmPerfil></AdmPerfil>} />
            <Route path="/admprofessor" element={<AdmProfessor></AdmProfessor>} />
            <Route path="/admcurso" element={<AdmCurso></AdmCurso>} />
          </Route>

          {/* Telas/rotas inexistentes */}
          <Route path="*" element={<h1>Não encontrado</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}