import Layout from "./components/Layout/Layout"
import { Route, Routes } from 'react-router-dom'
import './app.scss'
import Home from "./pages/Home"
import Users from "./pages/Users"
import AboutUs from "./pages/AboutUs"
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/users" element={<Users />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
