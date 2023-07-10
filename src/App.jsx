import Header from './Component/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';


function App() {
  
  return (
    <>
    <div>
       <Header />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
         </Routes>
     </div>
    </>
  )
}

export default App
