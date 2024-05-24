import { useState } from 'react'

export interface CounterProps {
  initialCount: number
}

export const Counter = ({ initialCount }: CounterProps) => {
  const [count, setCount] = useState(initialCount)

  const increment = () => {
    setCount(prev => prev + 1)
  }

  return (
    <div className="flex">
      <p className="m-0 py-3 px-4 border border-gray-300 border-r-0 rounded-l-md">
        {count}
      </p>
      <button
        className="button py-3 px-4 rounded-r-md bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-colors duration-200 ease-in-out border border-gray-300"
        onClick={increment}
      >
        Increment
      </button>
    </div>
  )
}