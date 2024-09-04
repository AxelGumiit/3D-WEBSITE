import './Style.css';
import React from 'react';
import { useEffect, useRef } from "react";

const Section = (props) => {
    const { children } = props;
  
    return (
      <section className="section">
        {children}
      </section>
    );
  };

export const Interface = () => {
    return (
      <div className="flex flex-col items-center w-screen">
        <AboutSection/>
       <SkillSection/>
       <Section> <ProjectSection/></Section>
       <Section><ContactSection/></Section>
  
      </div>
    );
  };
  
const AboutSection = () => {
    return (
      <Section>
        <div className="about-section">
          <h1>Hello I'm
            <br />
            <span>Axel Gumiit</span>
          </h1>
          <p>
            Currently studying a bachelor degree in Computer<br/>Science
            who aims to bring different skillsets to businesses.
          </p>
          <br />
          <div className='button'>
          <button>Explore projects</button>
          </div>
        </div>
      </Section>
    );
  };

  const SkillBar = ({ title, level }) => {
    const progressRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
            
              entry.target.style.width = `${level}%`;
            } else {
            
              entry.target.style.width = `0%`;
            }
          });
        },
        { threshold: 0.5 } 
      );
  
      if (progressRef.current) {
        observer.observe(progressRef.current);
      }
      
  
      return () => {
        if (progressRef.current) {
          observer.unobserve(progressRef.current);
        }
      };
    }, [level]);
  
    return (
      <div className="skill-bar">
        <div className="skill-info">
          <span>{title}</span>
        </div>
        <div className="progress-bar">
          <div className="progress" ref={progressRef}></div>
        </div>
      </div>
    );
  };


  
  const SkillSection = () => {
    const skills = [
      { title: "Three.js", level: 70},
      { title: "HTML/CSS", level: 80 },
      { title: "Python", level: 50},
      { title: "C#", level: 60},
      { title: "Blender", level: 80},
    ];
  
    const languages = [
      { title: "English", level: 80, },
      { title: "Filipino", level: 90, },
      { title: "Spanish", level: 50,  },
    ];
    return (
      <Section>
        <div className="skills-container">
          <h1>Skills</h1>
          <h2>Technical Skills</h2>
          {skills.map((skill, index) => (
            <SkillBar key={index} title={skill.title} level={skill.level} />
          ))}
          <h2>Languages</h2>
          {languages.map((language, index) => (
            <SkillBar key={index} title={language.title} level={language.level} />
          ))}
        </div>
      </Section>
    );
  };

  const ProjectSection = () => {
    return (
      <div id="my-work-section">
        <span className="subheader-text">My Work / My Projects</span>
  
        <div className="projects-container">
          <div className="project-card">
            <img src="./images/ChessGame.png" className="project-image" alt="Chess Game" />
            <div className="project-card-text-container">
              <div className="project-title">Chess Game</div>
            </div>
            <a className="button" href="https://github.com/AxelGumiit/cpp-chess" target="_blank">
              <span className="button-text">Check it out</span>
          </a>
          </div>
  
          <div className="project-card">
            <img src="./images/Risk game.png" className="project-image" alt="World Conquest" />
            <div className="project-card-text-container">
              <div className="project-title">World Conquest</div>
  
            </div>
            <a className="button" href="https://github.com/AxelGumiit/world-conquest"  target="_blank">
              <span className="button-text">Check it out</span>
  
            </a>
          </div>

          <div className="project-card">
            <img src="./images/ChessGame.png" className="project-image" alt="World Conquest" />
            <div className="project-card-text-container">
              <div className="project-title">Book slider</div>
            </div>
            <a className="button" href="./project-pages/project2.html">
              <span className="button-text">Check it out</span>
            </a>
          </div>

        </div>
      </div>
    );
  };

  const ContactSection = () => {
    return (
      <Section>
        <div className="contact-section">
        <h1>Contact Me</h1>
        <div className="Form">
          <form action="https://formsubmit.co/axelgumiit1@email.com" method="POST">

          <label htmlFor="fname">Name</label>
            <input type="email" id="fname" name="firstname" placeholder="Your Name.." />
            
            <label htmlFor="fname">Email</label>
            <input type="email" id="fname" name="firstname" placeholder="Your Email.." />
  
            <label htmlFor="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }} />
  
            <input type="submit" value="Send" />
          </form>
        </div>
        </div>
      </Section>
    );
  };