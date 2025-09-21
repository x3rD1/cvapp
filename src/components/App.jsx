import "/src/App.css";
import Form from "./form_components/Contact_form.jsx";
import Experience from "./experienced_components/Experience.jsx";
import { useState } from "react";
import ExperienceForm from "./experienced_components/Experience_form.jsx";

function App() {
  const [step, setStep] = useState("form");
  console.log(step);
  return (
    <>
      {step === "form" && <Form goNext={() => setStep("exp")} />}
      {step === "exp" && <Experience goNext={() => setStep("expForm")} />}
      {step === "expForm" && <ExperienceForm goBack={() => setStep("form")} />}
    </>
  );
}

export default App;
