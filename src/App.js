import React from 'react'
import Microwave from './components/Microwave'

class App extends React.Component {
  render() {
    return (
      <>
        <Microwave />
      </>
    )
  }
}

export default App

// caja => contiene todo
// interior => donde se mete la comida
// puerta => tiene 2 estados, abierta y cerrada
// panel de botones => agrupa todos los botones
// LED display => reloj, algun error?, info
// botones
//   - numericos
//   - funcion
//   - puerta

// cada uno de estos componentes del MW va a ser un componente individual
// OOP
