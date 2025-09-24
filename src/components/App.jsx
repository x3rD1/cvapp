import { useState } from "react";
import Form from "./form_components/Contact_form.jsx";
import Experience from "./experienced_components/Experience.jsx";
import ExperienceForm from "./experienced_components/Experience_form.jsx";
import EducationForm from "./education_components/education_form.jsx";
import Skills from "./skills.jsx";
import Summary from "./professional_summary.jsx";
import Finalize from "./finalize.jsx";
import "/src/App.css";

function App() {
  const [step, setStep] = useState("form");
  const [input, setInput] = useState({
    fname: "",
    lname: "",
    desiredJob: "",
    mail: "",
    phne: "",
    cty: "",
    stt: "",
    zp: "",
    summary: "",
    skills: "",
  });
  const steps = {
    form: (setStep) => (
      <Form input={input} setInput={setInput} goNext={() => setStep("exp")} />
    ),
    exp: (setStep) => (
      <Experience
        goNextYes={() => setStep("expForm")}
        goNextNo={() => setStep("edu")}
      />
    ),
    expForm: (setStep) => <ExperienceForm goBack={() => setStep("form")} />,
    edu: (setStep) => (
      <EducationForm
        goBack={() => setStep("exp")}
        goNext={() => setStep("skills")}
      />
    ),
    skills: (setStep) => (
      <Skills
        input={input}
        setInput={setInput}
        goBack={() => setStep("edu")}
        goNext={() => setStep("summary")}
      />
    ),
    summary: (setStep) => (
      <Summary
        input={input}
        setInput={setInput}
        goBack={() => setStep("skills")}
        goNext={() => setStep("finalize")}
      />
    ),
    finalize: (setStep) => (
      <Finalize input={input} goBack={() => setStep("summary")} />
    ),
  };
  const stepComponent = steps[step];

  console.log(step);
  return <>{stepComponent && stepComponent(setStep)}</>;
}

export default App;
