import './App.css';
import { MemoryRouter, Link, Route, Routes} from 'react-router-dom';
import StworzUser from './strony/stworzUser/StworzUser';
import Home from './strony/home/Home';
import Chat from './strony/chat/Chat';
import { useState } from 'react';

function App() {

  const [showGloBarPF,setShowGloBarPF] = useState('TAK');
  const showGloBar = () => {

    if(showGloBarPF === 'TAK'){
      document.getElementById('gloBar').style.left = '-100px';
      document.getElementById('gloBar').style.opacity = '30%';
      document.getElementById('gloBarStrz').style.transform = 'rotate(180deg)';
      setShowGloBarPF('NIE');
    }
    else{
      document.getElementById('gloBar').style.left = '0px';
      document.getElementById('gloBar').style.opacity = '100%';
      document.getElementById('gloBarStrz').style.transform = 'rotate(0deg)';
      setShowGloBarPF('TAK');
    }
    
  }

  return (
    <div className="App" >
      <MemoryRouter>

        <div id='gloBar'>
          <table>
            <tr>
              <td id='gloTd1'>
                <div class='gloPrzycisk'><Link class='innerGloPrzycisk' to='/'>🏠</Link></div>
                <div class='gloPrzycisk'><Link class='innerGloPrzycisk' to='user/create'>❔</Link></div>
                <div class='gloPrzycisk'><Link class='innerGloPrzycisk' to='chat'>💬</Link></div>
              </td>

              <td id='gloTd2' onClick={showGloBar}><div id='gloBarStrz'>&#129088;</div></td>
            </tr>
          </table>
        </div>

        <Routes>
          <Route index element={<Home />}/>

          <Route path='user/create' element={<StworzUser />} />

          <Route path='chat' element={<Chat />}/>

        </Routes>
      </MemoryRouter>
    </div>
  );
}

export default App;
