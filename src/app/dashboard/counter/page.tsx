
import { useState } from "react";

export const metadata = {
  title: "Counter Page",
  description: "Contador Client Side",
};


export default function CounterPage() {
  
  const [count, setCount] = useState(5);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };


  return (
    <div className="flex flex-col items-center justify-center h-screen w-full h-full">
      <span>Productos del Carrito</span>
      <span className="text-9xl">{count}</span>
     
      </div>
    </div>
  );
}