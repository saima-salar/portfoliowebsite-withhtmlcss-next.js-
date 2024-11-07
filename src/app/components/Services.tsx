import React from 'react'
import service from '../../styles/service.module.css';

const Services = () => {
  return (
    <section className={service.services} id="services">
        <h2 className={service.heading}>Services</h2>
<div className={service['services-container']}>
    <div className={service['service-box']}>
        <div className={service['service-info']}>
            <h4>UI/UX Design Services</h4>
            <p>I specialize in creating visually appealing user interfaces that prioritize user experience. By combining design principles with user research, I craft designs that are not only beautiful but also enhance usability and engagement across digital platforms.</p>
        </div>
    </div>
    <div className={service['service-box']}>
        <div className={service['service-info']}>
            <h4>Full-Stack Developer</h4>
            <p>I develop complete web applications, handling both front-end and back-end. From intuitive user interfaces to robust server-side logic, I deliver seamless digital solutions.</p>
        </div>
    </div>
    <div className={service['service-box']}>
        <div className={service['service-info']}>
            <h4>Custom GPT Solutions</h4>
            <p>I am currently learning how to build AI models using GPT technology. Soon, I will offer services to create tailored AI solutions for content generation, automation, and customer support, customized to fit specific business needs.
            </p>
        </div>
    </div>
    <div className={service['service-box']}>
        <div className={service['service-info']}>
            <h4> Graphic Design & Video Animation</h4>
            <p>I create eye-catching visuals and animations that enhance brand communication, from logos to video content. Let's bring your ideas to life!</p>
        </div>
    </div>
</div>
    </section>

  )
}

export default Services