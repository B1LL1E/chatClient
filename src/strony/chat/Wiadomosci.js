import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import './Wiadomosci.css';

export default function Wiadomosci(props){

    const [nick,setNick] = useState('');

    const [list,setLista] =useState([]);

    //odbieranie
    useEffect(() => {
        axios.get('https://chatserver-u1qo.onrender.com/getMes').then((response) => {
            if(response.data !== list){
                console.log(list);
            }
            setLista(response.data);
        })       
    });

    //pobieranie i ustawianie nicku z pliku chat.js
    useEffect(() => {
        setNick(props.nick); 
    }, [props.nick])

    
    //przestawienie scrolla po pojawieniu nowej wiadomości
    const bottomRef = useRef(null);
    const [scrollPF, setScrollPF] = useState('TAK');
    useEffect(() => {
        if(scrollPF === 'TAK'){
            bottomRef.current.scrollIntoView();
            setScrollPF('TAK');
        }
    }, [list]);
    
    return(
        
        <div id='wiadomosci1'>
            <h1 id='komunikat'>
                <div id='kropka' style={{ "--i":1 }}>.</div>
                <div id='kropka' style={{ "--i":2 }}>.</div>
                <div id='kropka' style={{ "--i":3 }}>.</div>
            </h1>   
                <table id='wiadomosci'>                            
                    {list.map((val, key) => {

                        document.getElementById('komunikat').style.display = 'none';

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
        </div>
    )
}