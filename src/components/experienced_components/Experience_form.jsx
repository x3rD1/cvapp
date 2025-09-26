import Heading from "../form_components/heading";
import { InputWrapper } from "../form_components/input_form";
import { Button } from "../form_components/Contact_button";
import "/src/styles/experience_form.css";

export default function ExperienceForm({ input, setInput, goBack, goNext }) {
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
        <InputWrapper
          value={input.jobTitle}
          name="jobTitle"
          input={input}
          setInput={setInput}
          id="job"
          type="text"
          placeholder="Job Title"
        />
        <InputWrapper
          value={input.companyName}
          name="companyName"
          input={input}
          setInput={setInput}
          id="company"
          type="text"
          placeholder="Company or Organization name"
        />
        <InputWrapper
          value={input.country}
          name="country"
          input={input}
          setInput={setInput}
          id="country"
          type="text"
          placeholder="Country"
        />
        <InputWrapper
          value={input.sorp}
          name="sorp"
          input={input}
          setInput={setInput}
          id="s-p"
          type="text"
          placeholder="State/Province"
        />
        <InputWrapper
          value={input.city}
          name="city"
          input={input}
          setInput={setInput}
          id="city"
          type="text"
          placeholder="City"
        />
        <InputWrapper
          value={input.sMonth}
          name="sMonth"
          input={input}
          setInput={setInput}
          id="sMonth"
          type="text"
          placeholder="Start Month"
        />
        <InputWrapper
          value={input.sYear}
          name="sYear"
          input={input}
          setInput={setInput}
          id="sYear"
          type="tel"
          placeholder="Start Year"
        />
        <InputWrapper
          value={input.eMonth}
          name="eMonth"
          input={input}
          setInput={setInput}
          id="eMonth"
          type="text"
          placeholder="End Month"
        />
        <InputWrapper
          value={input.eYear}
          name="eYear"
          input={input}
          setInput={setInput}
          id="eYear"
          type="tel"
          placeholder="End Year"
        />
      </div>
      <div className="button-wrapper">
        <Button className="backBtn" btnName="Back" goBack={goBack} />
        <Button className="saveBtn" btnName="Continue" goNext={goNext} />
      </div>
    </>
  );
}
