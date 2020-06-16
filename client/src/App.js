import React from 'react';

import './App.css';
import {BrowserRouter as Router,
        Switch,
        Route,
        Link} from 'react-router-dom';
import Landing from './components/landing';
import CreateSession from './components/createSession';
import JoinSession from './components/joinSession';
import Lobby from './components/Lobby';
import {motion,AnimatePresence} from 'framer-motion';
import Container from './components/Container';
import Stats from './components/Stats';

//text selection: shift + left/right keys
//block moving: ctrl + [/]

function App() {
  
  

  return (
    
    <Container/>
  );
}

export default App;
