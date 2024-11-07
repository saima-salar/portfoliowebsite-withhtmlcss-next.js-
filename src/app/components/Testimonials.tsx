import Image from 'next/image';
import React from 'react';
import testimonial from '../../styles/testimonial.module.css';

const Testimonials = () => {
  return (
    <section className={testimonial.testimonials} id="testimonials">
      <div className={testimonial['testimonials-box']}>
        <h2 className={testimonial.heading}>Testimonials</h2>
        <div className={testimonial.wrapper}>
          
          <div className={testimonial['testimonial-item']}>
            <Image 
              src="/alex-mccarthy-RGKdWJOUFH0-unsplash.jpg" 
              alt="Testimonial image for Marilyn"
              width={100} 
              height={100} 
            />
            <h2>Marilyn</h2>
            <div className={testimonial.rating}>
              <i className='bx bxs-star' id={testimonial.star}></i>
              <i className='bx bxs-star' id={testimonial.star}></i>
              <i className='bx bxs-star' id={testimonial.star}></i>
              <i className='bx bxs-star' id={testimonial.star}></i>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias modi quod perspiciatis odio dolores dolore praesentium libero voluptatibus, facilis est.</p>
          </div>

          <div className={testimonial['testimonial-item']}>
            <Image 
              src="/stefan-stefancik-QXevDflbl8A-unsplash.jpg" 
              alt="Testimonial image for Julia"
              width={100} 
              height={100} 
            />
            <h2>Julia</h2>
            <div className={testimonial.rating}>   
              <i className='bx bxs-star' id={testimonial.star}></i>
              <i className='bx bxs-star' id={testimonial.star}></i>
              <i className='bx bxs-star' id={testimonial.star}></i>
              <i className='bx bxs-star' id={testimonial.star}></i>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias modi quod perspiciatis odio dolores dolore praesentium libero voluptatibus, facilis est.</p>
          </div>

          <div className={testimonial['testimonial-item']}>
            <Image 
              src="/woman-application-portfolio-25976095.webp" 
              alt="Testimonial image for Rebecca"
              width={100} 
              height={100} 
            />
            <h2>Rebecca</h2>
            <div className={testimonial.rating}>
              <i className="bx bxs-star" id={testimonial.star}></i>
              <i className="bx bxs-star" id={testimonial.star}></i>
              <i className="bx bxs-star" id={testimonial.star}></i>
              <i className="bx bxs-star" id={testimonial.star}></i>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias modi quod perspiciatis odio dolores dolore praesentium libero voluptatibus, facilis est.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
