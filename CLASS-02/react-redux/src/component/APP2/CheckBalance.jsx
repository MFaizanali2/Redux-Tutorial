import { useSelector } from "react-redux"

const CheckBalance = () => {
    const bankData = useSelector((state)=>state?.bank?.amount)
    console.log(bankData)
  return (
    <div>
      <h1>Your Current Balance Amount is : {bankData}</h1>
    </div>
  )
}

export default CheckBalance
