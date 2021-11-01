import './App.css';
import DeathsList from './components/DeathList/DeathList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DeathsList />
        <div className="App-small-text">* Данните са взети от <a href="https://data.egov.bg/data/resourceView/18851aca-4c9d-410d-8211-0b725a70bcfd" target="_blank" rel="noreferrer">Портал за отворени данни</a> и е възможно да има неточности!</div>
        <div className="App-small-text">* Сайтът е разработен само с информативна цел!</div>
      </header>
    </div>
  );
}

export default App;
