import { ChangeEventHandler, ComponentProps, FocusEventHandler, useEffect, useRef } from 'react'

interface TextAreaProps extends Omit<ComponentProps<'textarea'>, 'color' | 'ref'> {
  rows: number
  name: string
  value?: string | number | readonly string[]
  className: string
  autoComplete?: string
  required?: boolean
  onFocus?: FocusEventHandler
  onBlur?: FocusEventHandler
  isFocused?: boolean
  handleChange: ChangeEventHandler
}

export default function TextArea({
  rows = 4,
  name,
  value,
  className = '',
  autoComplete,
  required,
  isFocused,
  onFocus,
  onBlur,
  handleChange,
}: TextAreaProps) {
  const input = useRef<HTMLTextAreaElement | null>(null)

  useEffect(() => {
    if (isFocused && input.current) {
      input.current.focus()
    }
  }, [])

  return (
    <div className="relative flex flex-col items-start">
      <textarea
        name={name}
        rows={rows}
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
    </div>
  )
}
