import "/src/styles/form_wrapper.css";

export default function InputForm() {
  return (
    <div className="form-wrapper">
      <InputWrapper
        type="text"
        placeholder="First Name"
        id="textFNAM"
        name="FNAM"
      />
      <InputWrapper
        type="text"
        placeholder="Last Name"
        id="textLNAM"
        name="LNAM"
      />
      <InputWrapper
        type="text"
        placeholder="Desired Job Title (Optional)"
        id="jobTitle"
      />
      <InputWrapper type="email" placeholder="Email" id="email" name="mail" />
      <InputWrapper type="tel" placeholder="Phone" id="phone" name="phne" />
      <InputWrapper
        type="text"
        placeholder="Country"
        id="country"
        name="cntry"
      />
      <InputWrapper type="text" placeholder="City" id="city" name="cty" />
      <InputWrapper type="text" placeholder="State" id="state" name="stt" />
      <InputWrapper
        type="text"
        placeholder="Zip/Postal Code"
        id="zip"
        name="zp"
      />
    </div>
  );
}

function InputWrapper({ placeholder, name, id, type }) {
  return (
    <div className="input-wrapper">
      <div className="input-container">
        <label className="input-label" htmlFor={id}></label>

        <input type={type} name={name} id={id} placeholder={placeholder} />
      </div>
    </div>
  );
}
