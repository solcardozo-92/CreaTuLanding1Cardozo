import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col items-center bg-white">
      <img 
        src={item.thumbnail} 
        alt={item.title} 
        className="h-40 w-full object-cover rounded-md"
      />
      <h3 className="text-lg font-bold mt-2">{item.title}</h3>
      <p className="text-gray-600">${item.price}</p>
      
      {/* Boton para detalle de producto */}
      <Link 
        to={`/item/${item.id}`} 
        className="mt-3 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors"
      >
        Ver Detalle
      </Link>
    </div>
  );
}

export default Item;