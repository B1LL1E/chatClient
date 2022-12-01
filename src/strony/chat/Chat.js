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
    


    // //scroll
    // const bottomRef = useRef(null);
    // useEffect(() => {
    //     setTimeout(, 600);
    // }, [])
    

    // const [aktw, setAktw] = useState('TAK');
    // const guzScroll = () => {
    //     if(aktw === 'TAK'){
    //         //schowanie scrollu
    //         document.getElementById('wiadomosci1').style.overflowY = 'hidden';
    //         bottomRef.current.scrollIntoView();

    //         //ustawienie css, zmiena scianki na sciana2
    //         document.getElementById('scroll').style.transform = 'rotateY(-90.01deg)'

    //         setAktw('NIE');
    //     }
    //     else{
    //         //pojawienie scrollu
    //         document.getElementById('wiadomosci1').style.overflowY = 'scroll';

    //         //ustawienie css, zmiena scianki na sciana
    //         document.getElementById('scroll').style.transform = 'rotateY(0deg)'

    //         setAktw('TAK');
    //     }
    // }


    const [pokUstNick, setPokUstNick] = useState('TAK');
    //pojawianie się ustawNick
    const PojawUstNick = (e) => {
        e.preventDefault();
        if(pokUstNick === 'TAK'){
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
        
        //ustawianie nicku na ANONIM w przypadku jego braku
        
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
                <p id='tytul'>Wprowadź swój nick</p>
                <form>
                    <input id='Nnick' type='text' placeholder="Nick" value={nick} onChange={(e) => setNick(e.target.value)} maxLength='20'/><br/>
                    <input id='Nlogin' type='submit' value='LOGIN' onClick={PojawUstNick}/>
                </form>
            </div>

            <div id='BAR'>
                <div id='BARkafelek'>XD</div>

                <div id='BARhide' onClick={clickBARhide}><div id='BARhide1'>&#11167;</div></div>
            </div>

        </div>
    )
}