import './App.css';
import React from 'react';
import "./components/FontawesomeIcons/fonts"
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div>
      <Sidebar/>
      <Dashboard/>
    </div>
  );
}

export default App;

const div = styled.div `
  position:relative;
`