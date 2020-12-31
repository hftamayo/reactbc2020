import logo from './logo.svg';
import './App.css';
import Saludos, { Envoltura, Saludo1, Saludo2 } from './Contenedores/Ejemplojsx';
import Libreria from './Contenedores/Ejemplojsx/Libreria';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <main>
        <div>
          <p>Pagina default de React.js</p>
        </div>
        <Saludos />
        <Saludo1 color="green" bgColor="yellow" text="saludo1 modificado"/>
        <Saludo2 />

        <Envoltura styles={{backgroundColor: 'lightblue'}}>
          <Saludo1 />
          <Saludo2 />
        </Envoltura>

        <Libreria />
        <Libreria />

      </main>
    </div>
  );
}

export default App;
