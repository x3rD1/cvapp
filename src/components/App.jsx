import "/src/App.css";
import Form from "./form_components/form.jsx";
import Experience from "./Experience.jsx";
import { useState } from "react";

function App() {
  const [step, setStep] = useState("form");
  return (
    <>
      {step === "form" && <Form next={() => setStep("exp")} />}
      {step === "exp" && <Experience />}
    </>
  );
}

export default App;
