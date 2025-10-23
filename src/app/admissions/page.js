import React from 'react'
import './page.css';
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
            <div className='detail'>
                <div className='about-hd'>
                    <p className='text-2xl text-center text-white pt-2 font-bold'>Courses </p>
                </div>
                <div className="w-[1000px] mx-auto mt-10 border border-gray-300 rounded-lg p-5">
                    <h2 className="text-center text-2xl font-bold text-[#294c81] mb-4">
                        Bachelor of Technology (B.Tech.)
                    </h2>

                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-[#294c81] text-white">
                                <th className="py-2 px-4 text-left">Stream</th>
                                <th className="py-2 px-4 text-left">Intake Capacity</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-800">
                            <tr className="border-b"><td className="py-2 px-4">Computer Science & Engineering</td><td className="py-2 px-4">60</td></tr>
                            <tr className="border-b"><td className="py-2 px-4">Electronics & Communication Engineering</td><td className="py-2 px-4">60</td></tr>
                            <tr className="border-b"><td className="py-2 px-4">Information Technology</td><td className="py-2 px-4">30</td></tr>
                            <tr className="border-b"><td className="py-2 px-4">Mechanical Engineering</td><td className="py-2 px-4">60</td></tr>
                            <tr className="border-b"><td className="py-2 px-4">Civil Engineering</td><td className="py-2 px-4">60</td></tr>
                            <tr className="border-b"><td className="py-2 px-4">Electrical Engineering</td><td className="py-2 px-4">60</td></tr>
                            <tr><td className="py-2 px-4">Agricultural Engineering</td><td className="py-2 px-4">30</td></tr>
                        </tbody>
                    </table>
                </div>
                <div className="w-[900px] mx-auto mt-10 border border-gray-300 rounded-lg p-6">

                    {/* M.Tech Section */}
                    <h2 className="text-center text-2xl font-bold text-[#294c81] mb-4">
                        Master of Technology (M.Tech.)
                    </h2>

                    <table className="w-full border-collapse mb-10">
                        <thead>
                            <tr className="bg-[#294c81] text-white">
                                <th className="py-2 px-4 text-left">SR NO.</th>
                                <th className="py-2 px-4 text-left">Department</th>
                                <th className="py-2 px-4 text-left">Available Seats</th>
                                <th className="py-2 px-4 text-left">Duration</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-800">
                            <tr className="border-b">
                                <td className="py-2 px-4">1.</td>
                                <td className="py-2 px-4">Production Engineering</td>
                                <td className="py-2 px-4">24</td>
                                <td className="py-2 px-4">2 Year</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4">2.</td>
                                <td className="py-2 px-4">Structural Engineering</td>
                                <td className="py-2 px-4">24</td>
                                <td className="py-2 px-4">2 Year</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Diploma Section */}
                    <h2 className="text-center text-2xl font-bold text-[#294c81] mb-4">
                        Diploma in Engineering
                    </h2>

                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-[#294c81] text-white">
                                <th className="py-2 px-4 text-left">Stream</th>
                                <th className="py-2 px-4 text-left">Intake Capacity</th>
                                <th className="py-2 px-4 text-left">Duration</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-800">
                            <tr className="border-b">
                                <td className="py-2 px-4">Civil Engineering</td>
                                <td className="py-2 px-4">60</td>
                                <td className="py-2 px-4">3 Year</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4">Mechanical Engineering</td>
                                <td className="py-2 px-4">60</td>
                                <td className="py-2 px-4">3 Year</td>
                            </tr>
                        </tbody>
                    </table>

                    <p className="mt-4 text-sm text-gray-700">
                        <b>Note:</b> For Lateral Entry (after passing 12th Examinations), Duration will be <b>2 Years</b>.
                        Except for that, Duration will be <b>3 Years</b>.
                    </p>
                </div>

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