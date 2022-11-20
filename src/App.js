import './App.css';
import { MemoryRouter, Link, Route, Routes} from 'react-router-dom';
import ListUser from './strony/ListUser';
import StworzUser from './strony/StworzUser';
import Home from './strony/Home';
import Chat from './strony/Chat';


function App() {
  return (
    <div className="App" >
      <MemoryRouter>

        <table id='home'>
          <tr id='home'>
            <td id='home'><Link to='/'>HOME</Link></td>
            <td id='home'><Link to='user/create'>Stwórz Użytkownika</Link></td>
            <td id='home'><Link to='chat'>Chat</Link></td>
          </tr>
        </table>

        <Routes>
          <Route index element={<Home />}/>
          <Route path='user/create' element={<StworzUser />} />
          <Route path='user/list' element={<ListUser />} />
          <Route path='chat' element={<Chat />}/>
        </Routes>
      </MemoryRouter>
    </div>
  );
}

export default App;
