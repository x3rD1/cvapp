import Heading from "./heading";
import { Button } from "./form_components/Contact_button";
import "/src/styles/summary.css";

export default function Summary({ goBack, goNext }) {
  return (
    <>
      <div className="summary-heading">
        <Heading
          title="Professional Summary"
          paragraph={`This section will usually be one of the first things a hiring manager reads. It tells them, "Here's who I am, and here's what i can do for your company".`}
        />
      </div>
      <div className="summary-text-area">
        <textarea
          id="summary"
          rows={10}
          cols={50}
          placeholder="Add, edit and write here."
        />
      </div>
      <div className="button-wrapper">
        <Button className="backBtn" btnName="Back" goBack={goBack} />
        <Button className="saveBtn" btnName="Continue" goNext={goNext} />
      </div>
    </>
  );
}
