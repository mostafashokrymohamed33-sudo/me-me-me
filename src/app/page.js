'use client'
import { useEffect } from "react";
import Flowers from "./flowers";
import SkillCard from "./skillCard";
import ProjectCard from "./ProjectCard";
import Email from "./components/Email";
import  socialLinks  from "./data/socialLinks.json";
import  projects  from "./data/projects.json";
import  skills  from "./data/skills.json";

export default function Home() {
  useEffect(()=>{
    const targets = document.querySelectorAll(".projectcard");
    const observer =new IntersectionObserver((enties)=>{
      enties.forEach(card=>{
        if(card.isIntersecting){
          card.target.classList.add("observe");
        }
      });
    },{
      threshold:.5
    })
    targets.forEach(el=>observer.observe(el));
  },[])
  useEffect(()=>{
    const targets = document.querySelectorAll(".skillcard");
    const observer =new IntersectionObserver((enties)=>{
      enties.forEach(card=>{
        if(card.isIntersecting){
          card.target.classList.add("show");
        }
      });
    },{
      threshold:.7
    })
    targets.forEach(el=>observer.observe(el));
  },[])
  useEffect(()=>{
    const targets = document.querySelectorAll(".contactCard");
    const observer =new IntersectionObserver((enties)=>{
      enties.forEach(card=>{
        if(card.isIntersecting){
          card.target.classList.add("show");
        }else{
          card.target.classList.remove("show")
        }
      });
    },{
      threshold:.7
    })
    targets.forEach(el=>observer.observe(el));
  },[])
  return (
    <div className={"home-page"}>
          <Flowers />
          <section id="Projects" className="projects">
            {
              projects.map((item,i)=>{
                return <ProjectCard tools={item.tools} key={i} name={item.name} disc={item.disc} url={item.url} link={item.link} />
              })
            }
          </section>
          <div className="skillss">
            {
              skills.map((item,i)=>{
                return<SkillCard key={i} rank={10} skill={item}/>
              })
            }
          </div>
          <div className="contact">
            {
              socialLinks.map((item,i)=>{
                return<a href={item.url} className="card contactCard" key={i}>
                  <img src={item.icon} />
                  {item.name}
                </a>
              })
            }
          </div>
        <Email/>
        <div style={{border:"solid black"}}></div>
    </div>
  );
}
