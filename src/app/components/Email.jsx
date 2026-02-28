'use client'
import {useRef,useState }from "react";
import emailjs from "@emailjs/browser";
export default function Email( ){
    const formRef= useRef();
    const [ message, setMessage ] = useState("");
    const sendEmail=(e)=>{
        e.preventDefault();
        emailjs.sendForm("service_3fyu15p","template_duz9505",formRef.current,"AxGyufz5owum0MCn_")
        .then((res)=>{
            alert("message sent successfully");
            setMessage("")
        }).catch((err)=>{
            alert("message failed to send");
            console.log(err)
        })
    }
    return<form ref={formRef} onSubmit={sendEmail} className="gmail-js">
            <h4>Contact Me :--</h4>
            <div>
                <input type="text" name="name" placeholder="Your Name" required/>
                <input type="email" name="email" placeholder="Your Email" required/>
                <input type="text" name="phone" placeholder="Phone Number optional"/>
            </div>
            <textarea onChange={(e)=>{setMessage(e.target.value)}} value={message} name="message" placeholder="Your Message for examle : Hi Mostafa iam falling in love with you , are you single?"></textarea>
            <input type="submit" value={"send"} style={{color:"gray",backgroundColor:"white"}} />
        </form>
}