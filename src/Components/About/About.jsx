import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile3.jpg' 

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Mahasiswa Teknik Informatika semester 7 di Stmik Pamitran, dengan
              fokus pada bidang Web Development dan Front End. Saya memiliki
              beberapa bidang yang dikuasai seperti, Time Management, Team Work,
              Fotografi dan kemampuan berbahasa yang saya miliki adalah bahasa
              Indonesia sebagai bahasa ibu, English merupakan bahasa yang sedang
              saya dalami. Saya teliti, inisiatif, suka mempelajari hal baru,
              mau berkembang dan memiliki empati yang tinggi terhadap sesama.
            </p>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              modi?
            </p> */}
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "10%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "10%" }} />
            </div>
            {/* <div className="about-skill">
              <p>Next JS</p>
              <hr style={{ width: "50%" }} />
            </div> */}
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>-</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECT COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>-</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
}

export default About