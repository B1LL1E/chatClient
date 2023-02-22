import './Kostka.css';

export default function Kostka() {
    return(
        <>
            <h1>CUBE</h1>
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