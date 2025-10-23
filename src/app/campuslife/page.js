import React from 'react'
import Image from 'next/image';
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
                    <p className='text-2xl text-center text-white pt-2 font-bold'>CAFETERIA</p>
                </div>
                <div>
                    <p className='font-bold pl-50 pt-5 pb-8 text-[20px]'>vivekananda Group of Colleges comprises of:</p>
                    <div className='box1'>
                        <p>
                            VCTM adopts special measures to ensure that the students are provided with healthy and hygienic
                            food. There are about 2 cafeterias in different blocks of the campus. The cafeterias and other
                            eateries are functioning based on the 'Pay as you eat concept’ like CCD. VCTM provides a student
                            with all the amenities and facilities to enjoy the metro lifestyle right within the campus..
                        </p>
                    </div>
                    <div className='flex space-x-10 ml-20'>
                        <div className='cafe'>
                            <Image src="https://vctm.in/media/cafteria/1.png" alt="VCTM photo" width={300} height={300} />
                        </div>
                        <div className='cafe'>
                            <Image src="https://vctm.in/media/cafteria/2.png" alt="VCTM photo" width={300} height={300} />
                        </div>
                        <div className='cafe'>
                            <Image src="https://vctm.in/media/cafteria/3.png" alt="VCTM photo" width={300} height={300} />
                        </div>
                    </div>
                    <div className='about-hd'>
                        <p className='text-2xl text-center text-white pt-2 font-bold'>Other Facilities</p>
                    </div>
                    <div className='box2'>
                        <p>
                            <b>Class Rooms & Teaching Aids</b><br />
                            All the classrooms are airy, spaciously designed and are fully equipped with necessary teaching aids like OHP, Slide Projectors,<br />
                            PA systems and Multimedia etc.<br />
                            <b>Common Rooms</b><br />
                            The girls and boys have separate common rooms provided with regular newspapers, magazines etc.<br />

                            <b>Medical Facilities</b><br />
                            The College provides necessary first aid facilities and medicines to all students. A part time qualified physician is available for checkup and medical help<br />
                            <b>Fax and Telephone facilities</b><br />
                            <b>Banking and Courier facilities</b>
                        </p>
                    </div>
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