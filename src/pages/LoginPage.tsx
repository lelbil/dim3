import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import TextInputField from "../components/TextInputField";
import Dim3Button from "../components/Dim3Button";

// user name must be at least 3 characters
// password must be defined

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Login logic goes here
    // TODO: handle error
  };

  return (
    <Box sx={{ // TODO: use Grid instead?
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 2
    }}  >
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
      <Dim3Button onClick={handleLogin} text={"Login"} />
    </Box>
  );
};

export default LoginPage;
