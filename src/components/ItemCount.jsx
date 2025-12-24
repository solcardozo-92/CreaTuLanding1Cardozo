import { useState } from "react";

const ItemCount = ({ stock = 10, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  const add = () => count < stock && setCount(count + 1);
  const sub = () => count > 1 && setCount(count - 1);

  return (
    <div className="flex flex-col items-center mt-4">
      <div className="flex items-center gap-4 mb-4">
        <button onClick={sub} className="bg-gray-200 px-3 py-1 rounded">-</button>
        <span className="text-xl font-bold">{count}</span>
        <button onClick={add} className="bg-gray-200 px-3 py-1 rounded">+</button>
      </div>
      <button className="bg-purple-600 text-white px-6 py-2 rounded-lg w-full">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;