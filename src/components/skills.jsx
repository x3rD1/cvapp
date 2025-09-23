import { useState } from "react";
import Heading from "./heading";
import { Button } from "./form_components/Contact_button";
import "/src/styles/skills.css";

export default function Skills({ goBack, goNext }) {
  const [text, setText] = useState("");
  const [newLineCount, setNewLineCount] = useState(0);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      setNewLineCount(newLineCount + 1);
      const bullet = "• ";
      const { selectionStart, selectionEnd } = e.target;

      const newText =
        text.substring(0, selectionStart) +
        "\n" +
        bullet +
        text.substring(selectionEnd);

      setText(newText);

      setTimeout(() => {
        const newPos = selectionStart + bullet.length + 1;
        e.target.setSelectionRange(newPos, newPos);
      }, 0);
    }
  }
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="skills-heading">
        <Heading
          title="Skills"
          paragraph="You're on a roll. Let's find relevant skills for the job you're applying for. Listing 6-10 skills is best."
        />
      </div>
      <div className="skills-text-area">
        <textarea
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => !text && setText("• ")}
          rows={10}
          cols={50}
          placeholder="Add, edit and write here."
        />
        <p>Skills: {newLineCount} (Aim for 6-10)</p>
      </div>
      <div className="button-wrapper">
        <Button className="backBtn" btnName="Back" goBack={goBack} />
        <Button className="saveBtn" btnName="Continue" goNext={goNext} />
      </div>
    </>
  );
}
