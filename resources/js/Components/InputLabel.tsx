export default function InputLabel({
  forInput,
  value,
  className,
  children,
}: {
  forInput: string
  value?: string
  className?: string
  children?: JSX.Element
}) {
  return (
    <label
      htmlFor={forInput}
      className={`block font-medium text-sm text-gray-700 dark:text-gray-100 ${className ? className : ''}`}
    >
      {value ? value : children}
    </label>
  )
}
