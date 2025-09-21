import "../../styles/form_btn.css";

export default function ButtonWrapper({ next }) {
  return (
    <div className="button-wrapper">
      <Button className="backBtn" btnName="Back" />
      <Button className="saveBtn" btnName="Save & Continue" onNext={next} />
    </div>
  );
}

function Button({ btnName, className, onNext }) {
  return (
    <button className={className} onClick={onNext}>
      {btnName}
    </button>
  );
}
