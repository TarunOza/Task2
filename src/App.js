
import React from 'react';
import './styles.css';
import Header from './Header';
import TaskList from './TaskList';
import AddTask from './AddTask';
import Footer from './Footer';
import TaskContextProvider from './TaskContext';
import Modal from './Modal'; 

const App = () => {
  return (
    <TaskContextProvider>
      <div className="app-container">
        <div className="container">
          <div className="quote">
            <p>"Every day is a fresh start."</p>
          </div>
          <Header />
          <AddTask />
          <TaskList />
        </div>
        <Footer />
      </div>
    </TaskContextProvider>
  );
};

export default App;
