import React from 'react';
import style from '../../styles/style.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={style.header}>
      <a href="#home" className={style.logo} aria-label="Home">
        Saima <span>Salar</span>
      </a>
      <i className={style['bx bx-menu']} id={style['menu-icon']} aria-label="Menu icon"></i>
      <nav className={style.navbar}>
        <Link href="/home" className={style.active}>Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/services">Services</Link>
        <Link href="/testimonials">Testimonials</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;