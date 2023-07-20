import React from 'react';
import { useState } from 'react';
import Start from './components/Start';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './state/store'
import './App.css';

function App() {
  let [answer, setAnswer] = useState(0)
  let [flag, setFlag] = useState(0)
  let [result, setResult] = useState(0)

  const getAnswer = (event) => {
    if (event.target.value === 'yes') {
      if (flag === 0) {
        console.log(flag)
        setAnswer(answer + 1)
        setFlag(flag + 1)
      } else {
        setAnswer(answer)
      }
    } else {
      if (flag !== 0) {
        console.log(flag)
        setAnswer(answer - 1)
        setFlag(flag - 1)
      } else {
        setAnswer(answer)
      }
    }
  }

  const getReset = () => {
    setAnswer(0)
    setFlag(0)
    setResult(result + answer)
  }

  const getResult = () => {
    setAnswer(0)
    setFlag(0)
    setResult(0)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={
          <Start store={store} getReset={getReset} getAnswer={getAnswer} getResult={getResult} result={result} />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
