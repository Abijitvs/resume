
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import logo from './images/logo.jpeg'
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Login from './components/login';
import Signin from './components/signup';
import Resumepage from './components/resumepage';
import Templatespage from './components/templatespage';
import Registration from './components/registration';
import TemplatesPage1 from './components/registration';
function App() {
  return (
    <div className='container-fluid'>
    <header style={{backgroundColor:' #333',paddingLeft:'20px'}}>
    <a href='#' className='logo' ><img src={logo} alt='' style={{width:"40px",height:"40px",borderRadius:"25px"}}/> Resume Builder </a>
      <nav className='header'>
        <ul className='ul'>
          <li className='li'><Link to={"/"} className='a'>home</Link></li>
          <li className='li'><Link to={"/about"} className='a' >about</Link></li>
          <li className='li'><Link to={"/contact"} className='a'>contact</Link></li>
        </ul>
      </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/resumepage' element={<Resumepage/>}/>
        <Route path='/templatespage' element={<Templatespage/>}/>
        <Route path='/registration' element={<TemplatesPage1/>}/>
      </Routes>
    </div>
  );
}

export default App;
