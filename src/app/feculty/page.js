import React from "react";
import "./page.css";

const facultyData = [
  // Computer Science
  { department: "Computer Science", name: "DR. MOHAMMAD HARIS", role: "HOD", photo: "/faculty/mohdharis.jpg" },
  { department: "Computer Science", name: "MR. YASH TRIPATHI", role: "HOD POLYTECHNIC, CSE", photo: "/faculty/yash.jpg" },
  { department: "Computer Science", name: "MR. PRAVEEN KUMAR", role: "ASST. PROFESSOR", photo: "/faculty/praveen.jpg" },
  { department: "Computer Science", name: "MR.WASEEM KHAN", role: "ASST. PROFESSOR", photo: "/faculty/waseem.jpg" },
  { department: "Computer Science", name: "MS. HEMLATA CHAUDHARY", role: "ASST. PROFESSOR", photo: "/faculty/hemlata.jpg" },
  { department: "Computer Science", name: "MS. SANDHYA", role: "ASST. PROFESSOR", photo: "/faculty/sandhya.jpg" },
  { department: "Computer Science", name: "MR. HARSH MATHUR", role: "ASST. PROFESSOR", photo: "/faculty/harsh.jpg" },
  { department: "Computer Science", name: "MR. PRAVEEN SHARMA", role: "ASST. PROFESSOR", photo: "/faculty/praveensharma.jpg" },
  { department: "Computer Science", name: "MR. JITENDRA KUMAR SINGH", role: "ASST. PROFESSOR", photo: "/faculty/jitendra.jpg" },
  { department: "Computer Science", name: "MR. ALOK GUPTA", role: "ASST. PROFESSOR", photo: "/faculty/alok.jpg" },
  { department: "Computer Science", name: "MS. SWATI PANDIT", role: "ASST. PROFESSOR", photo: "/faculty/swati.jpg" },
  { department: "Computer Science", name: "MR. ABDUL SHEERAJ", role: "ASST. PROFESSOR", photo: "/faculty/abdul.jpg" },

  // Mechanical Engineering
  { department: "Mechanical Engineering", name: "MR. UMARDARAJ KHAN", role: "HOD", photo: "/faculty/umardaraj.jpg" },
  { department: "Mechanical Engineering", name: "MR. SANTOSH KUMAR AWASTHI", role: "HOD POLYTECHNIC ME", photo: "/faculty/santosh.jpg" },
  { department: "Mechanical Engineering", name: "MR. SANJEEV SARSWAT", role: "POLYTECHNIC CO-ORDINATOR", photo: "/faculty/sanjeev.jpg" },
  { department: "Mechanical Engineering", name: "MR. SHOAIB SABRI", role: "ASST. PROFESSOR", photo: "/faculty/shoaib.jpg" },
  { department: "Mechanical Engineering", name: "MR. FAHEEM AHMAD", role: "ASST. PROFESSOR", photo: "/faculty/faheem.jpg" },
  { department: "Mechanical Engineering", name: "MR. DESH DEEPAK VERMA", role: "ASST. PROFESSOR", photo: "/faculty/desh.jpg" },
  { department: "Mechanical Engineering", name: "MR. MOHD. UBAID KHAN", role: "ASST. PROFESSOR", photo: "/faculty/ubaid.jpg" },
  { department: "Mechanical Engineering", name: "MR. KULDEEP SINGH", role: "ASST. PROFESSOR", photo: "/faculty/kuldeep.jpg" },
  { department: "Mechanical Engineering", name: "DR. BHANU PRAKASH", role: "ASST. PROFESSOR", photo: "/faculty/bhanu.jpg" },
  { department: "Mechanical Engineering", name: "DR. SUSHIL KUMAR SINGH", role: "ASST. PROFESSOR", photo: "/faculty/sushil.jpg" },

  // Electronics Communication
  { department: "Electronics Communication", name: "MR. JAI KISHAN SINGH", role: "HOD", photo: "/faculty/jaikishan.jpg" },
  { department: "Electronics Communication", name: "MS. AALIYA", role: "HOD POLYTECHNIC EC", photo: "/faculty/aaliya.jpg" },
  { department: "Electronics Communication", name: "MR MOHAN KUMAR SHARMA", role: "ASST. PROFESSOR", photo: "/faculty/mohan.jpg" },
  { department: "Electronics Communication", name: "MR. PARITOSH SHARMA", role: "ASST. PROFESSOR", photo: "/faculty/paritosh.jpg" },
  { department: "Electronics Communication", name: "MR. HIMANSHU MAHOUR", role: "ASST. PROFESSOR", photo: "/faculty/himanshu.jpg" },

  // Applied Science
  { department: "Applied Science", name: "DR. AJAY KUMAR MAHUR", role: "HOD", photo: "/faculty/ajay.jpg" },
  { department: "Applied Science", name: "DR. NASEEM AHMAD KHAN", role: "PROCTOR", photo: "/faculty/naseem.jpg" },
  { department: "Applied Science", name: "MR. NITIN RATHI", role: "ASST. PROFESSOR", photo: "/faculty/nitin.jpg" },
  { department: "Applied Science", name: "DR. MANISH AGRAWAL", role: "PROFESSOR", photo: "/faculty/manish.jpg" },
  { department: "Applied Science", name: "DR. SAYED MOHD. ABBAS", role: "PROFESSOR", photo: "/faculty/abbas.jpg" },
  { department: "Applied Science", name: "MS. DEEPIKA SINGH", role: "ASST. PROFESSOR", photo: "/faculty/deepika.jpg" },
  { department: "Applied Science", name: "DR. SYED ABID ZAKI", role: "PROFESSOR", photo: "/faculty/abid.jpg" },
  { department: "Applied Science", name: "DR. RAJ KUMAR SARASWAT", role: "PROFESSOR", photo: "/faculty/raj.jpg" },
  { department: "Applied Science", name: "MR. DILIP KUMAR VARSHNEY", role: "ASST. PROFESSOR", photo: "/faculty/dilip.jpg" },
  { department: "Applied Science", name: "DR. ANIL GUPTA", role: "PROFESSOR", photo: "/faculty/anil.jpg" },

  // Electrical Engineering
  { department: "Electrical Engineering", name: "DR. AISHA MALIK", role: "HOD", photo: "/faculty/aisha.jpg" },
  { department: "Electrical Engineering", name: "MR. ARVIND KUMAR", role: "ASST. PROFESSOR", photo: "/faculty/arvind.jpg" },
  { department: "Electrical Engineering", name: "MR. JASWAT SINGH", role: "ASST. PROFESSOR", photo: "/faculty/jaswat.jpg" },
  { department: "Electrical Engineering", name: "MR. ISLAM KHAN", role: "ASST. PROFESSOR", photo: "/faculty/islam.jpg" },
  { department: "Electrical Engineering", name: "MR YOGENDRA KUMAR", role: "ASST. PROFESSOR", photo: "/faculty/yogendra.jpg" },
  { department: "Electrical Engineering", name: "MR. RACHIT ARORA", role: "ASST. PROFESSOR", photo: "/faculty/rachit.jpg" },
  { department: "Electrical Engineering", name: "MR. SAURABH UPADHYAY", role: "ASST. PROFESSOR", photo: "/faculty/saurabh.jpg" },
  { department: "Electrical Engineering", name: "MR BASHARAT AHMAD", role: "ASST. PROFESSOR", photo: "/faculty/basharat.jpg" },

  // Add Civil, MBA, Agricultural here similarly...
];

const FacultyPage = () => {
  const departments = [...new Set(facultyData.map(t => t.department))];

  return (
    <div className="faculty-page">
      {departments.map((dept, i) => (
        <div key={i} className="department-section">
          <h2>{dept}</h2>
          <div className="teachers-grid">
            {facultyData.filter(t => t.department === dept).map((teacher, idx) => (
              <div key={idx} className="teacher-card">
                <img src={teacher.photo} alt={teacher.name} />
                <h3>{teacher.name}</h3>
                <p>{teacher.role}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FacultyPage;
