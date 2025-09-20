import "../../styles/form_btn.css";

export default function ButtonWrapper() {
  return (
    <div className="button-wrapper">
      <Button className="backBtn" btnName="Back" />
      <Button className="saveBtn" btnName="Save & Continue" />
    </div>
  );
}

function Button({ btnName, className }) {
  return <button className={className}>{btnName}</button>;
}
