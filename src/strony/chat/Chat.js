import axios from 'axios';
import React, { useState } from 'react';
import './Chat.css'
import Wiadomosci from './Wiadomosci.js';

export default function Chat() {
    const [text,setText] = useState('');
    const [nick,setNick] = useState('');

    //wysylanie do bazy danych
    //wysylanie
    function Wyslij(e) {
        e.preventDefault();
        axios.post('https://chatserver-u1qo.onrender.com/posts', { nick: nick, text: text});   
        
        setText('');
    }
    

    const [pokUstNick, setPokUstNick] = useState('TAK');

    const [zlyNick,setZlyNick] = useState('');
    //pojawianie się ustawNick
    const PojawUstNick = (e) => {
        e.preventDefault();
        if(pokUstNick === 'TAK'){
            //ustawianie nicku na ANONIM w przypadku jego braku
            document.getElementById('Nnick').style.opacity = '0%';
            setTimeout(() => {
                document.getElementById('Nnick').style.display = 'none';
                if(nick === ''){
                    setNick('ANONIM');
                }
            }, 200);
            
            setPokUstNick('NIE');
        }
        else{
            document.getElementById('Nnick').style.display = 'block';
            setPokUstNick('TAK');
        }   
        
        //wysNick javascript
        
        let dlugoscNick = nick.length;
        let wyraz = '';
        let liczWyk = 0;
        let mojInterval = setInterval(() => {

            let czas = setTimeout(() => {console.log('')}, 2000);
            wyraz = wyraz + nick.substring(liczWyk, liczWyk +1);
            liczWyk++;
            setZlyNick(wyraz);
            if(liczWyk === dlugoscNick)
            {
                clearInterval(mojInterval);
                
            }
        }, 50)


        // document.getElementById('wysNickh1').style.;
        
    }


    //clickBARhide
    const [clickBARhidePF, setClickBARhidePF] = useState('TAK');
    const clickBARhide = () => {
        if(clickBARhidePF === 'TAK'){
            document.getElementById('BAR').style.top = '-65px';
            document.getElementById('BAR').style.opacity = '30%';
            document.getElementById('BARhide1').style.transform = 'rotate(0deg)'
            setClickBARhidePF('NIE');
        }
        else{
            document.getElementById('BAR').style.top = '0px';
            document.getElementById('BAR').style.opacity = '100%';
            document.getElementById('BARhide1').style.transform = 'rotate(180deg)'
            setClickBARhidePF('TAK');
        }
    }

    


    return(
        <div id='Chat'>
            <Wiadomosci nick={nick}/>

            <div id='buttonWyslij'>
                <form id='buttonWyslij'>
                    <input type='text' value={text} onChange={(e) => setText(e.target.value) } id='buttonWyslij' placeholder='Wprowadź Wiadomość' />
                    <input type='submit' onClick={Wyslij} id='buttonWyslij1' value='✔' />
                </form>
            </div>  


            <div id='Nnick'>
                <div id='Nnick1'>
                    <p id='tytul'>Wprowadź swój nick</p>
                    <form id='Nnick'>
                        <input id='Nnick' type='text' placeholder="Nick" value={nick} onChange={(e) => setNick(e.target.value)} maxLength='20'/><br/>
                        <input id='Nlogin' type='submit' value='LOGIN' onClick={PojawUstNick}/>
                    </form>
                </div>
            </div>

            <div id='BAR'>
                <div id='BARkafelek'></div>

                <div id='BARhide' onClick={clickBARhide}><div id='BARhide1'>&#11167;</div></div>
            </div>

            <div id='wysNick'>
                <h1 id='wysNickh1'>{zlyNick}</h1>
            </div>

        </div>
    )
}