import React from 'react';
import Navbar from './components/Navbar';
import CheckContextProvider from './contexts/CheckContext';
import CheckList from './components/CheckList';
import NewCheckForm from './components/NewCheckForm';

function App() {
  return (
    <div className="App">
      <CheckContextProvider>
        <Navbar />
        <CheckList />
        <NewCheckForm />
      </CheckContextProvider>
    </div>
  );
}

export default App;