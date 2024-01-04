import React from 'react';
import { useState } from 'react';
import Card from './Card';

const AddRes = () => {
    const [inputText, setInputText] = useState('');
    const [res, setRes] = useState([]);

    function addResulation() {
        setRes([...res, inputText]);
        setInputText("");
    }
    function enterPressed(e) {
        if (e.code === 'Enter') {
            addResulation();
        }
    };
    return (
        <>
            <div className="inputContainer">
                <input type="text" className='input-box' placeholder='Enter year resulations...'
                    value={inputText}
                    onChange={e => { setInputText(e.target.value) }} onKeyDown={enterPressed} />
                <button className='add-btn' onClick={addResulation}>+</button>
            </div>
            <Card resulations={res} />
        </>
    );
}

export default AddRes;
