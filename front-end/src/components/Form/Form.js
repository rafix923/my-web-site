import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from '../../hooks/useForm';

function Form() {
    // const [form, onChange, resetForm] = useForm({ name: "" })
    // console.log(form);
    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputPhone, setInputPhone] = useState('');
    const [inputDetails, setInputDetails] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

    };

    const handleInputName = (e) => {
        setInputName(e.target.value)
    };

    const handleInputEmail = (e)=>{
        setInputEmail(e.target.value)
    };

    const handleInputPhone = (e)=>{
        setInputPhone(e.target.value)
    };

   const handleInputDetails = (e)=>{
        setInputDetails(e.target.value)
    };

    

    return (
        <form>
            <label htmlFor='name'>Nome:</label>
            <input
                id='name'
                name='name'
                type="text"
                value={inputName}
                onChange={handleInputName}
            />
            <label htmlFor='email'>Email:</label>
            <input
                id='email'
                type="text"
                value={inputEmail}
                onChange={handleInputEmail}
            />
            <label htmlFor='phone'>Telefone:</label>
            <input
                id='phone'
                type="text"
                value={inputPhone}
                onChange={handleInputPhone}
            />
            <label htmlFor='details'>Detalhes:</label>
            <textarea
                id='details'
                value={inputDetails}
                onChange={handleInputDetails}
            />
            <button type="submit">Enviar</button>
        </form>
    );
}

export default Form;