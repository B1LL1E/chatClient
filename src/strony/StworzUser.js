import { useState } from 'react';
import React from 'react';

export default function StworzUser() {
    
    const [nick, setNick] = useState(''); 
    const [haslo, setHaslo] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(nick);
        console.log(haslo);
    }

    return(
        <div>
            <h1>Stwórz Użytkownika</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder="NICK" name='nick' id='nick' onChange={ (e) => setNick(e.target.value)} /><br />
                <input type='text' placeholder="HASŁO" name='haslo' id='haslo' onChange={ (e) => setHaslo(e.target.value)} /><br />
                <input type='submit' value='STWÓRZ' id='submit'/>
            </form>
        </div>
    );
}