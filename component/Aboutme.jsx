import React from 'react';
import style from "./About.module.css";

const Aboutme = () => {
  return (
    <div className={style.aboutContainer}>
      <h2 className={style.title}>My Education Journey </h2>

      <div className={style.contentBox}>
        <div className={style.class}>
          <p className={style.head1}>B.Tech<br/> <span>2019-2023</span></p>
        </div>
        <div className={style.vl}></div>
        <div className={style.detail}>
          <p className={style.line1}>Information Technology</p>
          <p className={style.line2}>Ponjesly College of Engineering Nagercoil</p>
          <p className={style.line2}>Anna University | 7.91</p>
        </div>
      </div>

      <div className={style.contentBox}>
        <div className={style.class}>
          <p className={style.head1}>HSC <br/><span>2017-2019</span></p>
        </div>
        <div className={style.vl}></div>
        <div className={style.detail}>
          <p className={style.line1}>Higher Secondary</p>
          <p className={style.line2}>Hindu Vidyalaya Matric Higher Secondary School</p>
          <p className={style.line2}>State Board of Tamil Nadu | 66%</p>
        </div>
      </div>

      <div className={style.contentBox}>
        <div className={style.class}>
          <p className={style.head1}>SSLC <br /><span>2016-2017</span></p>
        </div>
        <div className={style.vl}></div>
        <div className={style.detail}>
          <p className={style.line1}>Lower Secondary</p>
          <p className={style.line2}>Hindu Vidyalaya Matric Higher Secondary School</p>
          <p className={style.line2}>State Board of Tamil Nadu | 90.3%</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
