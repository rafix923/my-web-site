import React, { useState } from 'react';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [details, setDetails] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        // Espaço destinado para receber o código que enviará as infomações
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Nome:</label>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <label>Email:</label>
            <input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <label>Telefone:</label>
            <input
                type="text"
                value={phone}
                onChange={e => setPhone(e.target.value)}
            />
            <label>Detalhes:</label>
            <textarea
                value={details}
                onChange={e => setDetails(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;