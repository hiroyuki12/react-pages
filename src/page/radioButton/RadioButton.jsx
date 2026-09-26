import React from 'react';
import { Link } from 'react-router-dom';

function RadioButton() {
  const [val, setVal] = React.useState('default');
  const [answer, setAnswer] = React.useState('');
	
  const handleChange = e => setVal(e.target.value);
  const handleAnswer= e => setAnswer('cat');
  return (
    <>
      <label>
        <input
          type="radio"
          value="default"
          onChange={handleChange}
          checked={val === 'default'}
        />
        default 
      </label>
      <label>
        <input
          type="radio"
          value="cat"
          onChange={handleChange}
          checked={val === 'cat'}
        />
        cat 
      </label>
      <label>
        <input
          type="radio"
          value="dog"
          onChange={handleChange}
          checked={val === 'dog'}
        />
        dog 
      </label>

      <p>selected:{val}</p>

      <label>
        <input
          type="radio"
          value="answer"
          onChange={handleAnswer}
          checked={answer === 'answer'}
        />
        answer
      </label>

      <p>answer:{answer}</p>

      <Link to='/react-pages'>/react-pagesへ</Link> 
    </>
  )
}

export default RadioButton;
