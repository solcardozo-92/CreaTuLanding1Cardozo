import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const url = "https://dummyjson.com/products";
    const urlCategories = `https://dummyjson.com/products/category/${id}`;

    fetch(id ? urlCategories : url)
      .then(res => res.json())
      .then(data => setItems(data.products));
  }, [id]);

  return <ItemList items={items} />;
}

export default ItemListContainer;
