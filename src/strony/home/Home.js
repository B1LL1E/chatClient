import './Home.css';
import './Kosc.css';

export default function Home() {
    return(
        <div id='home'>
            <h1>Home</h1>
            {/* <img src='https://media.tenor.com/w9igeBYuXpsAAAAM/amog-us-among-us.gif' alt='imgHome'></img> */}
            
            <h1 id='napis'> Choose one from the option on the left</h1>

            {/* 1 */}
            
            <div id='cube4'style={{
                '--kolor': "rgb(0, 136, 255)",
                "--wielkosc": "9.9vw",
                "--predkosc360": "3s",
                "--rotX": "0deg",
                "--rotY": "-30deg", 
                "--rotZ": "0deg",
                "--odX": "25%",
                "--odY": "150%",
                "--doX": "75%",
                "--doY": "-50%",
                "--czasPrzesu": "10s"
                }}>
                <div id='cien'></div>
                <div id='cube3'>
                    <div id='cube2'>
                        <div id='cube'>
                            <div id='wall' style={{ '--obrot': 1}}></div>
                            <div id='wall' style={{ '--obrot': 2}}></div>
                            <div id='wall' style={{ '--obrot': 3}}></div>
                            <div id='wall' style={{ '--obrot': 4}}></div>
                            <div id='floor' style={{ '--floor': 1}}></div>
                            <div id='floor' style={{ '--floor': -1}}></div>
                        </div>
                    </div>
                </div>
            </div>

            
                {/* 2 */}
            <div id='cube4'style={{
                '--kolor': "rgb(255, 38, 18)",
                "--wielkosc": "5.9vw",
                "--predkosc360": "1s",
                "--rotX": "0deg",
                "--rotY": "-180deg", 
                "--rotZ": "0deg",
                "--odX": "25%",
                "--odY": "-50%",
                "--doX": "25%",
                "--doY": "150%",
                "--czasPrzesu": "10s"
                }}>
                <div id='cien'></div>
                <div id='cube3' >
                    <div id='cube2'>
                        <div id='cube'>
                            <div id='wall' style={{ '--obrot': 1}}></div>
                            <div id='wall' style={{ '--obrot': 2}}></div>
                            <div id='wall' style={{ '--obrot': 3}}></div>
                            <div id='wall' style={{ '--obrot': 4}}></div>
                            <div id='floor' style={{ '--floor': 1}}></div>
                            <div id='floor' style={{ '--floor': -1}}></div>
                        </div>
                    </div>
                </div>
            </div>


            {/* 3 */}
            <div id='cube4' style={{
                    '--kolor': "rgb(200, 18, 255)",
                    "--wielkosc": "15.9vw",
                    "--predkosc360": "8s",
                    "--rotX": "0deg",
                    "--rotY": "70deg", 
                    "--rotZ": "160deg",
                    "--odX": "-25%",
                    "--odY": "-25%",
                    "--doX": "125%",
                    "--doY": "125%",
                    "--czasPrzesu": "15s"
                    }}>
                <div id='cien'></div>
                <div id='cube3'>   
                    <div id='cube2'>
                        <div id='cube'>
                            <div id='wall' style={{ '--obrot': 1}}></div>
                            <div id='wall' style={{ '--obrot': 2}}></div>
                            <div id='wall' style={{ '--obrot': 3}}></div>
                            <div id='wall' style={{ '--obrot': 4}}></div>
                            <div id='floor' style={{ '--floor': 1}}></div>
                            <div id='floor' style={{ '--floor': -1}}></div>
                        </div>
                    </div>
                </div>
            </div>


            {/* 4 */}
            <div id='cube4' style={{
                    '--kolor': "rgb(3, 0, 169)",
                    "--wielkosc": "12.9vw",
                    "--predkosc360": "5s",
                    "--rotX": "0deg",
                    "--rotY": "70deg", 
                    "--rotZ": "160deg",
                    "--odX": "125%",
                    "--odY": "-25%",
                    "--doX": "20%",
                    "--doY": "125%",
                    "--czasPrzesu": "5s"
                    }}>
                <div id='cien'></div>
                <div id='cube3'>
                    <div id='cube2'>
                        <div id='cube'>
                            <div id='wall' style={{ '--obrot': 1}}></div>
                            <div id='wall' style={{ '--obrot': 2}}></div>
                            <div id='wall' style={{ '--obrot': 3}}></div>
                            <div id='wall' style={{ '--obrot': 4}}></div>
                            <div id='floor' style={{ '--floor': 1}}></div>
                            <div id='floor' style={{ '--floor': -1}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}