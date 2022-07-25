import React from "react";
import { Input, FormInputContainer, FromInputLabel } from "./FormInput.styles";

const FormInput = (props) => {
  const { label, className, ...otherProps } = props;
  return (
    <FormInputContainer>
      <FromInputLabel htmlFor={label}>{label && label}</FromInputLabel>
      <Input {...otherProps} className={className} />
    </FormInputContainer>
  );
};

export default FormInput;
