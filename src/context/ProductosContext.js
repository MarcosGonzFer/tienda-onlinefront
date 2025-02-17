import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
export const ProductosContext = createContext();

// Proveedor del contexto
export const ProductosProvider = ({ children }) => {
  const [filtro, setFiltro] = useState('');

  return (
    <ProductosContext.Provider value={{ filtro, setFiltro }}>
      {children}
    </ProductosContext.Provider>
  );
};

// Hook para acceder al contexto
export const useProductos = () => {
  return useContext(ProductosContext);
};
