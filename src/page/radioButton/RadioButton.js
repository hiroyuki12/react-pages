import React from 'react';
import { Link } from 'react-router-dom';

function RadioButton() {
  const [val, setVal] = React.useState('cat');
  const handleChange = e => setVal(e.target.value);
  return (
    <>
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

      <Link to='/react-pages'>/react-pagesへ</Link> 
    </>
  )
}

export default RadioButton;
