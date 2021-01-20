import styled from 'styled-components'

export const RoundButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid white;
  color: white;
  background-color: black;
  transition: background-color 0.3s, color 0.3s;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
`

export const SquareButton = styled(RoundButton)`
  width: 80px;
  border-radius: 10px;
`
