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

            {/* Student Corner Section */}

            <div className='about-hd'>
                <p className='text-2xl text-center text-white pt-2 font-bold'>Computer Science Engineering & Information Technology </p>
            </div>
            <div className="w-[900px] mx-auto mt-6 grid grid-cols-3 gap-4">
                <img src="https://vctm.in/media/3_EfcMuIe.png" alt="Student 1" className="w-full h-auto rounded" />
                <img src="https://vctm.in/media/4_gTWZf9W.png" alt="Student 2" className="w-full h-auto rounded" />
                <img src="https://vctm.in/media/6_Kwjb9Jo.png" alt="Student 3" className="w-full h-auto rounded" />
                <img src="https://vctm.in/media/7_ORnqJVE.png" alt="Student 4" className="w-full h-auto rounded" />
                <img src="https://vctm.in/media/1_W7sZJ8e.png" alt="Student 5" className="w-full h-auto rounded" />
                <img src="https://vctm.in/media/5_s67DmFU.png" alt="Student 6" className="w-full h-auto rounded" />
            </div>
            <div className="w-[900px] mx-auto p-6 bg-white border rounded shadow mt-10">
                <h2 className="text-2xl text-[#294c81] font-bold mb-4 text-center">Academic Policy</h2>
                <ul className="list-disc list-inside space-y-3 text-gray-800">
                    <li>Imparting world class quality education by creating special skill for real life problem solving.</li>
                    <li>Imbibing creative ability, innovative skills and research temperament.</li>
                    <li>Inculcating global perspective in attitude and developing habit of lifelong learning.</li>
                    <li>Total focus on holistic education of students by which character is formed, strength of mind is increased and intellect is expanded.</li>
                    <li>Effective teaching learning process through active exposure to industries, renowned institutions & invited lectures by technologists to keep abreast with the state-of-the-art technology.</li>
                    <li>Promoting ethics, human values & professionalism amongst students.</li>
                </ul>
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

export default page;
