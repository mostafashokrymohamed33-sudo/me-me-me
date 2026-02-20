'use client'
import { useEffect } from "react";
import Flowers from "./flowers";
import SkillCard from "./skillCard";
import ProjectCard from "./ProjectCard";
import Email from "./components/Email";
const socialLinks = [
        {
            name: "Facebook",
            url: "https://www.facebook.com/sasa.shokry.96",
            color: "#1877F2",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg"
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/mos_taf8/",
            color: "#E1306C",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg"
        },
        {
            name: "GitHub",
            url: "https://github.com/mostafashokrymohamed33-sudo",
            color: "#181717",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg"
        },
        {
            name: "LinkedIn",
            url:  "https://linkedin.com/in/youraccount",
            color: "#0A66C2",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg"
        },
        {
            name: "WhatsApp",
            url: "https://api.whatsapp.com/send/?phone=201032955743&text&type=phone_number&app_absent=0",
            color: "#25D366",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg"
        },
        {
            name: "Gmail",
            url: "mailto:yourmail@gmail.com",
            color: "#D14836",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/gmail.svg"
        }
];
const projects=[
  
  {
    name:"Eco-Saver-Platform",
    link:"https://eco3-two.vercel.app/",
    url:"/ecoProject.png",
    disc: `A modern environmental awareness platform designed to
     help users understand climate issues, track pollution levels,
      and learn tips for protecting the planet. Built with a clean 
      UI and interactive features that encourage users to adopt 
      eco-friendly habits and explore global environmental data.`,
    tools:["THREE.js","NEXT.js"],
  },
  {
    name:"3D-Weather-App",
    link:"https://3d-wheater-website.vercel.app/",
    url:"/screencapture-localhost-3001-2025-12-10-14_19_08.png",
    disc: `An interactive weather application built with Next.js, providing a smooth user experience to display current and
     forecasted weather for any city worldwide. This is a single-page application (SPA) with a modern and dynamic design using
     powerful visualization libraries like threejs and cahart js`,
    tools:["THREE.js","CHART.js","OpenWeather-API","NEXT.js"],
  },
  {
    name: "Memory-Card",
    link: "https://memory-card-game-by-next-js.vercel.app/",
    url: "/screencapture-localhost-3000-2026-02-13-09_18_07.png",
    disc: `A fun and interactive memory card game built with Next.js,
    where players flip cards to find matching pairs.
    The game features smooth animations, score tracking,
    and responsive design for all devices.`,
    tools: [
      "Next.js only",
    ],
  },
  {
    name:"Quraan-web",
    link:"https://quran-website-next-v-44m2.vercel.app/",
    url:"/quraanProject.png",
    disc:"A comprehensive Quran platform allowing you to listen to 5 different reciters, featuring interactive reading with verse highlighting, or choosing between reading-only and listening-only modes for a seamless experience.",
    tools:["Quran-API","NEXT.js"],
  },
  {
    name:"AI exame generator",
    link:"https://ai-test-generator-mu.vercel.app/",
    url:"/AI-exameProject.png",
    disc: `An interactive AI-powered chat platform built to engage users through natural conversation,
    guiding them step by step based on their input, then generating a personalized exam
    that evaluates their understanding according to the discussion.`,
    tools:["sssssssssssssssssssssssssssssssssssss"],
  },
  {
    name:"Weather-App",
    link:"https://mostafashokrymohamed33-sudo.github.io/frontend-cours-task-Weather-websiet/",
    url:"/2dWeatherProject.png",
    disc: `An interactive weather application built with Next.js,
     providing a smooth user experience to display current and
     forecasted weather for any city worldwide`,
    tools:["CHART.js","OpenWeather-API","HTML","CSS","JAVA SCRPIPT"],
  },
]
const skills = [
  "Three.js",
  "JavaScript",
  "Chart.js",
  "React.js",
  "Next.js",
  "Redux",
  "Git & GitHub",
  "HTML",
  "CSS",
  "Bootstrap"
]
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
          <section className="projects">
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
    </div>
  );
}
