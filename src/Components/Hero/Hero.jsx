import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile2.png"

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>Saya Ridho Khoer,</span> mahasiswa Teknik Informatika
      </h1>
      <p>Saya Mahasiswa dari Karawang </p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
