
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './pages/Login.tsx'
import SignUp from './pages/SignUp.tsx'
import Services from './pages/Services.tsx'
import About from './pages/About.tsx'
import RootLayout from './pages/RootLayout.tsx'
import UserLayout from './pages/users/UserLayout.tsx'
import UserHome from './pages/users/UserHome.tsx'
import UserProfile from './pages/users/UserProfile.tsx'
import { CartProvider } from './context/CartContext.tsx'
import Cart from './pages/users/Cart.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <CartProvider>
    <Routes>
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/dashboard' element={<UserLayout/>}>
          <Route index element={<UserHome/>} />
          <Route path='profile' element={<UserProfile/>}/>
          <Route path="cart" element={<Cart />} />
        </Route>
      </Route>
    </Routes>
    </CartProvider>
  </BrowserRouter>
)
