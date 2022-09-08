import React from 'react'

const Input = ({ id, label, inputProps, register, registerProps }) => {
  return (
    <div className="relative z-0 mb-6 w-full group">
      <input
        {...register(id, { ...registerProps })}
        {...inputProps}
        name={id}
        id={id}
        className="block
          py-2.5 px-0
          w-full
          text-sm bg-transparent
          border-0 border-b-2 border-gray-300 appearance-none
          focus:outline-none focus:ring-0 focus:border-blue-600
          peer"
        placeholder=""
      />
      <label
        htmlFor={id}
        className="absolute text-sm
        duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
        peer-focus:font-medium peer-focus:left-0 peer-focus:text-blue-600 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </div>
  )
}

export default Input
