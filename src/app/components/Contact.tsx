import React from 'react';
import contact from '../../styles/contact.module.css'; 

const Contact = () => {
  return (
    <section className={contact.contact} id={contact.contact}>
    <h2 className={contact.heading}>Contact <span>me</span></h2>
    <form action="">
        <div className={contact['input-group']}>
            <div className={contact['input-box']}>
                <input type="name" placeholder="Full Name"/>
                <input type="email" placeholder="Email"/>
            </div>
            <div className={contact['input-box']}>
                <input type="number" placeholder="Phone Number"/>
                <input type="text" placeholder="subject"/>
            </div>
        </div>
        <div className={contact['input-group-2']}>
            <textarea name="" id="" cols={30} rows={10} placeholder="Your Message"></textarea>
            <input className={contact.btn} type="submit" value="Send Message" />
        </div>
    </form>
</section>
  );
};

export default Contact;


