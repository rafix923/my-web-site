import React from 'react';
import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';


export default function Contact() {

    const title = "Home page"
    return (
        <div>
            <Header />
            <div>
                <h1>{title}</h1>
            </div>
            <p>Contact Page</p>
            <Form />
        </div>
    )
}
