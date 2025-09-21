import Heading from "./heading";
import InputForm from "./input_form";
import ButtonWrapper from "./Contact_button";

export default function Contact({ goNext }) {
  const contact = {
    title: "Let's start with the basics",
    paragraph:
      "To help employers contact you, add your name, email and phone number.",
  };
  return (
    <>
      <div className="form-heading-layout">
        <Heading title={contact.title} paragraph={contact.paragraph} />
      </div>
      <InputForm />
      <ButtonWrapper goNext={goNext} />
    </>
  );
}
