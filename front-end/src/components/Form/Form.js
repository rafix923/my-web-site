import axios from 'axios';
import { useForm } from '../../hooks/useForm';


function Form() {

    const [body, onChange] = useForm({ name: "", email: "", phone: "", details: "" })

    const createUser = (e) => {
        e.preventDefault()
        // axios.post(`${BASE_URL}`/create/user, body)
        console.log(body);
    };

    return (
        <form onSubmit={createUser}>
            <label htmlFor='name'>Nome:</label>
            <input
                id='name'
                name='name'
                type="text"
                value={body.name}
                onChange={onChange}
            />
            <label htmlFor='email'>Email:</label>
            <input
                id='email'
                name='email'
                type="text"
                value={body.email}
                onChange={onChange}
            />
            <label htmlFor='phone'>Telefone:</label>
            <input
                id='phone'
                name='phone'
                type="text"
                value={body.phone}
                onChange={onChange}
            />
            <label htmlFor='details'>Detalhes:</label>
            <textarea
                id='details'
                name='details'
                type='text'
                value={body.details}
                onChange={onChange}
            />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Form;