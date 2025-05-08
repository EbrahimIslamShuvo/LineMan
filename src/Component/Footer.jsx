import React from 'react';
import logo from "../assets/Image/logo.svg"
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto bg-[#1B4B36] rounded-4xl">
                <footer className="footer sm:footer-horizontal  p-10 text-white font-semibold" >
                    <aside>
                        <NavLink to={"/"}>
                            <img src={logo} alt="" />
                        </NavLink>
                        <p>
                            LineMan Service Center
                            <br />
                            Providing reliable service since 1992
                        </p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <NavLink className="link link-hover">Branding</NavLink>
                        <NavLink className="link link-hover">Design</NavLink>
                        <NavLink className="link link-hover">Marketing</NavLink>
                        <NavLink className="link link-hover">Advertisement</NavLink>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <NavLink to={"/about"} className="link link-hover">About Us</NavLink>
                        <NavLink to={"/contact"} className="link link-hover">Contact</NavLink>
                        <NavLink to={"/service"} className="link link-hover">Services</NavLink>
                        <NavLink to={"/blog"} className="link link-hover">Blog</NavLink>
                    </nav>
                    <form>
                        <h6 className="footer-title">Newsletter</h6>
                        <fieldset className="w-80">
                            <label>Enter your email address</label>
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    className="input input-bordered join-item" />
                                <button className="btn btn-primary join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </footer>
                <footer className="footer sm:footer-horizontal footer-center text-white p-4">
                    <aside>
                        <p>Copyright © {new Date().getFullYear()} - All right reserved by Lineman service Center</p>
                    </aside>
                </footer>
            </div>
        </div>
    );
};

export default Footer;