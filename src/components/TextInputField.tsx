import {TextField, TextFieldProps} from "@mui/material";
import React from "react";

type TextInputFieldProps = TextFieldProps & {
  setValue: (newValue: string) => void;
};

const TextInputField: React.FC<TextInputFieldProps> = ({
  setValue,
  ...props
}) => (
  <TextField
    variant="outlined"
    sx={{
      width: '40%',
      ...props.sx
    }}
    {...props}
    onChange={(e) => setValue(e.target.value)}
  />
);

export default TextInputField;