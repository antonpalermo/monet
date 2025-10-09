import React from "react"

import { Input } from "@/components/ui/input"
import { useState } from "react"

export type DebounceInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  initialValue: string | number
  onChange: (value: string | number) => void
  debounce?: number
}

export const DebounceInput: React.FC<DebounceInputProps> = ({
  initialValue,
  onChange,
  debounce = 500,
  ...props
}) => {
  const [value, setValue] = useState(initialValue)

  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <Input value={value} onChange={e => setValue(e.target.value)} {...props} />
  )
}
