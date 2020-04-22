import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Left from './components/Left'
import Right from './components/Right'
import Table from './components/Table'
import './styles/Header.css'
import './styles/Footer.css'
import './styles/Left.css'
import './styles/Right.css'
import './styles/Table.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Footer></Footer>
      <Left></Left>
      <Right></Right>
      <Table></Table>
    </div>
  );
}

export default App;
