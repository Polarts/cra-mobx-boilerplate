import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import MainStore from './stores/MainStore';

function App() {
  return (
    <Main mainStore={new MainStore()}/>
  );
}

export default App;
