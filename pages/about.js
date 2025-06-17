import React from 'react'
import styles from "@/styles/About.module.css"

const About = () => {
  return (
    <div className={styles.container}>
       <div className={styles.infocontainer}>
          <div className={styles.info}>
           <h2 className={styles.abouttitle}>About Us</h2> 
           <p className={styles.infotext}>
            Welcome to Hunting Coder!

At <b>Hunting Coder</b>, we are passionate about coding, technology, and empowering developers at every stage of their journey. Founded by <b>Ali Raza</b>, this platform serves as a knowledge hub for coders who are always hunting for solutions, learning new technologies, and building amazing projects. Whether you're a beginner learning JavaScript, a student preparing for interviews, or an experienced developer looking for best practices, our blog covers:

In-depth tutorials on frontend & backend development

Guides on React, Node.js, Next.js, MongoDB

Tips for solving real-world programming challenges

Project ideas, coding tricks, and debugging help

We believe that learning to code is not just about writing syntax – it's about problem-solving, creativity, and collaboration. Our mission is to share knowledge freely, encourage hands-on coding, and build a supportive developer community.
           </p>

          </div>
        </div>

      <main className={styles.main}>
        <h1>Meet our Team of Creators, designers, and world-class problem solvers</h1>
        <p>To be the company our customers want us to be, it takes of blog writing content creators.Get to know the people leading the way at untitled.</p>
        </main>
        <div className={styles.box}>
        <div className={styles.boxcontainer}>
          <img className={styles.heroimg} src="/hero1.jpg" alt="hero1" width={239} height={300}/>
          <p className={styles.description}>Ali Raza</p>
          <span className={styles.boxtitle}>Founder & Ceo</span>
        </div>

        <div className={styles.boxcontainer}>
          <img className={styles.heroimg} src="/hero1.jpg" alt="hero1" width={239} height={300}/>
          <p className={styles.description}>Ali Raza</p>
          <span className={styles.boxtitle}>Founder & Ceo</span>
        </div>

        <div className={styles.boxcontainer}>
          <img className={styles.heroimg} src="/hero1.jpg" alt="hero1" width={239} height={300}/>
          <p className={styles.description}>Ali Raza</p>
          <span className={styles.boxtitle}>Founder & Ceo</span>
        </div>

        </div>
        </div>
        

  )
}

export default About