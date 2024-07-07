import React from 'react'
 const cardsEjemplo = [
    { id: 1, name: 'Tarjeta 1' },
    { id: 2, name: 'Tarjeta 2' },
    { id: 3, name: 'Tarjeta 3' }
  ]
  export const nombresTarjetas = cardsEjemplo.map((card) => {
    return card.name + "string"; // Retorna un array con los nombres de las tarjetas ['Tarjeta 1', 'Tarjeta 2', 'Tarjeta 3']
  })