import React, { useState } from 'react';
import styles from "@/styles/contact.module.css"



const contact = () => {


  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [desc, setdesc] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    const data = { name, email, phone, desc }
    fetch("http://localhost:3000/api/postcontact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    })
  .then(response => response.text())
  .then(data => {
    alert("Thanks for contacting us");
    setname('')
    setemail('')
    setphone('')
    setdesc('')
  })


 }
const handlechange = (e) => {
  const { name, value } = e.target;

  if (e.target.name === 'name') {
    setname(value);
  }
  else if (e.target.name === 'email') {
    setemail(value);
  }
  else if (e.target.name === 'phone') {
    setphone(value);
  }
  else if (e.target.name === 'desc') {
    setdesc(value);
  }
};


return (
  <div className={styles.container}>
    <h1 className={styles.heading}>Contact Us</h1>
    <form onSubmit={handleSubmit}>
      <div className={styles.mb3}>
        <label htmlFor="name" className={styles.formlabel}>Enter your name</label>
        <input type="text" className={styles.input}  value={name} onChange={handlechange}  id="name" name='name' aria-describedby="emailHelp" />
      </div>
      <div className={styles.mb3}>
        <label htmlFor="email" className={styles.formlabel}>Enter your email</label>
        <input type="email" className={styles.input} value={email} onChange={handlechange}  name='email' id="email" aria-describedby="emailHelp" />
        <div id="emailHelp" className={styles.formtext}>We'll never share your email with anyone else.</div>
      </div>
      <div className={styles.mb3}>
        <label htmlFor="phone" className={styles.formlabel}>Phone</label>
        <input type="phone" className={styles.input} value={phone} onChange={handlechange}  name='phone' id="phone" required />
      </div>
      <div className={styles.mb3}>
        <label htmlFor="desc" className={styles.labeldesc}>Elaborate your concern</label>
        <textarea value={desc} name='desc' onChange={handlechange} className={styles.concernarea} placeholder="Write your concern here" id="desc"></textarea>
      </div>
      <button type="submit" className={styles.btn}>Submit</button>
    </form>
  </div>
)
}

export default contact;