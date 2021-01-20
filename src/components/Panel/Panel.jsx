import React from 'react'
import styled from 'styled-components'
import PanelButton from '../PanelButton'
import createNumericButtons from '../../utils/createNumericButtons'
import { SquareButton } from './UIComponents'

const Container = styled.div`
  padding: 15px 5px;
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

class Panel extends React.Component {
  constructor(props) {
    super(props)
    this.buttons = [
      ...createNumericButtons([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], (n) => {
        alert(n)
      }),
      {
        label: 'Start',
        callback: () => {},
        ButtonContainer: SquareButton,
      },
    ]
  }
  render() {
    return (
      <Container>
        {this.buttons.map((b) => (
          <PanelButton
            label={b.label}
            callback={b.callback}
            ButtonContainer={b.ButtonContainer}
          />
        ))}
      </Container>
    )
  }
}

export default Panel
