import Heading from "../form_components/heading";
import { InputWrapper } from "../form_components/input_form";
import { Button } from "../form_components/Contact_button";
import "/src/styles/education_form.css";
import { useState } from "react";
export default function EducationForm({ input, setInput, goBack, goNext }) {
  const [isChecked, setChecked] = useState(false);
  return (
    <>
      <div className="edu-heading">
        <Heading
          title="Education"
          paragraph="Great job! You're on to the next section. Where did you attend college or university?"
        />
      </div>
      <div className="edu-form-wrapper-container">
        <div className="edu-form-wrapper">
          <InputWrapper
            value={input.schoolName}
            name="schoolName"
            input={input}
            setInput={setInput}
            placeholder="School Name"
          />
          <InputWrapper
            value={input.schoolLoc}
            name="schoolLoc"
            input={input}
            setInput={setInput}
            placeholder="School Location"
            type="text"
          />
          <InputWrapper
            value={input.degree}
            name="degree"
            input={input}
            setInput={setInput}
            placeholder="Degree or Program"
            type="text"
          />
          <InputWrapper
            value={input.fieldOfStudy}
            name="fieldOfStudy"
            input={input}
            setInput={setInput}
            placeholder="Field of Study"
            type="text"
          />
          <InputWrapper
            value={input.gradMon}
            name="gradMon"
            input={input}
            setInput={setInput}
            id="gradMonth"
            placeholder="Graduation Month"
            type="text"
            isChecked={isChecked}
          />
          <InputWrapper
            value={input.gradYear}
            name="gradYear"
            input={input}
            setInput={setInput}
            id="gradYear"
            placeholder="Graduation Year"
            type="text"
            isChecked={isChecked}
          />
        </div>

        <div className="date-omission">
          <label htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              onChange={(e) => setChecked(e.target.checked)}
            />
            Remove graduation date from resume.
          </label>
        </div>
      </div>
      <div className="button-wrapper">
        <Button className="backBtn" btnName="Back" goBack={goBack} />
        <Button className="saveBtn" btnName="Continue" goNext={goNext} />
      </div>
    </>
  );
}
