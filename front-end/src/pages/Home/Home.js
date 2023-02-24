import React from 'react';
import Header from '../../components/Header/Header';

export default function Home() {

  const title = "Home" 
  return (
    <div>
      <Header />
      <h1>{title}</h1>
      <p>Home Page</p>
    </div>
  )
}
