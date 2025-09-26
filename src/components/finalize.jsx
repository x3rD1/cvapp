import "/src/styles/finalize.css";

export default function Finalize({ input }) {
  return (
    <>
      <div className="final-contact-wrapper">
        <div className="name-info">
          <p className="fullName">
            {input.fname} {input.lname}
          </p>
          <p className="job-title">{input.desiredJob}</p>
        </div>
        <div className="contact-info-wrapper">
          <div className="contact-info">
            <p>{input.phne}</p>
            <span>•</span>
            <p>{input.mail}</p>
            <span>•</span>
            <p>
              {input.cty}, {input.stt} {input.zp}
            </p>
          </div>
        </div>
      </div>
      <div className="final-summary-container">{input.summary}</div>
      <div className="final-skills-container">
        <p className="skills">Skills</p>
        <div className="skills-layout">{input.skills}</div>
      </div>
      <div className="final-exp-container">
        <p>{input.jobTitle && "Experience"}</p>
        <div className="job-info-container">
          <p className="final-job-title">{input.jobTitle}</p>
          <p className="final-company-info">{input.companyName}</p>
          <p className="final-job-YOS">
            {input.sMonth} {input.sYear} — {input.eMonth} {input.eYear}
          </p>
        </div>
      </div>
      <div className="final-edu-container">
        <p>Education</p>
        <div className="final-school-info">
          <p className="final-edu-degree">
            {input.degree} in {input.fieldOfStudy}
          </p>
          <p className="final-edu-school">
            {input.schoolName}, {input.schoolLoc}
          </p>
          <p className="final-edu-year">
            {input.gradMon} {input.gradYear}
          </p>
        </div>
      </div>
    </>
  );
}
