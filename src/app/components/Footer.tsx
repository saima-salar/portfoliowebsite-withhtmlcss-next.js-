import React from 'react'
import footer from '../../styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={footer.footer}>
    <div className={footer.social}>
        <a href="#"><i className='bx bxl-linkedin'>
        </i></a>
        <a href="#"><i className='bx bxl-github'></i></a>
        <a href="#"><i className='bx bxl-instagram'></i></a>
        <a href="#"><i className='bx bxl-twitter'></i></a>
    </div>
    <ul className={footer.list}>
        <li>
            <a href="#">FAQ</a>
        </li>
        <li>
            <a href="#services">Services</a>
        </li>
        <li>
            <a href="#">About Me</a>
        </li>
        <li>
            <a href="#contact">Contact</a>
        </li>
        <li>
            <a href="#testimonials">Testimonials</a>
        </li>
    </ul>
    <p className={footer.copyright}>© Saima Salar | All Rights Reserved</p>
    
        </footer>
    
  )
}

export default Footer