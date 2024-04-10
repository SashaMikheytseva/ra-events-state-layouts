import React from 'react';
import './IconSwitch.css';

export const IconSwitch = ({icon, onSwitch}) => {
  return (
    <div className='switch'>
        <button className='material-icons' onClick={() => onSwitch(icon)}>{icon}</button>
    </div>
  )
}
