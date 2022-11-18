import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
            <div id='buttonWyslij'>
                <input type='text' value={text} onChange={(e) => setText(e.target.value) } id='buttonWyslij' />
                <button onClick={Wyslij} id='buttonWyslij'>WYSLIJ</button>
            </div>
            
            <table>
                {list.map((val, key) => {
                    let idTr = 'tabelaChatP';

                    if(nick === val.nick){
                        idTr = 'tabelaChatP'
                    }
                    else{
                        idTr = 'tabelaChatL'
                    }

                    return(
                        <tr id={idTr} key={key}><td key={key}>{val.nick}: {val.text}</td></tr>
                    )
                })}
            </table>
        </div>
    )
}