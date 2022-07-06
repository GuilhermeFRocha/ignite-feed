import React from 'react';
import { Post } from './Post';

import { Header } from './components/Header';
import './global.css';


export const App = () => {

  return (
    
    <div>
      <Header/>

      <Post infos={'testes'}/>
    </div>
  );
};
