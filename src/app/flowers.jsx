'use client';
import * as THREE from "three";
import { useEffect,useState,useRef } from "react";
import {OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { RoundedBoxGeometry, Wireframe } from "three-stdlib";
import { DecalGeometry } from "three-stdlib";



export default function Flowers() {
    const canvasRef=useRef(null);
    const divRef=useRef(null);
    const socialLinks = [
        {
            name: "Facebook",
            url: "https://facebook.com/youraccount",
            color: "#1877F2",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg"
        },
        {
            name: "Instagram",
            url: "https://instagram.com/youraccount",
            color: "#E1306C",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg"
        },
        {
            name: "GitHub",
            url: "https://github.com/youraccount",
            color: "#181717",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg"
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/in/youraccount",
            color: "#0A66C2",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg"
        },
        {
            name: "WhatsApp",
            url: "https://wa.me/yourphonenumber",
            color: "#25D366",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg"
        }
    ];
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
    useEffect(()=>{

        window.addEventListener("scroll",()=>{
            if(window.scrollY>0&& window.innerWidth>768){
                document.querySelector('.intro').classList.add('scroled')
            }else{
                document.querySelector('.intro').classList.remove('scroled')
            }
        })
        divRef.current.addEventListener('mousemove',(e)=>{
            let x=e.clientX/window.innerWidth;
            console.log(x);
        })


        const scene = new THREE.Scene();
        const camera =new THREE.PerspectiveCamera(35,window.innerWidth/window.innerHeight,1,1000);
        camera.position.set(0.62,-7.73,1.67);
        camera.lookAt(0,0,0)
        const renderer= new THREE.WebGLRenderer({
            canvas:canvasRef.current,
            alpha:true,
        });


        const ambientLight = new THREE.AmbientLight('rgba(255, 255, 255, 1)',2 ); // اللون، الشدة
        scene.add(ambientLight);
        const pointLight1 =new THREE.PointLight('rgba(223, 223, 223, 1)',100,10);
        pointLight1.position.set(0,4,5);
        scene.add(pointLight1);
        const pointLight2 =new THREE.PointLight('rgba(255, 255, 255, 1)',100,10);
        pointLight2.position.set(0,4,5);
        scene.add(pointLight2);



        const textureLoader =new TextureLoader();
        const cardTexture =textureLoader.load('/flowers/Anemone_Hybrida_OBJ/maps/anemone_hybrida_bud_normals.jpg');
        cardTexture.wrapS = THREE.ClampToEdgeWrapping;
        cardTexture.wrapT = THREE.ClampToEdgeWrapping;
        cardTexture.minFilter = THREE.LinearFilter;
        let cards=[]

        for(let i=-40;i<=40;i++){
            const card = new THREE.Mesh(
                new RoundedBoxGeometry(.5, 1, .1, 4, 7),
                new THREE.MeshStandardMaterial({
                    transparent: true,
                    metalness: .4,
                    roughness: .1,
                })
            );
            card.position.x = i * 0.15; 
            card.position.y = 0;
            card.position.z = 0;
            card.rotation.set(0,Math.PI/2,0);
            card.rotation.x=i/9
            scene.add(card);
            cards.push(card);
        }
        renderer.setSize(window.innerWidth,window.innerHeight);

        window.addEventListener('resize',()=>{
            renderer.setSize(window.innerWidth,window.innerHeight);
            camera.aspect=window.innerWidth/window.innerHeight;
            camera.updateProjectionMatrix(devicePixelRatio);
        })
        


        const controls =new OrbitControls(camera,renderer.domElement);
        const clock =new THREE.Clock();
        function animate(){
            for (let i=0 ;i<cards.length; i++){
                cards[i].rotation.x=cards[i].rotation.x+0.01;
                let gridiant=Math.sin(clock.getElapsedTime()+(i/9))*.5+0.4;
                cards[i].material.color.setRGB(gridiant,gridiant,gridiant);
            }
            const elapsedTime=clock.getElapsedTime();
            requestAnimationFrame(animate);
            controls.update();
            pointLight1.position.x=Math.sin(elapsedTime*0.5)*5;
            pointLight2.position.x=Math.sin(elapsedTime*0.5)*-5;
            renderer.render (scene,camera);
        }
        animate()
    },[])
  
    return<>
        
        <div className="intro " ref={divRef}>
            <h1>
            Hi! my name mostafa junior <br/>
            and i'm junior Front-End Developer </h1>
            <div className="skills bulr-int">
                {skills.map((item,i)=>{
                    return <span key={i} style={{animationDuration:`${i*.5}s`}}>{item}</span>
                })}
            </div>
            <button>Download CV</button>
            <div className="social">
                {
                    socialLinks.map((item,i)=>{
                        return <a 
                                key={i}
                                href={item.url}
                                className="bulr-int"
                                >
                                <img 
                                    src={item.icon} 
                                    width="30"
                                    height="50"
                                />
                            </a>
                    })
                }
            </div>

            <canvas ref={canvasRef} className="back-canvas">
            </canvas>
        </div>
    </>
}