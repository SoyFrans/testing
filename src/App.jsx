import Header from './Header'
import {BrowserRouter, Route , Routes} from 'react-router-dom';
import Aca from './Aca';
import Hola from './Hola';
function App() {
  return (
    <>
      <div>
          <BrowserRouter>
            <Header/>
            <Routes>
              <Route path="Hola" element={<Hola/>}/>
              <Route path="Aca" element={<Aca/>}/>
            </Routes>
          </BrowserRouter>
      </div>
    </>
  )
}

export default App
