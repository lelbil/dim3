import { Button, ButtonProps } from "@mui/material";
import React from "react";

interface Dim3ButtonProps extends ButtonProps{
  text: string;
}

const Dim3Button = ({ text, onClick }: Dim3ButtonProps) => (<Button variant={"contained"} onClick={onClick}>{text}</Button>);

export default Dim3Button;