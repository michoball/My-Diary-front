import { useState, useEffect } from "react";
import FormInput from "../../../UI/formInput/FormInput";
import Button, { BUTTON_TYPE_CLASSES } from "../../../UI/button/button";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../../features/user/userSlice";
import { selectUserReducer } from "../../../features/user/user.select";
import {
  ButtonsContainer,
  LogInForm,
  SignInHeader,
  NavLink,
} from "./Signin.styles";
import { BoxArrowInRight } from "react-bootstrap-icons";
import Loading from "../../../UI/loading/Loading";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formfield, setFormfield] = useState(defaultFormFields);
  const navigate = useNavigate();
  const { email, password } = formfield;
  const { user, isError, isLoading, isSuccess, message } =
    useSelector(selectUserReducer);

  useEffect(() => {
    if (isError) {
      alert(`Something wrong ~  ${message}`);
    }

    //Redirect when logged in
    if (isSuccess) {
      alert(`login success ~ `);

      // navigate("/");
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim().includes("@")) {
      throw new Error("Please fill out the entire form");
    }
    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
    resetFormField();
  };
  const logGoogleUser = async () => {
    navigate("/");
  };

  return (
    <>
      <SignInHeader>
        <h2>
          <BoxArrowInRight /> Log In
        </h2>
        <NavLink to="/login">회원가입</NavLink>
      </SignInHeader>
      {isLoading ? (
        <Loading />
      ) : (
        <LogInForm onSubmit={handleSubmit}>
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

          <ButtonsContainer>
            <Button type="submit">Sign In</Button>
            <Button
              type="button"
              buttonType={BUTTON_TYPE_CLASSES.base}
              className="google"
              onClick={logGoogleUser}
            >
              Google Sign In
            </Button>
          </ButtonsContainer>
        </LogInForm>
      )}
    </>
  );
};

export default SignInForm;
