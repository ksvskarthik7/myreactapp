import React, { useState } from 'react';

export default function App() {
  const[content,setcontent]=useState([])


  return (
    <>
      <input placeholder='click from below' value={content}/><button> =</button><hr/>
      <button onClick={() => setcontent((content)=>[...content,'+'])}>+</button>
      <button>-</button>
      <button onClick={() => setcontent([...content,'4'])}>4</button>
      <button>5</button>
    </>
  );
}
