import React, { useContext } from 'react'
import { foodContext } from './Context'

function Test() {
    const { foodData } = useContext(foodContext);

console.log(foodData)
  return (
    <div>Test</div>
  )
}

export default Test