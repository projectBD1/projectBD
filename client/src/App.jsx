import Homesample from './Components/Homesample'

import {Routes, Route} from 'react-router-dom'

function App(){
  return(
    <Routes>
      <Route path="/" element={<Homesample/>}/>
    </Routes>
  )
}
export default App