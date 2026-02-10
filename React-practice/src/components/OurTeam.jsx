// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import '../styles/OurTeam.css';

// const OurTeam = () => {
//   const teamData = {
//     "Faculty Incharge": Array.from({ length: 9 }, (_, i) => ({ id: `fac-${i}`, name: `FACULTY_${i+1}`, domain: "MENTOR", year: "STAFF" })),
//     "4th Year Members": Array.from({ length: 9 }, (_, i) => ({ id: `4th-${i}`, name: `4th_YEAR_${i+1}`, domain: "WEB", year: "2024" })),
//     "3rd Year Members": Array.from({ length: 9 }, (_, i) => ({ id: `3rd-${i}`, name: `3rd_YEAR_${i+1}`, domain: "AI", year: "2025" })),
//     "2nd Year Members": Array.from({ length: 9 }, (_, i) => ({ id: `2nd-${i}`, name: `2nd_YEAR_${i+1}`, domain: "APP", year: "2026" }))
//   };

//   const [activeTab, setActiveTab] = useState("4th Year Members");

//   return (
//     <>
//       <Navbar /> 
//       <div className="team-page">
//         <div className="binary-bg">
//           {Array(100).fill("0 1 0 1 ").join(" ")}
//         </div>

//         <div className="content-wrapper">
//           <h1 className="team-header">&gt; Society_Members_</h1>

//           <div className="team-layout">
//             <div className="sidebar">
//               {Object.keys(teamData).map((tab) => (
//                 <button
//                   key={tab}
//                   className={`nav-btn ${activeTab === tab ? 'active' : ''}`}
//                   onClick={() => setActiveTab(tab)}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>

//             <div className="members-container">
//               <div className="members-grid">
//                 {teamData[activeTab].map((member) => (
//                   <div key={member.id} className="member-card">
//                     <div className="profile-square"></div>
//                     <div className="info-text">
//                       <p><span className="label">NAME :</span><span className="value">{member.name}</span></p>
//                       <p><span className="label">DOMAIN :</span><span className="value">{member.domain}</span></p>
//                       <p><span className="label">YEAR :</span><span className="value">{member.year}</span></p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OurTeam;
import React, { useState } from 'react';
import Navbar from './Navbar';
import '../styles/OurTeam.css';

const OurTeam = () => {
  const teamData = {
    "Faculty Incharge": [
      { id: "fac-1", name: "Member Name", domain: "Domain Name", year: "Year" },
      { id: "fac-2", name: "Member Name", domain: "Domain Name", year: "Year" },
      { id: "fac-3", name: "Member Name", domain: "Domain Name", year: "Year" },
      { id: "fac-4", name: "Member Name", domain: "Domain Name", year: "Year" },
      { id: "fac-5", name: "Member Name", domain: "Domain Name", year: "Year" },
      { id: "fac-6", name: "Member Name", domain: "Domain Name", year: "Year" },
      { id: "fac-7", name: "Member Name", domain: "Domain Name", year: "Year" },
      { id: "fac-8", name: "Member Name", domain: "Domain Name", year: "Year" },
      { id: "fac-9", name: "Member Name", domain: "Domain Name", year: "Year" },
    ],
    "4th Year Members": [
      { id: "4th-1", name: "Member Name", domain: "Domain Name", year: "Year" },
      { id: "4th-2", name: "Member Name", domain: "Domain Name", year: "Year" },
      { id: "4th-3", name: "Member Name", domain: "Domain Name", year: "Year" },
      { id: "4th-4", name: "Member Name", domain: "Domain Name", year: "Year" },
      { id: "4th-5", name: "Member Name", domain: "Domain Name", year: "Year" },
      { id: "4th-6", name: "Member Name", domain: "Domain Name", year: "Year" },
      { id: "4th-7", name: "Member Name", domain: "Domain Name", year: "Year" },
      { id: "4th-8", name: "Member Name", domain: "Domain Name", year: "Year" },
      { id: "4th-9", name: "Member Name", domain: "Domain Name", year: "Year" },
    ],
    "3rd Year Members": [
      { id: "3rd-1", name: " Pratyush Sir", domain: "", year: "2027" },
      { id: "3rd-2", name: " Krishna Sir", domain: "Domain Name", year: "2027" },
      { id: "3rd-3", name: "Ayushman Sir", domain: "Domain Name", year: "2027 " },
      { id: "3rd-4", name: "Member Name", domain: "Domain Name", year: "Year" },
      { id: "3rd-5", name: "Member Name", domain: "Domain Name", year: "Year" },
      { id: "3rd-6", name: "Member Name", domain: "Domain Name", year: "Year" },
      { id: "3rd-7", name: "Member Name", domain: "Domain Name", year: "Year" },
      { id: "3rd-8", name: "Member Name", domain: "Domain Name", year: "Year" },
      { id: "3rd-9", name: "Member Name", domain: "Domain Name", year: "Year" },
    ],
    "2nd Year Members": [
      { id: "2nd-1", name: " Prakhar Dixit", domain: " Frontend", year: " 2028" },
      { id: "2nd-2", name: " Yash Kumar", domain: " Frontend", year: " 2028" },
      { id: "2nd-3", name: " Devyansh Gupta", domain: " Frontend", year: " 2028" },
      { id: "2nd-4", name: " Neeraj ", domain: "Domain Name", year: " 2028" },
      { id: "2nd-5", name: " Abdul Mannan", domain: "Domain Name", year: " 2028" },
      { id: "2nd-6", name: " Diksha Jain", domain: "Domain Name", year: " 2028" },
      { id: "2nd-7", name: " Pooja", domain: "Domain Name", year: " 2028" },
      { id: "2nd-8", name: " Pragya Pandey", domain: "Domain Name", year: " 2028" },
      { id: "2nd-9", name: " Satyam", domain: "Domain Name", year: " 2028" },
      { id: "2nd-10", name: " Gaurav Chauhan", domain: "Domain Name", year: " 2028" },
      { id: "2nd-11", name: " Utkarsh Patel", domain: "Domain Name", year: " 2028" },
      { id: "2nd-12", name: " Ayush", domain: "Domain Name", year: " 2028" },
      { id: "2nd-13", name: " Saurabh Bhati", domain: "Domain Name", year: " 2028" },
      { id : "2nd-14", name: " Harshit Singh", domain: "Domain Name", year: " 2028" },
    ]
  };

  const [activeTab, setActiveTab] = useState("4th Year Members");

  return (
    <>
      <Navbar /> 
      <div className="team-page">
        <div className="binary-bg">
          {Array(100).fill("0 1 0 1 ").join(" ")}
        </div>

        <div className="content-wrapper">
          <h1 className="team-header">&gt; Society_Members_</h1>

          <div className="team-layout">
            <div className="sidebar">
              {Object.keys(teamData).map((tab) => (
                <button
                  key={tab}
                  className={`nav-btn ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="members-container">
              <div className="members-grid">
                {teamData[activeTab].map((member) => (
                  <div key={member.id} className="member-card">
                    <div className="profile-square"></div>
                    <div className="info-text">
                      <p><span className="label">NAME :</span><span className="value">{member.name}</span></p>
                      <p><span className="label">DOMAIN :</span><span className="value">{member.domain}</span></p>
                      <p><span className="label">YEAR :</span><span className="value">{member.year}</span></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;