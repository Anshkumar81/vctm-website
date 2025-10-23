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
                <div className="w-[900px] mx-auto border border-gray-300 rounded-lg p-6 bg-white shadow-md mt-10">
                    {/* Anti Ragging Info */}
                    <h2 className="text-2xl font-bold text-[#294c81] mb-4 text-center">Anti Ragging</h2>
                    <p className="text-gray-800 mb-6 text-justify">
                        The University Grants Commission has recommended strong action against ragging in the institutions of higher learning.
                        In pursuance of the Judgment of the Hon’ble Supreme Court of India dated 08.05.2009 in Civil Appeal No. 887/2009, the
                        University Grants Commission has framed “UGC Regulations on curbing the menace of ragging in higher educational institutions, 2009”
                        and notified on 4th July, 2009 in the Gazette of India. These regulations are mandatory for all universities/institutions.
                        The UGC has made it mandatory for all students/parents to submit anti-ragging-related affidavits to the institutions at the time of admission.
                    </p>

                    {/* Committee Members Table */}
                    <h3 className="text-xl font-semibold text-[#294c81] mb-3">Anti-Ragging Committee Members</h3>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-[#294c81] text-white">
                                <th className="py-2 px-4 text-left">SR. No.</th>
                                <th className="py-2 px-4 text-left">Name</th>
                                <th className="py-2 px-4 text-left">Designation</th>
                                <th className="py-2 px-4 text-left">Mobile Number</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-800">
                            <tr className="border-b hover:bg-gray-100"><td className="py-2 px-4">1</td><td className="py-2 px-4">Mr. Naseem Ahamad Khan</td><td className="py-2 px-4">Chief Proctor</td><td className="py-2 px-4">9359966724</td></tr>
                            <tr className="border-b hover:bg-gray-100"><td className="py-2 px-4">2</td><td className="py-2 px-4">Dr. Vivek Thakur</td><td className="py-2 px-4">Deputy Proctor</td><td className="py-2 px-4">7906487855</td></tr>
                            <tr className="border-b hover:bg-gray-100"><td className="py-2 px-4">3</td><td className="py-2 px-4">Dr. Bhanu Prakash</td><td className="py-2 px-4">Deputy Proctor</td><td className="py-2 px-4">9808146426</td></tr>
                            <tr className="border-b hover:bg-gray-100"><td className="py-2 px-4">4</td><td className="py-2 px-4">Mr. Noor ul Bashar</td><td className="py-2 px-4">Deputy Proctor</td><td className="py-2 px-4">9897127606</td></tr>
                            <tr className="border-b hover:bg-gray-100"><td className="py-2 px-4">5</td><td className="py-2 px-4">Ms. Lubna Ansari</td><td className="py-2 px-4">Member</td><td className="py-2 px-4">9811196818</td></tr>
                            <tr className="border-b hover:bg-gray-100"><td className="py-2 px-4">6</td><td className="py-2 px-4">Ms. Shivani Chaudhary</td><td className="py-2 px-4">Member</td><td className="py-2 px-4">8449329302</td></tr>
                            <tr className="border-b hover:bg-gray-100"><td className="py-2 px-4">7</td><td className="py-2 px-4">Ms. Aaliya</td><td className="py-2 px-4">Member</td><td className="py-2 px-4">7906638016</td></tr>
                            <tr className="hover:bg-gray-100"><td className="py-2 px-4">8</td><td className="py-2 px-4">Mr. Sanjeev Saraswat</td><td className="py-2 px-4">Member</td><td className="py-2 px-4">8909117650</td></tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <div className="w-[900px] mx-auto p-5 bg-white border rounded shadow mt-10">
                <h2 className="text-center text-2xl text-[#294c81] font-bold mb-2">
                    Vivekananda College of Technology and Management
                </h2>


                <p className="mb-2"><strong>Head Office:</strong> Mathura Bypass, Near Khair Road, 500 mtrs. from Nada Pul, Aligarh - 202002 (U.P.)</p>
                <p className="mb-2"><strong>Reg. Office:</strong> 5/148, Issapur Colony, Banna Devi, G.T Road, Aligarh - 202001</p>
                <p className="mb-2"><strong>Campus Phone:</strong> +91 9454010846, +91 7906487855, +91 9756079797</p>
                <p><strong>Email:</strong> vctmaligarh@gmail.com</p>
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