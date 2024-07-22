// import React from 'react'
import './Footer.css'
import { assets } from "../../assets/frontend_assets/assets"

const Footer = () => {
    return (
        <div className='Footer' id="Footer">
            <div className="Footer-content">
                <div className="Footer-left">
                    <img src={assets.logo} className='imgg' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis officia alias porro veniam quaerat similique voluptates! Doloribus corporis sequi natus illum ipsum? Velit consequuntur minima veniam magni tenetur id et asperiores atque est? Eum, incidunt?</p>
                    <div className="Footer-social-icon">
                        <img src={assets.facebook_icon} />
                        <img src={assets.linkedin_icon} />
                        <img src={assets.twitter_icon} />
                    </div>
                </div>
                <div className="Footer-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="Footer-right">
                    <h2>Get in touch</h2>
                    <ul>
                        <li>+91 852-456-5645</li>
                        <li>Tomato@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p className="Footer-copyright">Copyright 2024 &copy;Tomato.com-All Rights Reserved.</p>
        </div>
    )
}

export default Footer