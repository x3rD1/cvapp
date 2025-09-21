import Heading from "./heading";
import InputForm from "./input_form";
import ButtonWrapper from "./form_button";

export default function Form({ next }) {
  return (
    <>
      <Heading />
      <InputForm />
      <ButtonWrapper next={next} />
    </>
  );
}
