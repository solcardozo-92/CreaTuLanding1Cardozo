import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow flex gap-8">
      <img src={item.thumbnail} alt={item.title} className="w-1/2 rounded-lg" />
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl font-bold">{item.title}</h2>
        <p className="text-gray-600 my-4">{item.description}</p>
        <span className="text-2xl font-bold text-purple-600">${item.price}</span>
        
       
        <ItemCount stock={item.stock} initial={1} />
      </div>
    </div>
  );
}

export default ItemDetail;