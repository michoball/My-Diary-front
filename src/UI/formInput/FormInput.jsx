import React from "react";
import { Input, FormInputContainer, FromInputLabel } from "./FormInput.styles";

const FormInput = (props) => {
  const { label, ...otherProps } = props;
  return (
    <FormInputContainer>
      <FromInputLabel htmlFor={label}>{label && label}</FromInputLabel>
      <Input {...otherProps} />
    </FormInputContainer>
  );
};

export default FormInput;
