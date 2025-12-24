import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setItem(data));
  }, [id]);

  return (
    <div className="p-6">
      {item ? <ItemDetail item={item} /> : <p>Cargando...</p>}
    </div>
  );
}

export default ItemDetailContainer;
