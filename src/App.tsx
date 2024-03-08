import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { Routes, Route } from 'react-router-dom';
import CharacterList from './pages/CharacterList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path='/' element={<CharacterList />} />
          </Routes>
        </header>
      </div>
    </Provider>
  );
}

export default App;
