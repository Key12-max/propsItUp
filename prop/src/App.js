import logo from './logo.svg';
import PersonalCard from './component/PersonCard';
import './App.css';
function App() {
  return (
    <div className="App">
      <h1>First React core assignment: Prop it Up </h1>
      <PersonalCard 
      firstName ={"Doe"}
      lastName = {"Jane"}
      age = {45}
      color = {"Black"}
      
      />
      <PersonalCard       
      firstName ={"Smith"}
      lastName = {"John"}
      age = {88}
      color = {"Brown"}/>
      <PersonalCard
            firstName ={"Fillmore"}
            lastName = {"Millard"}
            age = {50}
            color = {"Brown"}
      />
      <PersonalCard 
            firstName ={"Smith"}
            lastName = {"Maria"}
            age = {62}
            color = {"Brown"}
      />
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
    </div>
  );
}

export default App;
