import { useState } from "react";
import Form from "./form_components/Contact_form.jsx";
import Experience from "./experienced_components/Experience.jsx";
import ExperienceForm from "./experienced_components/Experience_form.jsx";
import EducationForm from "./education_components/education_form.jsx";
import Skills from "./skills.jsx";
import Summary from "./professional_summary.jsx";
import "/src/App.css";

const steps = {
  form: (setStep) => <Form goNext={() => setStep("exp")} />,
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
    <Skills goBack={() => setStep("edu")} goNext={() => setStep("summary")} />
  ),
  summary: (setStep) => <Summary goBack={() => setStep("skills")} />,
};

function App() {
  const [step, setStep] = useState("form");
  const stepComponent = steps[step];

  console.log(step);
  return <>{stepComponent && stepComponent(setStep)}</>;
}

export default App;
