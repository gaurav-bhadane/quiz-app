import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Question from './components/Question/Question';
import Result from './components/Result/Result';
import  './App.css';


function App() {
  return (
    <Router>
      <div className='application_quiz' >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/question" element={<Question />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
