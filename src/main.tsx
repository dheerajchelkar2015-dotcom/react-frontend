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
import OAuthSuccess from './pages/OAuthSuccess.tsx'
import OAuthFailure from './pages/OAuthFailure.tsx'
import CartPage from './pages/products/Cart/CartPage.tsx'
import AddProduct from './pages/products/AddProduct.tsx'
import CategoryPage from './pages/categories/CategoryPage.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
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
          <Route path="add-product" element={<AddProduct />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="add-categories" element={<CategoryPage />} />
        </Route>

        <Route path='oauth/success' element={<OAuthSuccess/>}/>
        <Route path='oauth/failure' element={<OAuthFailure/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
