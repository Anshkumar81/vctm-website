import React from 'react';
import './header.css';

function Header() {
  return (
    <div>
      <nav className='navbar'>
        <ul className='top'>
          <li>
            <span>AKTU Code: 340</span>
            <span>| BTE Code: 1628 |</span>
            <span>under NL EDUCATIONAL SOCIETY</span>
          </li>
          <li>
            <span>UPTAC-2025 Online Counselling</span>
            <span>| Online Enquiry</span>
          </li>
        </ul>

        {/* NAVBAR MENU */}
        <ul className='navbar-list'>
          <li className='vctm'>
            <a href='/'>VCTM</a>
          </li>

          {/* ABOUT US */}
          <li className="dropdown">
            <a href='/aboutus'>About us</a>
            <ul className="dropdown-menu">
              <li><a href="/aboutus">About College</a></li>
              <li><a href="/aboutus">Our Inspiration</a></li>
              <li><a href="/aboutus">Management</a></li>
              <li><a href="/aboutus">Why Join VCTM</a></li>
              <li><a href="/aboutus">Our Mission and Vision</a></li>
              <li><a href="/aboutus">Our Approach</a></li>
              <li><a href="/aboutus">Mandatory Disclosure</a></li>
              <li><a href="/aboutus">Affiliation</a></li>
              <li><a href="/aboutus">Faculty</a></li>
            </ul>
          </li>

          {/* CAMPUS LIFE */}
          <li className="dropdown">
            <a href='/campuslife'>Campus Life</a>
            <ul className="dropdown-menu">
              <li><a href="/campuslife">Campus Facilities</a></li>
              <li><a href="/campuslife">Hostel</a></li>
              <li><a href="/campuslife">Infrastructure</a></li>
              <li><a href="/campuslife">Transportation</a></li>
              <li><a href="/campuslife">Gallery of Campus Life</a></li>
            </ul>
          </li>

          {/* ADMISSIONS */}
          <li className="dropdown">
            <a href='/admissions'>Admissions</a>
            <ul className="dropdown-menu">
              <li><a href="/admissions">Courses</a></li>
              <li><a href="/admissions">Eligibility</a></li>
              <li><a href="/admissions">Fee Structure</a></li>
              <li><a href="/admissions">Admission Cell</a></li>
              <li><a href="/admissions">Special</a></li>
              <li><a href="/admissions">Counselling (Spot)</a></li>
            </ul>
          </li>

          {/* ADMINISTRATION */}
          <li className="dropdown">
            <a href='/Administractions'>Administractions</a>
            <ul className="dropdown-menu">
              <li><a href="/Administractions">Chairperson</a></li>
              <li><a href="/Administractions">Director</a></li>
              <li><a href="/Administractions">Principal</a></li>
              <li><a href="/Administractions">HODs</a></li>
              <li><a href="/Administractions">Office Staff</a></li>
            </ul>
          </li>

          {/* ACADEMICS */}
          <li className="dropdown">
            <a href='/Academics'>Academics</a>
            <ul className="dropdown-menu">
              <li><a href="/Academics">Departments</a></li>
              <li><a href="/Academics">Academic Calendar</a></li>
              <li><a href="/Academics">Academic Policy</a></li>
            </ul>
          </li>

          {/* PLACEMENT */}
          <li className="dropdown">
            <a href='/Placement'>Placement</a>
            <ul className="dropdown-menu">
              <li><a href="/Placement">Career Resource Center Department</a></li>
              <li><a href="/Placement">Our Recruiters & Associates</a></li>
              <li><a href="/Placement">Placement Activities</a></li>
              <li><a href="/Placement">Placement Records</a></li>
              <li><a href="/Placement">Photo Gallery Placement</a></li>
              <li><a href="/Placement">Alumni Form</a></li>
            </ul>
          </li>

          {/* CAREER */}
          <li className="dropdown">
            <a href='/feculty'>Career</a>
            <ul className="dropdown-menu">
              <li><a href="/feculty">Career With Us</a></li>
              <li><a href="/feculty">Faculty Recruitment</a></li>
              <li><a href="/feculty">Non-Teaching Recruitment</a></li>
              <li><a href="/feculty">Internship Opportunities</a></li>
              <li><a href="/feculty">How to Apply</a></li>
            </ul>
          </li>

          <li><a href='/contact'>Contact Us</a></li>

        </ul>
      </nav>
    </div>
  );
}

export default Header;
