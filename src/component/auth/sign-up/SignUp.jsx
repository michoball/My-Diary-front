import { useState } from "react";
import FormInput from "../../../UI/formInput/FormInput";
import Button from "../../../UI/button/button";

import { useDispatch } from "react-redux";
import {
  SignUpContainer,
  LogInForm,
  ButtonContainer,
  HeaderContainer,
} from "./SignUp.styles";
import { DoorOpen } from "react-bootstrap-icons";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formfield, setFormfield] = useState(defaultFormFields);
  const dispatch = useDispatch();
  const { displayName, email, password, confirmPassword } = formfield;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormfield({
      ...formfield,
      [name]: value,
    });
  };

  const resetFormField = () => {
    setFormfield(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      throw new Error("password do not matched!");
    }

    if (!email.trim().includes("@")) {
      throw new Error("Please fill out the entire form");
    }
  };

  return (
    <SignUpContainer>
      <HeaderContainer>
        <h1>
          <DoorOpen /> 회원가입
        </h1>
      </HeaderContainer>
      <LogInForm onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          value={displayName}
          name="displayName"
          onChange={handleChange}
        />
        <FormInput
          label="Email"
          type="email"
          required
          value={email}
          name="email"
          onChange={handleChange}
        />

        <FormInput
          className="password"
          label="Password"
          type="password"
          required
          value={password}
          name="password"
          onChange={handleChange}
        />

        <FormInput
          className="confirm"
          label="Confirm Password"
          type="password"
          required
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
        />
        <ButtonContainer>
          <Button type="submit">Sign Up</Button>
        </ButtonContainer>
      </LogInForm>
    </SignUpContainer>
  );
};

export default SignUpForm;
