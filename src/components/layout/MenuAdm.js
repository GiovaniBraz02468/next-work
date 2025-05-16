import Nav from 'react-bootstrap/Nav';

export default function MenuAdm() {
    return (
        <>
            <Nav.Link href="/admhome">Home</Nav.Link>
            <Nav.Link href="/admprofessor">Professores</Nav.Link>
            <Nav.Link href="/admaluno">Alunos</Nav.Link>
            <Nav.Link href="/admperfil">Perfil</Nav.Link>
            <Nav.Link href="/admcurso">Curso</Nav.Link>
            <Nav.Link href="/">Sair</Nav.Link>
        </>
    )
}