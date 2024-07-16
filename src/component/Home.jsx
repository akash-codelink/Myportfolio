import Nav from"./Nav"
import style from "./Home.module.css"
import React from 'react'

const Home = () => {

  const handleDownloadResume = () => {
  
    
    const resumeUrl = `${process.env.PUBLIC_URL}/my_resume.pdf`;
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'AKASH-V-Resume.pdf'); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleHireMe = () => {
    const mailtoLink = `mailto:akash.vu08@gmail.com?subject=Hire Me&body=Hi Akash, I'm interested in hiring you for a project.`;
    window.open(mailtoLink, '_blank');
  };


  return (
    
    <section className={style.homeContainer} id="home">
    
      <div className={style.content}>
        <p className={style.line1}>Hi , I'm  Akash V </p>
        <p className={style.line2}>Software Engineer</p>
        <p className={style.line3}>Specialized in Backend Development</p>
        <p className={style.line4}> Dynamic Software Engineer skilled in Java, Hibernate, Spring-boot, front-end technologies, and SQL. Eager to contribute expertise to dynamic projects and Secure a responsible career opportunity to fully utilize my training skills, while making significant contribution to the success of the organization.</p>
        
        
        <button className={style.resume} onClick={handleDownloadResume} >Check resume</button>
        <button className={style.hire} onClick={handleHireMe}>Hire-Me </button>
      </div>
      <div className={style.profile}>

      </div>
   
    </section>
  )
}

export default Home
