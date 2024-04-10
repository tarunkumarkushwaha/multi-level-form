import { useState } from 'react'
import './App.css'
// import DemoComponent from './component/DemoComponent'
import DescribesYou from './component/DescribesYou'
import Intrest from './component/Intrest'
import RightPlace from './component/RightPlace'
import MathComfert from './component/MathComfert'
import OnyourWay from './component/OnyourWay'
import ProgressBar from './component/ProgressBar'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const [page, setpage] = useState(1)
  const dispatch = useDispatch()
  // const count = useSelector((state) => state.userdata.value)

  const nextPage = () => {
    if (page > 0 && page !== 5) {
      setpage((prev) => prev + 1)
    }
  }
  const prevPage = () => {
    if (page > 1 ) {
      setpage((prev) => prev - 1)
    }
  }

  return (
    <>
      <ProgressBar prevPage={prevPage} page={page} />
      <div className="flex flex-col justify-center items-center">
      {page == 1 && <DescribesYou nextPage={nextPage} />}
      {page == 2 && <Intrest nextPage={nextPage} />}
      {page == 3 && <RightPlace nextPage={nextPage} />}
      {page == 4 && <MathComfert nextPage={nextPage} />}
      {page == 5 && <OnyourWay nextPage={nextPage} />}
      </div>
    </>
  )
}

export default App
