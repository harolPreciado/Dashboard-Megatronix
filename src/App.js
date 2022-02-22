import logo from './assets/images/logoBottomMegatronix.png';
import './assets/css/App.css'

import SideLeft from './components/products/SideLeft';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span className="Title-header">Dashboard megatronix</span>
      </header>
      <SideLeft />
    </div>
  );
}

export default App;
