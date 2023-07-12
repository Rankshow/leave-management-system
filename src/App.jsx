import Header from './Component/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import AddItem from './Component/AddItem';
import View from './Component/View';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  
  return (
    <>
    <div>
       <Header />
       <ToastContainer position='top-center'/>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/addItem' element={<AddItem />} />
            <Route path='/update/:id' element={<AddItem />} />
            <Route path='/view/:id' element={<View />} />
            <Route path='/about' element={<About />} />
         </Routes>
     </div>
    </>
  )
}

export default App
