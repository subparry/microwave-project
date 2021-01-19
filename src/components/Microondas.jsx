import React from 'react'

class Microondas extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }

    this.handleDoor = this.handleDoor.bind(this)
    this.start = this.start.bind(this)
  }

  handleDoor() {
    // this.setState((prevState) => ({ isOpen: !prevState.isOpen }))
    this.setState({ isOpen: !this.state.isOpen })
  }

  start() {
    if (this.state.isOpen) {
      alert('cierra la puerta ctm')
      return
    }

    // la puerta esta cerrada entonces...
    // logica para empezar el microondas...
    alert('Microwaveando')
  }

  render() {
    return (
      <div>
        <h1>Microondas</h1>
        <h2>{this.state.isOpen ? 'Abierto' : 'Cerrado'}</h2>
        <button onClick={this.handleDoor}>
          {this.state.isOpen ? 'Cerrar' : 'Abrir'}
        </button>
        <button onClick={this.start}>Start</button>
      </div>
    )
  }
}

export default Microondas
