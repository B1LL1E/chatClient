import './App.css';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import StworzUser from './strony/stworzUser/StworzUser';
import Home from './strony/home/Home';
import Chat from './strony/chat/Chat';
import { useState } from 'react';
import { initializeApp } from "firebase/app";

function App() {

  //firebase
  const firebaseConfig = {
    apiKey: "AIzaSyCmNhnzItJ6CL8KCBCzx6SKpQjEOXQi-7c",
    authDomain: "chatserver-a83f5.firebaseapp.com",
    projectId: "chatserver-a83f5",
    storageBucket: "chatserver-a83f5.appspot.com",
    messagingSenderId: "930171056846",
    appId: "1:930171056846:web:3a55570931e4f8b07a569f"
  };
  const app = initializeApp(firebaseConfig);



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
      <BrowserRouter>

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
      </BrowserRouter>
    </div>
  );
}

export default App;
