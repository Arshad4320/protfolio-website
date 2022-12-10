import React from 'react';
import { FaFacebookSquare, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 text-neutral-content" style={{ backgroundColor: '#2c3e50' }}>
                <div>
                    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"></svg>

                </div>
                <div>
                    <div className="grid grid-flow-col gap-4 text-2xl text-teal-600">
                        <a href="https://www.facebook.com/profile.php?id=100008239428408"><FaFacebookSquare/></a>
                        <a href="https://www.linkedin.com/in/arshad-ullah-1b4795257/"><FaLinkedinIn /></a>
                        <a href="https://github.com/Arshad4320"><FaGithub /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;