import "../../styles/form_btn.css";

export default function ButtonWrapper({ goNext, goBack }) {
  return (
    <div className="button-wrapper">
      <Button className="backBtn" btnName="Back" goBack={goBack} />
      <Button className="saveBtn" btnName="Save & Continue" goNext={goNext} />
    </div>
  );
}

export function Button({ btnName, className, goNext, goBack }) {
  return (
    <button
      className={className}
      onClick={btnName === "Back" ? goBack : goNext}
    >
      {btnName}
    </button>
  );
}
