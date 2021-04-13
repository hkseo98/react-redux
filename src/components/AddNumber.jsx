import { useState } from 'react';

export default function AddNumber(props) {
    let [size, setSize] = useState(1);
  
    return (
      <div>
        <h1>Add Number</h1>
        <input type="button" value="+" onClick={
          function() {
            // props.onClick(size); 
            props.onClick(size);
          }
        }></input>
        <input type="text" value={size} onChange={
          function(e) {
            setSize(Number(e.target.value))
          }
        }></input>
      </div>
    )
  }