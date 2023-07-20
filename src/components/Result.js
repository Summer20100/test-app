import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Result = (props) => {
  return (
    <div>
      <div className='test-name'>
        {props.testName}
      </div>
      <div className='result-wrapper'>
        <h2 className='result-title'>RIGHT ANSWERS :</h2>
        <div className='result-count'>{ props.result }</div>
        <NavLink to='/'>
          <input onClick={ props.getResult } className='result-button' type='button' value='RESTART' />
        </NavLink>
      </div> 
    </div>
  )
}

export default Result;