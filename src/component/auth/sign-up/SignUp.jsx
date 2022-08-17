import { useState, useEffect } from "react";
import FormInput from "../../../UI/formInput/FormInput";
import Button from "../../../UI/button/button";
import { ReactComponent as Mydiary } from "../../../assets/Logo.svg";
import { register, reset } from "../../../features/user/userSlice";
import { selectUserReducer } from "../../../features/user/user.select";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  SignUpContainer,
  LogInForm,
  ButtonContainer,
  HeaderContainer,
} from "./SignUp.styles";
import { PersonFill } from "react-bootstrap-icons";
import Loading from "../../../UI/loading/Loading";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formfield, setFormfield] = useState(defaultFormFields);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isLoading, isSuccess, message } =
    useSelector(selectUserReducer);
  const { displayName, email, password, confirmPassword } = formfield;

  useEffect(() => {
    if (isError) {
      alert(`Something wrong ~  ${message}`);
    }

    //Redirect when logged in
    if (isSuccess || user) {
      navigate("/");
      alert(`user already logged in user : ${user.displayName}`);
    }
    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

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
      throw new Error("비밀번호가 일치하지 않습니다.");
    }
    if (!email.trim().includes("@")) {
      throw new Error("이메일을 정확히 입력하시오");
    }
    const userData = {
      displayName,
      email,
      password,
    };

    dispatch(register(userData));
    resetFormField();
  };

  return (
    <SignUpContainer>
      <HeaderContainer>
        <Mydiary className="Logo" />
        <h3>
          <PersonFill /> 회원가입
        </h3>
      </HeaderContainer>
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </SignUpContainer>
  );
};

export default SignUpForm;
