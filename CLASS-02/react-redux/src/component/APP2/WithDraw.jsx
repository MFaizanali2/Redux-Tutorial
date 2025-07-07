import { useState } from "react"
import { useDispatch } from "react-redux"

const Withdraw = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState(0)
  return (
    <div>
      <h1>WithDraw Amount</h1>
      <input type="number" onChange={(e)=>setValue(e.target.value)}/>
      <button onClick={()=>dispatch({type: "deposit", payload:Number(value)})}>WithDraw Amount</button>
    </div>
  )
}

export default Withdraw
