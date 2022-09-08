import React from 'react'
import Input from './Input'

const NumberInput = (props) => {
  return (
    <Input {...props}></Input>
  )
}

NumberInput.defaultProps = {
  type: "number",
  min: "0"
}

export default NumberInput
