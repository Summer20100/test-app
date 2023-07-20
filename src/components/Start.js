import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Question from './Question';
import Result from './Result';
import '../App.css';

export const Start = (props) => {
  let store = props.store

  let start = store.map((elem, ind) => {
    let path = '/t' + (ind + 1)
    let questions = elem.questions

    let questionArray = questions.map((question, ind) => {
      let next
      (ind < questions.length - 1) ? next = 'NEXT' : next = 'RESULT'

      ind++
      let link
      (ind <= questions.length - 1) ? link = (path + (ind + 1)) : link = path + '/result'

      return (
        <Question testName={elem.testName} next={next} question={question} path={path + ind} ind={ind} link={link} />
      )
    })

    return (
      <div>
        <NavLink to={path + 1}>
          <input className='start-button' type='button' onClick={() => console.log(path)} value={elem.testName} />
        </NavLink>
        {questionArray}
        <Routes>
            <Route path={path + '/result'} element={
              <div>
                <Result testName={elem.testName} getResult={props.getResult} result={props.result} />
              </div>
            } />
        </Routes>
      </div>
    )
  })

  return (
    <div className="container">
      {start}
    </div>
  )
}

export default Start;