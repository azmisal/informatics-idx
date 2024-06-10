import React from 'react'
import styles from "@/Styles/Contact.module.css"
const Contact = () => {
  return (
    <div className={styles.contact}>
             <div className={styles.col1}>
                    <h1>CONTACT INFO</h1>
                    <div className={styles.subcol1}>
                        <p>C V Raman Laboratory of
                        Ecological Informatics,
                        School of Informatics,
                        Digital University Kerala,
                        Technocity Campus,
                        Mangalapuram P.O, Pallippuram.
                        </p>
                    </div>
                    <div className={styles.subcol2}>
                          <p>Phone: (0471) 2 78 80 39</p>
                      </div>
                      <div className={styles.subcol2}>
                      <p>ecologicalinformatics@duk.ac.in</p>
                      </div>
             </div>
             <div className={styles.col2}>
                        <h1>CONTACT</h1>
                        <h2>SEND US A QUICK MESSAGE</h2>
                        <label >Name</label>
                        <input type='text'></input>
                        <label>Subject</label>
                        <input type='text'></input>
                        <label>Email Address</label>
                        <input type='email' ></input>
                        <label>Message</label>
                        <textarea className={styles.ctextarea}></textarea>
                        <button>Send Message</button>
             </div>
    </div>
  )
}

export default Contact;


