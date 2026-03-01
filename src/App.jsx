import { useState } from 'react';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, useNavigate } from 'react-router-dom';
import Layout from './layout/ProducsLayout';
import Home from './pages/Home';
import { Route } from 'react-router-dom';
import ProductsList from './pages/ProductsList';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

function App() {

  const [isAuth, setIsAuth] = useState(false)
  const navigate = useNavigate()
  function onLogin(){
    setIsAuth(true)
  }
  function onLogout(){
    setIsAuth(false)
  }

 function handleLogout() {
        onLogout();        // set isAuth = false
        navigate("/");     // redirect to home
  }
  return (
    <Routes> 
      {/* Main routes */}
      <Route element={<Layout isAuth={isAuth} onLogout={handleLogout} />} >
        <Route path="/" element={<Home />}/>
        <Route path='/products' element={<ProductsList />}/>
        <Route path="/products/:id" element={<ProductDetails />}/>
        <Route path='/login' element={<Login onLogin={onLogin}/>} />
        <Route path='*' element={<NotFound />} />

        <Route 
        path='/dashboard'
        element={
          <ProtectedRoute isAuth={isAuth}>
            <Dashboard />
          </ProtectedRoute>
        }
        />
      </Route>
    </Routes>
  )
}

export default App
