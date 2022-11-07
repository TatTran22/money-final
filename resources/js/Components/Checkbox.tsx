import React from 'react'

interface CheckboxProps {
    name?: string,
    value: number | string,
    handleChange: React.ChangeEventHandler
}

const Checkbox: React.FC<CheckboxProps> =({ name, value, handleChange }) =>{
  return (
    <input
      type="checkbox"
      name={name}
      value={value}
      className="rounded shadow-sm text-emerald-600 border-emerald-300 focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
      onChange={(e) => handleChange(e)}
    />
  )
}

export default Checkbox
