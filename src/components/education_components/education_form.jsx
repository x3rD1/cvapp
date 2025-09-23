import Heading from "../heading";
import { InputWrapper } from "../form_components/input_form";
import { Button } from "../form_components/Contact_button";
import "/src/styles/education_form.css";
import { useState } from "react";
export default function EducationForm({ goBack, goNext }) {
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
          <InputWrapper placeholder="School Name" />
          <InputWrapper placeholder="School Location" type="text" />
          <InputWrapper placeholder="Degree or Program" type="text" />
          <InputWrapper placeholder="Field of Study" type="text" />
          <InputWrapper
            id="gradMonth"
            placeholder="Graduation Month"
            type="text"
            isChecked={isChecked}
          />
          <InputWrapper
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
