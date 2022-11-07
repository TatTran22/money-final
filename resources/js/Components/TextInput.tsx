import { ChangeEventHandler, FocusEventHandler, useEffect, useRef } from 'react'

interface TextInputProps {
  type: string
  name: string
  value?: string | number | readonly string[]
  className: string
  autoComplete?: string
  required?: boolean
  onFocus?: FocusEventHandler
  onBlur?: FocusEventHandler
  isFocused?: boolean
  handleChange: ChangeEventHandler
  rightElement?: JSX.Element
}

export default function TextInput({
  type = 'text',
  name,
  value,
  className = '',
  autoComplete,
  required,
  isFocused,
  onFocus,
  onBlur,
  handleChange,
  rightElement,
}: TextInputProps) {
  const input = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (isFocused && input.current) {
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
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={(e) => handleChange(e)}
      />
      {!!rightElement && rightElement}
    </div>
  )
}
