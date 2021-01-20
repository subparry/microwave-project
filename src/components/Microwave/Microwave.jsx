import React from 'react'
import Box from '../Box'
import Door from '../Door'
import Panel from '../Panel'

class Microwave extends React.Component {
  render() {
    return <Box Door={Door} Panel={Panel} />
  }
}

export default Microwave
