import Menu from './components/Menu/Menu';
import { Route, Routes } from 'react-router-dom'
import Register from './components/Forms/Register';
import Leaderboard from './components/Menu/Leaderboard'
import Login from './components/Forms/Login';
import Game from './components/Game/Game';
function App() {

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Menu />}/>
      <Route path="/game" element={<Game />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} /> 
    </Routes>
    </div>
  );
}

export default App;
