import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Kubernetes Learning App</h1>

        <p>
          This is a demo React application designed to learn
          <strong> Kubernetes </strong> and <strong> containerization </strong>
          concepts using a real frontend project.
        </p>

        <ul className="App-list">
          <li>Build a React application</li>
          <li>Containerize it using Docker</li>
          <li>Deploy it on Kubernetes</li>
          <li>Scale using replicas</li>
        </ul>

        <a
          className="App-link"
          href="https://kubernetes.io/docs/home/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Kubernetes
        </a>
      </header>
    </div>
  );
}

export default App;
