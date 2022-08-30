import React from 'react'
import { useState } from 'react';
import StringCleaner from "./StringCleaner";
import './MissionForm.css';

function MissionForm() {
  const [message, setMessage] = useState('');
  const [formatted, setFormatted] = useState('');

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    setFormatted(StringCleaner(message));
    setMessage('');
  };

  return (
    <div>
      <input id="message" name="message" type="text"  onChange={handleChange} value={message} placeholder="enter string"/>
      <button onClick={handleClick}>Format String</button>
      <h2>{formatted}</h2>
    </div>
  );
};

export default MissionForm