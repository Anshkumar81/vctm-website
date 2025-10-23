import React from 'react'
import './page.css';
import Image from 'next/image';
// import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

function Page() {
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

            <div className='hero'>
                <h1>Vivekananda College of Technology & Management</h1>
                <h2>(under NL EDUCATIONAL SOCIETY) — Mathura Bypass, Aligarh</h2>
                <div className='button'>
                    <button className='adm-btn'>Admission Open 2025-26</button>
                    <button className='not-btn'>Noticeboard</button>
                </div>
                <p>All students are advised to attend classes regularly for maintaining 75% attendance | UPTAC Online Counselling Registration | Hurry — limited seats available.</p>
            </div>
            <div className='campus-img'>
                {/* <img src="/images/vctm.png" alt="VCTM Logo" /> */}
                <Image src="https://vctm.in/media/infrastructure/front.png" alt="VCTM Campus" width={1500} height={700} />
            </div>
            <div className='campus-dtl'>
                All students are advised to attend classes regularly for maintaining 75% attendance  UPTAC Online Counselling Registration
            </div>
            <div className='campus-info'>
                <div className='Noticeboard'>
                    <div className='head'>Noticeboard</div>
                    <div className='head-btn'>
                        <div className='btn'>GENERAL</div>
                        <div className='btn'>STUDENTS</div>
                        <div className='btn'>STAFF</div>
                    </div>
                        <ol className='ul-list'> 
                            <li>* Class Registration 2025</li>
                            <li>* Sessional Exam Date</li>
                            <li>* 75% Attendance Required</li>
                            <li>* Dress Code</li>
                            <li>* 7 Days Faculty Development Program</li>
                            <li>* holiday 15 August</li>
                        </ol>
                </div>

                <div className='Noticeboard'>
                    <div className='head'>Chairman’s Message</div>
                    <div className='head-img'>
                        <Image src="https://vctm.in/media/Chairman.jpeg" alt="VCTM Campus" width={250} height={150} />
                    </div>
                    <p3>Vivekananda College of Technology & <br/> Management has been established to provide <br/>an atmosphere, condu…</p3>
                    <button style={{ height : '30px', width : '70px', fontSize : '12px', border : '1px solid black', marginTop : '220px', marginLeft : '180px', backgroundColor : '#294c81', color : 'white', borderRadius : '10px'}}>Read more</button>
                </div>

                <div className='Noticeboard'>
                    <div className='head'>Events</div>
                    <Image src="https://vctm.in/media/vctm/gallerycat/test.jpeg" alt="VCTM Campus" width={350} height={10} />
                </div>
            </div>
            <p style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold', marginTop: '20px' }}>COURSES</p>
            <div className='COURSES'>
                <div className='class'>
                    <Image src="https://vctm.in/media/6_vSIPmsf.png" alt="VCTM Campus" width={150} height={150} />
                    B.Tech
                </div>
                <div className='class'>
                    <Image src="https://vctm.in/media/5_fDckU8U.png" alt="VCTM Campus" width={150} height={150} />
                    M.Tech
                </div>
                <div className='class'>
                    <Image src="https://vctm.in/media/4_2LSSyFt.png" alt="VCTM Campus" width={150} height={150} />
                    MBA
                </div>
                <div className='class'>
                    <Image src="https://vctm.in/media/2_P723429.png" alt="VCTM Campus" width={150} height={150} />
                    Diploma
                </div>
                <div className='class'>
                    <Image src="https://vctm.in/media/course_imng.png" alt="VCTM Campus" width={150} height={150} />
                    BCOME
                </div>
                <div className='class'>
                    <Image src="https://vctm.in/media/2_P723429.png" alt="VCTM Campus" width={150} height={150} />
                    BBA - BCA
                </div>
            </div>
            <p style={{ textAlign: 'center', fontSize: '22px', fontWeight: 'bold', marginTop: '50px' }}>Recruiters</p>
            <div className='Recruiters'>
                <div className='company'>
                    <Image src="https://vctm.in/media/1_ZFTY0rC.png" alt="VCTM Campus" width={150} height={150} />
                </div>
                <div className='company'>
                    <Image src="https://vctm.in/media/2_VIpCOVy.png" alt="VCTM Campus" width={150} height={150} />
                </div>
                <div className='company'>
                    <Image src="https://vctm.in/media/3_ZWuWFLp.png" alt="VCTM Campus" width={150} height={150} />
                </div>
                <div className='company'>
                    <Image src="https://vctm.in/media/4_eblMGDp.png" alt="VCTM Campus" width={150} height={150} />
                </div>
                <div className='company'>
                    <Image src="https://vctm.in/media/5_TAJr9uN.png" alt="VCTM Campus" width={150} height={150} />
                </div>
                <div className='company'>
                    <Image src="https://vctm.in/media/6_hkRCZVb.png" alt="VCTM Campus" width={150} height={150} />
                </div>
                <div className='company'>
                    <Image src="https://vctm.in/media/7_CfnRhSR.png" alt="VCTM Campus" width={150} height={150} />
                </div>
                <div className='company'>
                    <Image src="https://vctm.in/media/1_ZFTY0rC.png" alt="VCTM Campus" width={150} height={150} />
                </div>
            </div>
            <p style={{ textAlign: 'center', fontSize: '22px', fontWeight: 'bold', marginTop: '30px' }}>Student's Corner</p>

            <div className='Student'>
                <div className='corner'>
                    <Image src="https://vctm.in/static/template1/wp-content/themes/kalindi/assets/images/testmonials-1.jpg" alt="VCTM Campus" width={280} height={180} />
                    <p style={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold' }}>Testimonials</p>
                </div>
                <div className='corner'>
                    <Image src="https://vctm.in/media/vctm/main-slider/DisplaySilder_8.jpg" alt="VCTM Campus" width={280} height={200} />
                </div>
                <div className='corner'>
                    <Image src="https://vctm.in/media/images/Libary/card-2.png" alt="VCTM Campus" width={280} height={180} />
                    <p style={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold' }}>Library</p>
                </div>
                <div className='corner'>
                    <Image src="https://vctm.in/static/template1/wp-content/themes/kalindi/assets/images/campus-life.jpg" alt="VCTM Campus" width={280} height={180} />
                    <p style={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold' }}>Campus Life</p>
                </div>
            </div>
            
            <p style={{ textAlign: 'center', fontSize: '22px', fontWeight: 'bold', marginTop: '25px' }}>Approval & Affiliations</p>

            <div className='approval'>
                <div className='approval-logo'>
                    <Image src="https://vctm.in/media/1_q2c18wU.png" alt="VCTM Campus" width={150} height={150} />
                </div>
                <div className='approval-logo'>
                    <Image src="https://vctm.in/media/2_O5oVwoo.png" alt="VCTM Campus" width={150} height={150} />
                </div>
                <div className='approval-logo'>
                    <Image src="https://vctm.in/media/3_2SMcrqW.png" alt="VCTM Campus" width={150} height={150} />
                </div>
                <div className='approval-logo'>
                    <Image src="https://vctm.in/media/art_logos_1.png" alt="VCTM Campus" width={150} height={150} />
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
                <p2>© 2025 VCTM All rights reserved. System Administrator <b>Yash Tripathi</b></p2>
            </div>
        </div>
    )
}

export default Page