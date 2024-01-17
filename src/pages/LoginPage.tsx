import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { login } from "../api/login";
import TextInputField from "../components/TextInputField";
import Dim3Button from "../components/Dim3Button";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");
    setLoading(true);

    // Can also add validation step using a library like JOI or useForm and show errors on the field
    const { error } = await login(username, password);

    if (error) {
      setError(error);
    } else {
      navigate("/patients");
    }

    setLoading(false);
  };

  const isDisabled = loading || !username || username.length > 3 || !password;

  return (
    <Box
      sx={{
        // TODO: use Grid instead?
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <TextInputField
        label={"Username"}
        value={username}
        setValue={setUsername}
      />
      <TextInputField
        label={"Password"}
        value={password}
        setValue={setPassword}
        type="password"
      />
      <Grid
        container
        width={"40%"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant={"body2"} color={"red"} ml={2}>
          {error}
        </Typography>
        <Dim3Button
          onClick={handleLogin}
          text={"Login"}
          disabled={isDisabled}
        />
      </Grid>
    </Box>
  );
};

export default LoginPage;
