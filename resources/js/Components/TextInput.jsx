import React, { useEffect, useRef } from 'react'

export default function TextInput({
  type = 'text',
  name,
  value,
  className,
  autoComplete,
  required,
  isFocused,
  handleChange,
  rightElement,
}) {
  const input = useRef()

  useEffect(() => {
    if (isFocused) {
      input.current.focus()
    }
  }, [])

  return (
    <div className="relative flex flex-col items-start">
      <input
        type={type}
        name={name}
        value={value}
        className={
          `border-emerald-300 focus:border-teal-300 dark:focus:border-teal-600 focus:ring focus:ring-teal-200 dark:focus:ring-teal-800 focus:ring-opacity-50 rounded-md shadow-sm ` +
          className
        }
        ref={input}
        autoComplete={autoComplete}
        required={required}
        onChange={(e) => handleChange(e)}
      />
      {!!rightElement && rightElement}
    </div>
  )
}
