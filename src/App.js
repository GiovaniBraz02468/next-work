import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Inicio do projeto Next Work</p>
        <p>Projeto para gestão de trabalhos para escolas/faculdades</p>
        <p>Andre-teste</p>
        <p>Giovani-teste</p>
        <div>
          <p>Testando bootstrap css</p>
          <p>Botões:</p>
          <button type="button" class="btn btn-primary">Primary</button>
          <button type="button" class="btn btn-secondary">Secondary</button>
          <button type="button" class="btn btn-success">Success</button>
          <button type="button" class="btn btn-danger">Danger</button>
          <button type="button" class="btn btn-warning">Warning</button>
          <button type="button" class="btn btn-info">Info</button>
          <button type="button" class="btn btn-light">Light</button>
          <button type="button" class="btn btn-dark">Dark</button>
        </div>
      </header>
    </div>
  );
}

export default App;
