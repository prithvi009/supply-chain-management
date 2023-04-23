import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'
function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-links-wrapper'>
                    <div className='footer-links-items'>
                        <h2 class="footer-heading">Resources</h2>
                        <Link to='/Sign-up' class="footer-list">How it Works</Link>
                        <Link to='/Sign-up' class="footer-list">Testimonials</Link>
                        <Link to='/Sign-up' class="footer-list">Investors</Link>
                        <Link to='/Sign-up' class="footer-list">Terms of Services</Link>
                    </div>

                    <div className='footer-links-items'>
                        <h2 class="footer-heading">Company</h2>
                        <Link to='/Sign-up'>About us</Link>
                        <Link to='/Sign-up'>Career</Link>
                        <Link to='/Sign-up'>Teams</Link>
                        <Link to='/Sign-up'>Contact us</Link>

                    </div>


                    <div className='footer-links-items'>
                        <h2 class="footer-heading">Use Cases</h2>
                        <Link to='/Sign-up'>Delivery</Link>
                        <Link to='/Sign-up'>Secure Box</Link>
                        <Link to='/Sign-up'>On Time Delivery</Link>

                    </div>


                </div>

            </div>

            <div class="line"></div>

            <div className="frame41">
                <div class="join-us">Join Us</div>

                <div class="form-box">
                    <form action="" class="form-field">
                        <input type="email" placeholder='Enter Your Email address' class="input"/>
                        <button class="btn-outline"><p className='btn-text'>JOIN</p></button>
                    </form>
                </div>
            </div>

            <div class="menu-footer">
                <span class="menu-footer-content">Privacy Policy</span>
                <span class="menu-footer-content">Term of Use</span>
                <span class="menu-footer-content">Sale and Refund</span>
                <span class="menu-footer-content">Legal</span>
                <span class="menu-footer-content">SiteMap</span>
            </div>

            <div className="copyright"><span className='copyrightText'>@2023 All Right Reserved</span></div>

        </div >
    )
}

export default Footer
