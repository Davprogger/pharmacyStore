import './App.css';
import { Footer } from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { ReactRouter } from './router/ReactRouter';

function App() {
  return (
    <div className="App">
      <Header />
      <ReactRouter />
      <Footer />
    </div>
  );
}

export default App;
