'use client';

import { useState } from 'react'

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const [count, setCount] = useState(value);
  
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <span className="text-9xl">{count}</span>

      <div className="flex gap-4">
        <button
          onClick={increment}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          +
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          -
        </button>
        <button
          onClick={() => setCount(0)}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>


      </div></div>
  )
}
