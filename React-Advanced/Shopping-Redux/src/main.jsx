
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './redux/Store.jsx'
import { Toaster } from "react-hot-toast";
createRoot(document.getElementById('root')).render(


  <BrowserRouter>
   <Provider store={store}>
   <App />
   <Toaster/>
 </Provider>
  </BrowserRouter>


)