import React from 'react'

class PanelButton extends React.Component {
  render() {
    return (
      <this.props.ButtonContainer onClick={this.props.callback}>
        {this.props.label}
      </this.props.ButtonContainer>
    )
  }
}

export default PanelButton
