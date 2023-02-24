import React from 'react';
import Header from '../../components/Header/Header';

export default function About() {

    const title = "About" 
    return (
      <div>
        <Header />
        <h1>{title}</h1>
        <p>About Me Page</p>
      </div>
    )
}
