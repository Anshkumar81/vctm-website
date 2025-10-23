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
                <p className='text-2xl text-center text-white pt-2 font-bold'> Career Resource Center Department</p>
            </div>
            <div className="w-[900px] mx-auto p-4 border mt-10">
                <h2 className="text-2xl text-[#294c81] font-bold mb-4 text-center">
                    Career Resource Center (CRC) Department
                </h2>

                <p className="text-gray-800 mb-4">
                    CRC Department plays an important role in student’s future. It helps students acquire employment skills and attain desired jobs
                    through partnerships among students, alumni, faculty, and industries.
                </p>

                <p className="text-gray-800 mb-4">
                    VCTM follows centralized placement activity giving each branch equal opportunity for career growth. Objectives are:
                </p>

                {/* Responsibilities Table */}
                <table className="w-full border border-gray-300 mb-4">
                    <thead>
                        <tr className="bg-[#294c81] text-white">
                            <th className="py-2 px-2 border">Responsibilities</th>
                            <th className="py-2 px-2 border">Description</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-800">
                        <tr className="border-b">
                            <td className="py-2 px-2 border">Assist students in academic & career goals</td>
                            <td className="py-2 px-2 border">Provide counseling and group discussions to explore career paths</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-2 px-2 border">Job search strategies</td>
                            <td className="py-2 px-2 border">Guidance on resume, interview, networking, and job search</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-2 px-2 border">Industry & Faculty Collaboration</td>
                            <td className="py-2 px-2 border">Align career planning with curriculum and industry opportunities</td>
                        </tr>
                    </tbody>
                </table>

                {/* Placement Process */}
                <ul className="list-disc list-inside text-gray-800 mb-4">
                    <li>Career Counseling Sessions</li>
                    <li>Group Discussions</li>
                    <li>Presentation Skills & Workshops</li>
                    <li>Technical Tests</li>
                    <li>Mock Interviews</li>
                </ul>

                {/* CRC Contact Info */}
                <p className="text-gray-800">
                    <b>Contact:</b> Dr. Vivek Thakur, Training & Placement Officer, Vivekananda College of Tech & Mgmt, Aligarh-202002<br />
                    Mob: +91 9457254080<br />
                    Email: vivek2014thakur@gmail.com, placements@vctm.in
                </p>
            </div>
            <div className='about-hd'>
                <p className='text-2xl text-center text-white pt-2 font-bold'> Placement Activities</p>
            </div>
            <div className="w-[900px] mx-auto p-4 border mt-10">
                <h2 className="text-2xl text-[#294c81] font-bold mb-4 text-center">
                    Placement Activities & TPO Desk
                </h2>

                <p className="text-gray-800 mb-4">
                    Today VCTM is among leading Colleges in UP West region grooming future Managers and Engineers in a world-class environment.
                    Experienced faculty from IITs/NITs etc. ensure holistic development of students through presentations, case studies, live projects,
                    industrial tours, seminars, and conferences.
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-800 mb-4">
                    <li><b>Develop Close linkages with industry:</b> Maintain long-term relations through effective interaction.</li>
                    <li><b>Students personality development:</b> Develop soft skills, personality, attitude, group discussion, and interview readiness.</li>
                    <li><b>Online Test:</b> Assess student strength and suitability for employment.</li>
                    <li><b>Campus Placement:</b> Employers invited to campus based on student discipline, interests, and market research.</li>
                    <li><b>Industry Meet:</b> Organize industrial meets for students, faculty, and industry personnel.</li>
                    <li><b>Expert Lectures:</b> Conduct expert lecture series to familiarize students with industry practices.</li>
                    <li><b>Industrial Training:</b> Students undergo 6-8 weeks training under industry guidance, monitored by faculty.</li>
                    <li><b>Industrial Visits / Study Tours:</b> Semester-wise visits to industries to apply theoretical knowledge practically.</li>
                    <li><b>Student Projects:</b> Projects addressing industry needs with faculty-industry interaction.</li>
                    <li><b>Faculty Training:</b> Faculty gain firsthand industrial experience to improve teaching capability.</li>
                    <li><b>Career Orientation Program:</b> Seminars and programs to orient students about industry expectations and skill development.</li>
                    <li><b>Entrepreneurship Development Cell (EDC):</b> Encourages students to become entrepreneurs with support from central government agencies.</li>
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

export default page 