import { useGSAP } from "@gsap/react"
import {  navLinks } from "../../constants"
import gsap from "gsap"

const Nav = () => {
    useGSAP(()=>{
        const navTween= gsap.timeline({
            scrollTrigger:{
                trigger:"nav",
                start:"bottom top",
                
            }
        })
        navTween.fromTo("nav",{
            background: "transparent",

            

        },{
            backgroundColor:"#00000050",
            backdropFilter:"blur(10px)",
            duration:1,
            ease:"power1.inOut"
        })
    },[])
  return (
    <nav >
        <div className="">
            <a href="#home" className="flex items-center gap-2">
                <img src="/images/logo.png" alt="" />
                <p>Raven Bar</p>
            </a>
            <ul>
                {navLinks.map((link)=>(
                    
                        <li key={link.id}>
                            <a href={`#${link.id}`} className="cursor-pointer">{link.title}</a>
                        </li>
                    
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Nav