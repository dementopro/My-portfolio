import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/img/logo.svg'
import NavIcon1 from '../assets/img/nav-icon1.svg'
import NavIcon2 from '../assets/img/nav-icon2.svg'
import NavIcon3 from '../assets/img/nav-icon3.svg'
import { useState , useEffect } from 'react';

export const NavBar =() => {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(true)
    useEffect(( ) => {
    const onScroll = () => {
        if(window.scrollY > 50){
         setScrolled(true)
        }else {
            setScrolled(false)
        }
    }
    window.addEventListener('scroll',onScroll)
    return () => window.removeEventListener('scroll' , onScroll)
    },{})
  const onUpdateActiveLink = (route)=> {
   setActiveLink(route)
  }

  return (
    <Navbar  expand="lg" className={ scrolled ? 'scrolled':''}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"  className={activeLink === 'home' ? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('home')} >Home</Nav.Link>
            <Nav.Link href="#skill" className={activeLink === 'skill' ? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('skill')} >Skill</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('project')} >Project</Nav.Link>
          
          </Nav>
          <span className='navbar-text'>
            <div className="social-icon">
                <a href="#"><img src={NavIcon1} alt="" /></a>
                <a href="#"><img src={NavIcon2} alt="" /></a>
                <a href="#"><img src={NavIcon3} alt="" /></a>
            </div>
            <button className='vvd' onClick={() => console.log('hello')}> <span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

