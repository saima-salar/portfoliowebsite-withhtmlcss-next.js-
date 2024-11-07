import Image from "next/image";
import page from '../../styles/page.module.css';
import 'boxicons/css/boxicons.min.css';


export default function Home() {
  return (
    <section className={page.home} id={page.home}>
      <div className={page['home-content']}>
        <h1>Hi, It's <span>Saima</span></h1>
        <h3 className={page['text-animation']}>I am a <span></span></h3>
        <p>
          I build modern, responsive websites and applications that help businesses grow.
          With expertise in both front-end and back-end technologies, I ensure a smooth
          and effective digital experience.
        </p>
        <div className={page['social-icons']}>
          <a href="#" aria-label="LinkedIn Profile">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="#" aria-label="GitHub Profile">
            <i className="bx bxl-github"></i>
          </a>
          <a href="#">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#">
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        <div className={page['btn-group']}>
          <a href="#" className={page.btn}>Hire</a>
          <a href="#contact" className={page.btn}>Contact</a>
        </div>
      </div>
      <div className={page['home-img']}>
        <Image 
          src="/profilepicture.jpg" 
          alt="Portrait of Saima Salar" 
          width={500} 
          height={500} 
        />
      </div>
 
    </section>
  );
}
