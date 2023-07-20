import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import '../App.css';
import Answer from './Answer'

const Question = (props) => {
  let question = props.question
  let count = 0
  let type = ''

  for (let flag of question.answers) {
    if (flag.flag) count++
    count > 1 ? type = 'checkbox' : type = 'radio'
  }

  let answerArray = question.answers.map((el, ind) => {
    let nameId = 'q' + el.id

    return (
      <Answer ind={props.ind} type={type} nameId={nameId} flag={el.flag} name={question.nameId} title={el.title} />
    )
  })

  return (
    <Routes>
      <Route path={props.path} element={
        <div className='card-wrapper'>
          <div className='test-name'>
            {props.testName}
          </div>
          <div className='test-wrapper'>
            <div>
              <h3><span>{'Вопрос №' + props.ind + ':'}</span>{question.question}</h3>
            </div>
            {answerArray}
            <NavLink to={props.link} >
              <input onClick={() => console.log(props.link)} className='question-button question-button-next' type='button' value={props.next} getReset={props.getReset} getAnswer={props.getAnswer} />
            </NavLink>
          </div>
        </div>
      } />
    </Routes>
  )
}

export default Question;