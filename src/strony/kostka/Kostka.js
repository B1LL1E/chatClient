import './Kostka.css';
import './Tlo.css';

export default function Kostka() {
    return(
        <>
            <h1>CUBE</h1>
            <div id='tlo' style={{ zIndex:0}}>
                <div id='blok1'></div>
                <div id='blok2'></div>
            </div>   
            <div id='kosc1'>
                <div id='kosc'>
                    <div id='sciana' style={{'--x': 1}}></div>
                    <div id='sciana' style={{'--x': 2}}></div>
                    <div id='sciana' style={{'--x': 3}}></div>
                    <div id='sciana' style={{'--x': 4}}></div>
                    <div id='podloga'></div>
                </div>
            </div>  

              
        </>
    )
}