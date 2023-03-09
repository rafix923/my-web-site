import React, { useState } from 'react';
import axios from 'axios';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [details, setDetails] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Nome:</label>
            <input
                id='name'
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor='email'>Email:</label>
            <input
                id='email'
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor='phone'>Telefone:</label>
            <input
                id='phone'
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor='details'>Detalhes:</label>
            <textarea
                id='details'
                value={details}
                onChange={(e) => setDetails(e.target.value)}
            />
            <button type="submit">Enviar</button>
        </form>
    );
}

export default Form;