import "/src/styles/form_wrapper.css";

export default function InputForm({ input, setInput }) {
  return (
    <div className="form-wrapper">
      <InputWrapper
        value={input.fname}
        input={input}
        setInput={setInput}
        type="text"
        placeholder="First Name"
        id="textFNAM"
        name="fname"
      />
      <InputWrapper
        value={input.lname}
        input={input}
        setInput={setInput}
        type="text"
        placeholder="Last Name"
        id="textLNAM"
        name="lname"
      />
      <InputWrapper
        value={input.desiredJob}
        input={input}
        setInput={setInput}
        type="text"
        placeholder="Desired Job Title (Optional)"
        id="jobTitle"
        name="desiredJob"
      />
      <InputWrapper
        value={input.mail}
        input={input}
        setInput={setInput}
        type="email"
        placeholder="Email"
        id="email"
        name="mail"
      />
      <InputWrapper
        value={input.phne}
        input={input}
        setInput={setInput}
        type="tel"
        placeholder="Phone"
        id="phone"
        name="phne"
      />
      <InputWrapper
        type="text"
        placeholder="Country"
        id="country"
        name="cntry"
      />
      <InputWrapper
        value={input.cty}
        input={input}
        setInput={setInput}
        type="text"
        placeholder="City"
        id="city"
        name="cty"
      />
      <InputWrapper
        value={input.stt}
        input={input}
        setInput={setInput}
        type="text"
        placeholder="State"
        id="state"
        name="stt"
      />
      <InputWrapper
        value={input.zp}
        input={input}
        setInput={setInput}
        type="text"
        placeholder="Zip/Postal Code"
        id="zip"
        name="zp"
      />
    </div>
  );
}

export function InputWrapper({
  value,
  input,
  setInput,
  placeholder,
  name,
  id,
  type,
  isChecked,
}) {
  return (
    <div className={`input-wrapper ${id}`}>
      <div className="input-container">
        <label className="input-label" htmlFor={id}></label>

        <input
          value={value}
          onChange={(e) => setInput({ ...input, [name]: e.target.value })}
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          disabled={isChecked}
        />
      </div>
    </div>
  );
}
