import { Routes,Route,NavLink,Link } from 'react-router-dom'
import About from './components/About'
import Support from './components/Support'
import NotFound from './components/NotFound'
import Home from './components/Home'
import MainHeader from './components/MainHeader'


function App() {
 

  return (
    <div className="flex flex-col items-center justify-between h-screen bg-gray-100">
  {/* <Routes>
    <Route path='/' element={<div>This Is Home Page</div>}></Route>
    <Route path='/about' element={<div>This Is About Page</div>}></Route>
    <Route path='/support' element={<div>This Is Support Page</div>}></Route>
    <Route path='*' element={<div>Page Not Found</div>}></Route>
  </Routes> */}

  {/* <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/About">About</Link></li>
      <li><Link to="/Support">Support</Link></li>
    </ul>
  </nav> */}

  {/* Navigation */}
  <nav className="w-full bg-blue-600 py-4 shadow-lg">
    <ul className="flex justify-center space-x-8 text-white">
      <li>
        <NavLink to="/" className="hover:text-gray-300">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about" className="hover:text-gray-300">About</NavLink>
      </li>
      <li>
        <NavLink to="/support" className="hover:text-gray-300">Support</NavLink>
      </li>
    </ul>
  </nav>

  {/* <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/about' element={<About></About>}></Route>
    <Route path='/support' element={<Support></Support>}></Route>
    <Route path='*' element={<NotFound></NotFound>}></Route>
  </Routes> */}

  {/* Main content */}
  <div className="flex-1 w-full flex items-center justify-center">
    <Routes>
      <Route path="/" element={<MainHeader />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </div>

  {/* Footer or additional space if needed */}
  <footer className="w-full py-4 bg-blue-600 text-white text-center">
    © 2024 Your Website
  </footer>
</div>

  )
}

export default App
