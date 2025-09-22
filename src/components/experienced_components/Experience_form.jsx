import Heading from "../heading";
import { InputWrapper } from "../form_components/input_form";
import { Button } from "../form_components/Contact_button";
import "/src/styles/experience_form.css";

export default function ExperienceForm({ goBack }) {
  const expHeading = {
    title: "Experience",
    paragraph:
      "This is going to be easy, we promise! Let's start with your most recent job.",
  };
  return (
    <>
      <div className="exp-heading-layout">
        <Heading title={expHeading.title} paragraph={expHeading.paragraph} />
      </div>
      <div className="exp-form-wrapper">
        <InputWrapper id="job" type="text" placeholder="Job Title" />
        <InputWrapper
          id="company"
          type="text"
          placeholder="Company or Organization name"
        />
        <InputWrapper id="country" type="text" placeholder="Country" />
        <InputWrapper id="s-p" type="text" placeholder="State/Province" />
        <InputWrapper id="city" type="text" placeholder="City" />
        <InputWrapper id="sMonth" type="text" placeholder="Start Month" />
        <InputWrapper id="sYear" type="tel" placeholder="Start Year" />
        <InputWrapper id="eMonth" type="text" placeholder="End Month" />
        <InputWrapper id="eYear" type="tel" placeholder="End Year" />
      </div>
      <div className="button-wrapper">
        <Button className="backBtn" btnName="Back" goBack={goBack} />
        <Button className="saveBtn" btnName="Continue" />
      </div>
    </>
  );
}
