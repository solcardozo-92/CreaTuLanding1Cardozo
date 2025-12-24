import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* Ruta catálogo completo */}
        <Route path="/" element={<ItemListContainer />} />
        
        {/* Ruta filtrado por categorías */}
        <Route path="/category/:id" element={<ItemListContainer />} />
        
        {/* Ruta para el detalle de cada producto específico */}
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        
        {/* Ruta para manejar errores 404 */}
        <Route 
          path="*" 
          element={
            <div className="flex flex-col items-center justify-center h-screen">
              <h1 className="text-4xl font-bold text-purple-600">404</h1>
              <p className="text-xl">Ups! La página que buscas no existe.</p>
            </div>
          } 
        />
      </Routes>
    </>
  );
}

export default App;