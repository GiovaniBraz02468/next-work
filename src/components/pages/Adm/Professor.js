import Titulo from "../../layout/Titulo";
import '../../../App.css';


export default function Professor(){
    return(
        <>
        <Titulo Titulo="Professor"></Titulo>
        <div style={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: '150px', paddingTop: '80px', paddingBottom: '30px' }}>
        <button type="button" className="btn-laranja">Novo Curso</button>   
        <button type="button" className="btn-laranja" style={{ marginLeft: '20px', width: '120px'}}>Filtro</button>     
        </div>

<div
  style={{
    position: 'relative',
    border: '2px solid #E1632D',
    paddingTop: '40px',
    borderRadius: '15px',
    boxSizing: 'border-box',
    height: '120px',
    marginLeft: '150px',
    marginRight: '200px',
  }}
>
  {/* Esquerda */}
  <div
    style={{
      position: 'absolute',
      left: '20px',
      top: '25%',
      transform: 'translateY(-50%)',
    }}
  >
    <label style={{ display: 'block', marginBottom: '5px', marginLeft: '10px', marginTop: '10px' }}>Instituição</label>
    <input
      type="text"
      placeholder="Esquerda"
      style={{
        width: '150px',
        borderRadius: '15px',
      }}
      className="form-control"
    />
  </div>

  {/* Centro */}
  <div
    style={{
      position: 'absolute',
      left: '50%',
      top: '25%',
      transform: 'translate(-50%, -50%)',
    }}
  >
    <label style={{ display: 'block', marginBottom: '1px', marginLeft: '10px', marginTop: '10px' }}>Nome do curso</label>
    <input
      type="text"
      placeholder="Centro"
      style={{
        width: '150px',
        borderRadius: '15px',
      }}
      className="form-control"
    />
  </div>

  {/* Direita - SELECT */}
  <div
    style={{
      position: 'absolute',
      right: '20px',
      top: '25%',
      transform: 'translateY(-50%)',
    }}
  >
    <label style={{ display: 'block', marginBottom: '1px', marginLeft: '5px', marginTop: '10px' }}>Status</label>
    <select
      style={{
        width: '150px',
        borderRadius: '15px',
        height: '38px',
        paddingLeft: '10px',
      }}
      className="form-control"
    >
      <option value="">Selecione</option>
      <option value="em_andamento">Em andamento</option>
      <option value="concluido">Concluído</option>
      <option value="trancado">Trancado</option>
    </select>
  </div>
</div>
<div
  style={{
    position: 'relative',
    padding: '20px',
    borderRadius: '15px',
    boxSizing: 'border-box',
    height: '500px',
    marginLeft: '150px',
    marginRight: '200px',
    marginTop: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    overflowY: 'auto', // caso tenha muitos cursos
  }}
>
  <h3 style={{ marginBottom: '20px' }}>Cursos cadastrados</h3>

  {['Informática', 'Robótica', 'Enfermagem', 'Administração'].map((curso, index) => (
    <div
      key={index}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: '10px',
        padding: '10px 15px',
        marginBottom: '10px',
      }}
    >
      <span style={{ fontSize: '16px', fontWeight: '500' }}>{curso}</span>

      <div>
      <button className="btn-editar">Editar</button>
      <button className="btn-excluir">Excluir</button>
      </div>
    </div>
  ))}
</div>
        
        </>
    )
}