import React from 'react'
import './page.css';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";



function page() {
    return (
        <div>
            <nav className='navbar'>
                <ul className='top'>
                    <li>
                        <span>AKTU Code: 340</span>
                        <span>|   BTE Code: 1628   |</span>
                        <span>under NL EDUCATIONAL SOCIETY</span>
                    </li>
                    <li>
                        <span>UPTAC-2025 Online Counselling</span>
                        <span>|   Online Enquiry</span>
                    </li>
                </ul>

                <ul className='navbar-list'>
                    <li className='vctm'>VCTM</li>
                    <li>About us</li>
                    <li>Campus Life</li>
                    <li>Admissions</li>
                    <li>Administractions</li>
                    <li>Academics</li>
                    <li>Placement</li>
                    <li>Career</li>
                    <li>Contact Us</li>
                </ul>
            </nav>

            <div className='about-hd'>
                <p className='text-2xl text-center text-white pt-2 font-bold'> Career Guidance & Opportunities</p>
            </div>
            <div className="w-[900px] mx-auto p-4 border mt-10">


                <p className="text-gray-800 mb-4">
                    Vivekananda College of Technology & Management (VCTM) provides students with the guidance and resources to build a successful career.
                    Our Career section focuses on developing essential skills, exploring opportunities, and preparing students for the professional world.
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-800 mb-4">
                    <li><b>Career Counseling:</b> Personalized guidance to identify strengths, interests, and career goals.</li>
                    <li><b>Skill Development:</b> Training in communication, leadership, and technical skills for employability.</li>
                    <li><b>Workshops & Seminars:</b> Industry experts provide insights into current trends and opportunities.</li>
                    <li><b>Internships:</b> Hands-on experience through collaborations with companies and organizations.</li>
                    <li><b>Placement Preparation:</b> Resume building, mock interviews, group discussions, and aptitude tests.</li>
                    <li><b>Alumni Interaction:</b> Learn from the experience of successful alumni and build professional networks.</li>
                    <li><b>Entrepreneurship Support:</b> Guidance and resources for students interested in starting their own ventures.</li>
                </ul>

                <p className="text-gray-800">
                    Through this Career section, VCTM ensures that students are well-prepared for future challenges and are equipped with the knowledge and skills to excel in their chosen fields.
                </p>
            </div>



            <div className='footer'>
                <div>
                    <p1>VCTM</p1>
                    <p>Follow US</p>
                    <div className=" gap-4 flex flex-col text-[30px]">
                        <FaFacebook color="#1877F2" />
                        <FaInstagram color="#E4405F" />
                        <FaYoutube color="#FF0000" />
                        <FaEnvelope color="#555" />
                    </div>
                </div>

                <div>
                    <p1>Quick Links</p1>
                    <p>AKTU</p>
                    <p>BTE</p>
                    <p>Contect Us</p>
                </div>

                <div>
                    <p1>Importants Links</p1>
                    <p>Anti Ragging</p>
                    <p>Pransport Route</p>
                    <p>Placement</p>
                </div>

                <div>
                    <p1>Contect Us</p1>
                    <p>Vivekananda College of Technology and Management</p>
                    <p>( under NL EDUCATIONAL SOCIETY )</p>
                    <p>Mathura Bypass, Near Khair Road, 500 mtrs. from Nada Pul, Aligarh</p>
                    <p>- 202002 (U.P.)</p>
                    <p>+91 9454010846</p>
                    <p>+91 7906487855</p>
                    <p>+91 9756079797</p>
                    <p>vctmaligarh@gmial.com</p>
                </div>
                <div className='underline'>
                </div>
                <p2 className='absolute mt-84'>© 2025 VCTM All rights reserved. System Administrator <b>Yash Tripathi</b></p2>
            </div>
        </div>
    )
}

export default page 