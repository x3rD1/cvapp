import "/src/styles/experience.css";

export default function Experience({ goNext }) {
  return (
    <div className="builder-wrapper-layout">
      <div className="builder-header">
        <h1>Would you like to add a Work experience section?</h1>
        <p>
          Work experience can include duties performed during unofficial jobs,
          internships, extracurricular activities, or relevant hobbies.
        </p>
      </div>
      <div className="builder-buttons">
        <button onClick={goNext}>Yes</button>
        <button>No</button>
      </div>
    </div>
  );
}
