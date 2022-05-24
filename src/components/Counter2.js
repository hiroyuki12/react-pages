import React, { useState } from "react";

export const Counter2 = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
        <button
          aria-label="Decrement value"
          onClick={() => setCount(current => current - 1)}
        >
          -
        </button>
        <span data-testid="count-element">
          {count}
        </span>
        <button
          aria-label="Increment value"
          onClick={() => setCount(current => current + 1)}
        >
          +
        </button>
    </div>
  );
};
