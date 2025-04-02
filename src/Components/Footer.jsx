import Lottie from 'lottie-react';
import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareGithub, FaSquareInstagram } from 'react-icons/fa6';
import logoLottieData from '../assets/lottie/logo Animation.json';
import { Link } from 'react-router';


const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                <aside>
                    <div className="w-12">
                        <Lottie animationData={logoLottieData} />
                    </div>
                    <p>
                        <span className="text-2xl">Jobs Portal Ltd.</span>
                    <br />
                    Providing reliable tech since 1992
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">social media</h6>
                    <a href='https://www.facebook.com/mdasraful4' target='_blank' className="flex gap-1 items-center link link-hover"><FaFacebook size={18} /> <span className="">Facebook</span></a>
                    <a href='https://www.instagram.com/ashraful_islam_asrf_56/' target='_blank' className="flex gap-1 items-center link link-hover"><FaSquareInstagram size={18} /> <span className="">Instagram</span></a>
                    <a href='https://github.com/MdAsraful56' target='_blank' className="flex gap-1 items-center link link-hover"><FaSquareGithub size={18} /> <span className="">Github</span></a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;