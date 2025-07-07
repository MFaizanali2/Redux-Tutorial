
import { Route, Routes } from 'react-router-dom'
import CheckBalance from './component/APP2/CheckBalance'
import Deposit from './component/APP2/Deposit'
import Withdraw from './component/APP2/Withdraw'
// import CounterApp from './component/CounterApp'

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<CheckBalance />} path='/'/>
        <Route element={<Deposit />} path='/deposit'/>
        <Route element={<Withdraw />} path='/withdraw'/>
      </Routes>
    </div>
  )
}

export default App