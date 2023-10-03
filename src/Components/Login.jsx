import React, { useState } from "react";
import { Button, TextField, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";

const LoginContainer = styled(Paper)({
  width: "300px",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  margin: "50px auto",
});

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada login işlemlerinizi gerçekleştirebilirsiniz.
    console.log("Username:", username, "Password:", password);
  };

  return (
    <LoginContainer elevation={3}>
      <Typography variant="h5" gutterBottom>
        Giriş Yap
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Kullanıcı Adı"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Şifre"
          variant="outlined"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">
          Giriş Yap
        </Button>
      </form>
    </LoginContainer>
  );
};

export default Login;
