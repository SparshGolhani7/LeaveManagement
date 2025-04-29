import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Header from './Layout/Header'
import Dashboard from './Components/Dashboard'

const App :React.FC=()=> {
  
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Dashboard />} />
   
    </Routes>

    
    </BrowserRouter>
  )
}

export default App
