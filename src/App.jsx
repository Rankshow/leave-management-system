import Header from './Component/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import AddItem from './Component/AddItem';


function App() {
  
  return (
    <>
    <div>
       <Header />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/addItem' element={<AddItem />} />
         </Routes>
     </div>
    </>
  )
}

export default App
