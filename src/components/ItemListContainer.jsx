function ItemListContainer({ greeting }) {
  return (
    <main className="p-10 text-center">
      <h2 className="text-3xl font-semibold text-purple-600">
        {greeting}
      </h2>
    </main>
  );
}

export default ItemListContainer;
