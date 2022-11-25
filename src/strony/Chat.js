import axios from 'axios';
import React, { useEffect, useState, useRef} from 'react';
import './Chat.css'

export default function Chat() {
    const [text,setText] = useState('');
    const [nick,setNick] = useState('');

    const [list,setLista] =useState([]);

    //wysylanie do bazy danych
    //wysylanie
    function Wyslij(e) {
        e.preventDefault();
        axios.post('https://chatserver-u1qo.onrender.com/posts', { nick: nick, text: text});   
        
        setText('');
    }
    //odbieranie
    useEffect(() => {
        axios.get('https://chatserver-u1qo.onrender.com/getMes').then((response) => {
            setLista(response.data);
        })
    });


    //scroll
    const bottomRef = useRef(null);
    useEffect(() => {
        setTimeout(guzScroll, 600);
    }, [])
    
    const [aktw, setAktw] = useState('TAK');
    const guzScroll = () => {
        if(aktw === 'TAK'){
            document.getElementById('wiadomosci1').style.overflowY = 'hidden';
            bottomRef.current.scrollIntoView();
            setAktw('NIE');
        }
        else{
            document.getElementById('wiadomosci1').style.overflowY = 'scroll';
            setAktw('TAK');
        }
    }

    const [pokUstNick, setPokUstNick] = useState('TAK');
    //pojawianie się ustawNick
    const PojawUstNick = () => {
        if(pokUstNick === 'TAK'){
            document.getElementById('Nnick').style.display = 'none';
            setPokUstNick('NIE');
        }
        else{
            document.getElementById('Nnick').style.display = 'block';
            setPokUstNick('TAK');
        }   
        
        //ustawianie nicku na ANONIM w przypadku jego braku
        if(nick === ''){
            setNick('ANONIM');
        }
    }



    return(
        <div id='Chat'>
            <div id='wiadomosci1'>
                <table id='wiadomosci'>           
                    {list.map((val, key) => {
                        let idTr = 'tabelaChatP';
                        let idDiv = 'divP';
                        let idNazwa = 'nazwaP'

                        if(nick === val.nick){
                            idTr = 'tabelaChatP'
                            idDiv = 'divP'
                            idNazwa = 'nazwaP'
                        }
                        else{
                            idTr = 'tabelaChatL'
                            idDiv = 'divL'
                            idNazwa = 'nazwaL'
                        }
                        

                        return(
                            <tr id={idTr} key={key}>
                                <td>
                                    <div id={idNazwa}>{val.nick}</div>
                                    <div id={idDiv}>{val.text}</div>
                                </td>
                            </tr>
                            
                        )
                    })}
                </table>
                <p ref={bottomRef}></p>


                <div id='BAR'>
                    <div id='scroll' class='przycisk' onClick={guzScroll}>SCROL</div> 
                    <div id='pokUstNick' class='przycisk' onClick={PojawUstNick}>NICK</div>
                </div>

            </div>


            {/* <div id='nick'>
                <input id='nick' type='text' value={nick} onChange={(e) => setNick(e.target.value)} placeholder='Nick'/>
            </div> */}


            <div id='buttonWyslij'>
                <input type='text' value={text} onChange={(e) => setText(e.target.value) } id='buttonWyslij' placeholder='Wprowadź Wiadomość' />
                <button onClick={Wyslij} id='buttonWyslij'>✔</button>
            </div>  


            <div id='Nnick'>
                <p id='tytul'>Nick Chat</p>
                <input id='Nnick' type='text' placeholder="Nick" value={nick} onChange={(e) => setNick(e.target.value)} maxLength='20'/><br/>
                <input id='Nlogin' type='button' value='LOGIN' onClick={PojawUstNick}/>
            </div>

        </div>
    )
}