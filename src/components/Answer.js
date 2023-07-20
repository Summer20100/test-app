import React from 'react';
import '../App.css';

let j = 0

const Answer = (props) => {
  j++
  return (
    <div className='question-inputs'>
      <input type={props.type} name={props.nameId} id={'id' + j} flag={props.flag} />
      <label htmlFor={'id' + j}>
        {props.title}
      </label>
    </div>
  )
}

export default Answer