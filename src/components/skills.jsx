import Heading from "./form_components/heading";
import { Button } from "./form_components/Contact_button";
import "/src/styles/skills.css";

export default function Skills({ input, setInput, goBack, goNext }) {
  const lineCount = (input.skills || "").match(/\n/g)?.length || 0;

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      const bullet = "• ";
      const { selectionStart, selectionEnd } = e.target;

      const newText =
        input.skills.substring(0, selectionStart) +
        "\n" +
        bullet +
        input.skills.substring(selectionEnd);

      setInput({ ...input, skills: newText });

      setTimeout(() => {
        const newPos = selectionStart + bullet.length + 1;
        e.target.setSelectionRange(newPos, newPos);
      }, 0);
    }
  }
  const handleChange = (e) => {
    setInput({ ...input, skills: e.target.value });
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
          value={input.skills}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => !input.skills && setInput({ ...input, skills: "• " })}
          rows={10}
          cols={50}
          placeholder="Add, edit and write here."
        />
        <p>Skills: {lineCount} (Aim for 6-10)</p>
      </div>
      <div className="button-wrapper">
        <Button className="backBtn" btnName="Back" goBack={goBack} />
        <Button className="saveBtn" btnName="Continue" goNext={goNext} />
      </div>
    </>
  );
}
