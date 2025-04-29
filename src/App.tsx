import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Header from './Layout/Header'
import Dashboard from './Components/Dashboard'
// import Employees from './Components/Employees'
const App :React.FC=()=> {
  
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      {/* <Route path="/employees" element={<Employees />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/aboutUs" element={<AboutUs />} /> */}
    </Routes>

    
    </BrowserRouter>
  )
}

export default App
