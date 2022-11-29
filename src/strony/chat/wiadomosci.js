import { useState, useRef, useEffect } from "react";
import axios from "axios";
import './Wiadomosci.css';

export default function Wiadomosci(props){

    const [nick,setNick] = useState('');

    const [list,setLista] =useState([]);

    //odbieranie
    useEffect(() => {
        axios.get('https://chatserver-u1qo.onrender.com/getMes').then((response) => {
            setLista(response.data);
        })
        //pobieranie i ustawianie nicku z pliku chat.js
        setNick(props.nick);
    });

    

    const bottomRef = useRef(null);

    return(
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

            </div>
    )
}