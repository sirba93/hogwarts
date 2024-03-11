import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { Routes, Route } from 'react-router-dom';
import CharacterList from './pages/CharacterList';
import Presentation from './pages/Presentation';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path='/' element={<Presentation />} />
            <Route path='/characters' element={<CharacterList />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </header>
      </div>
    </Provider>
  );
}

export default App;
