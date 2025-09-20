import "/src/App.css";
import Form from "./form_components/form.jsx";

function App() {
  let id = 0;
  return <>{id === 0 ? <Form /> : <CvApp />}</>;
}

export default App;
