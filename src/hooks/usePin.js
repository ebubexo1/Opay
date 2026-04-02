import { useState } from "react"

export function usePin(length = 4, onComplete) {
  const [digits, setDigits] = useState([])

  const press = (num) => {
    if (digits.length >= length) return
    const next = [...digits, num]
    setDigits(next)
    if (next.length === length) {
      setTimeout(() => {
        if (onComplete) onComplete(next.join(""))
        setDigits([])
      }, 350)
    }
  }

  const del = () => setDigits((d) => d.slice(0, -1))

  return { digits, press, del }
}
