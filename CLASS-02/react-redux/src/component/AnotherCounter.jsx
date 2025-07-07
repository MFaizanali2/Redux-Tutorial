import React from 'react'
import { useSelector } from 'react-redux'

const AnotherCounter = () => {
    const data = useSelector((state)=>state)
  return (
    <div>
      <h1>{data.counter}</h1>
    </div>
  )
}

export default AnotherCounter
