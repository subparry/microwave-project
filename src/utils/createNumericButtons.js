import { RoundButton } from '../components/Panel/UIComponents'

const createNumericButtons = (numbers, stateSetter) => {
  return numbers.map((n) => {
    return {
      label: n,
      callback: () => stateSetter(n),
      ButtonContainer: RoundButton,
    }
  })
}

export default createNumericButtons
