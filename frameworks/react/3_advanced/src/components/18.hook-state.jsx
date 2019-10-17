import React, { useState } from 'react';

function HookStateExample() {
  const [count, setCount] = useState(10);

  return (
    <div>
      <p>Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default HookStateExample;

