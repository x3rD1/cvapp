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
    </>
  );
}
