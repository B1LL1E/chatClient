import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Chat.css'

export default function Chat() {
    
    

    const [text,setText] = useState('');
    const [nick,setNick] = useState('BIL_LIE');

    const [list,setLista] =useState([]);

    function Wyslij(e) {
        e.preventDefault();
        axios.post('https://chatserver-u1qo.onrender.com/posts', { nick: nick, text: text});   
        
        setText('');
    }

    useEffect(() => {
        axios.get('https://chatserver-u1qo.onrender.com/getMes').then((response) => {
            setLista(response.data);
        })
    });

    return(
        <div id='Chat'>
            <h2 id='Chat'>CHAT</h2>   

            <div id='nick'>
                <input id='nick' type='text' value={nick} onChange={(e) => setNick(e.target.value)}/>
            </div>
            

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

            <div id='buttonWyslij'>
                <input type='text' value={text} onChange={(e) => setText(e.target.value) } id='buttonWyslij' />
                <button onClick={Wyslij} id='buttonWyslij'>WYSLIJ</button>
            </div>
        </div>
    )
}