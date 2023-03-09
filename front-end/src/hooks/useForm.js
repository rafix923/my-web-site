import { useState } from 'react';

export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState);
    var onChange = (e) => {
        var [name, value] = e.target
        var [phone, value] = e.target
        var [email, value] = e.target
        var [details, value] = e.target
        const newForm = { ...form, [{name, phone,email,details}]: value }
        setForm(newForm)
    }
    const resetState = () => {
        setForm(initialState)
    }
    return [form, onChange, resetState]
};