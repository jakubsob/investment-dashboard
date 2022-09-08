import React from 'react'
import Input from './Input'

const TextInput = (props) => {
  return (
    <Input {...props}></Input>
  )
}

TextInput.defaultProps = {
  type: "text"
}

export default TextInput
