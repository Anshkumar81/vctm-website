import React from 'react'
import './page.css';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";
import Header from '../../../components/header';



function page() {
  
  return (
    <div>
      <Header />

      <div className='about-hd'>
        <p className='text-2xl text-center text-white pt-2 font-bold'>ABOUT COLLEGE</p>
      </div>
      <div className='ml-80 mt-10'>
        <Image src="https://vctm.in/media/infrastructure/front.png" alt="VCTM photo" width={900} height={800} />
      </div>
      <div className='h-10 w-300 bg-[#294c81] justify-center ml-45 mt-10'>
        <p className='text-xl text-center text-white pt-2 font-bold'>Vivekananda College of Technology and Management (VCTM) is established under NL EDUCATIONAL SOCIETY.</p>
      </div>
      <div>
        <p className='font-bold pl-50 pt-5 pb-8 text-[20px]'>vivekananda Group of Colleges comprises of:</p>
        <div className='detail'>
          <div className='box1'>
            <p><b>1.</b> Vivekananda College of Education (VCOE), established in 2003 – 2004 is affiliated to B. R. Ambedkar University,
              Agra (U. P.), India and approved by NCET, Jaipur <br />
              <b>2.</b> Vivekananda College of Law (VCOL) in 2004 – 2005, affiliated to B. R. Ambedkar University, Agra (U. P.), India and
              approved by the Bar Council of India<br />
              <b>3.</b> Vivekananda College of Technology & Management (VCTM), approved by AICTE and affiliated to Dr. A.P.J. Abdul Kalam Technical University, Lucknow(AKTU)
              formerly Uttar Pradesh Technical University and Board of Technical Education, Lucknow<br />
              <b>4.</b> Vivekananda College of Polytechnic (VCP), approved by AICTE and affiliated to Board of Technical Education, Lucknow
            </p>
          </div>
          <div className='box2'>
            <p><b>
              The campus of VCTM is located at stone throw distance from the crossing of Khair road and Mathura Bypass. It is
              nearly 3 Km from the main city of Aligarh, about 5 Km from AMU campus and not more than 100 Km from NCR zone.
              Situated in a lush green belt the campus has environment absolutely free from pollution and traffic hazards. The
              building of the college has a beautiful architecture with artistic landscape and lush green lawns. The College contains
              all necessary infrastructure required for any good academic institution of higher studies, including spacious
              classrooms and tutorial rooms, well furnished seminar and conference halls, spacious library with good collection
              books, well equipped laboratories and workshop, common rooms for girls and boys, a separate hall for indoor games
              and an attractive cafeteria. Audio-visual aids and advanced multi-media training gadgets the key players amongst
              modern teaching methods have been fixed in class rooms. Personality Development Programs and Co-curricular
              activities like Educational Club, Cultural Society and Students Council are functional in the college.
            </b>
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