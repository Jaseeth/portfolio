import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import PageMeta from './components/PageMeta'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
export default function App() {
  return <><a className="skip-link" href="#main-content">Skip to content</a><PageMeta/><ScrollToTop/><Navbar/><Routes>
    <Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/projects" element={<Projects/>}/><Route path="/projects/:slug" element={<ProjectDetails/>}/><Route path="/experience" element={<Experience/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/>
  </Routes><Footer/></>
}
