import React, { useState, useEffect } from 'react';

function HookEffectExample() {
  const [count, setCount] = useState(10);
  const [otherCount, setOtherCount] = useState(1);

  useEffect(() => {
    console.log('effect run');
  }, [count]); // <- Only re-run the effect if count changes

  return (
    <div>
      <span>Clicked {count} times</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <br />

      <span>Clicked other count {otherCount} times</span>
      <button onClick={() => setOtherCount(otherCount + 1)}>+</button>
      <button onClick={() => setOtherCount(otherCount - 1)}>-</button>
      <span>&lt;= change otherCount not re-run effect </span>
    </div>
  );
}

export default HookEffectExample;

