import React, { useState } from "react";
import axios from "axios";
import { Container, Card, TextField, Button, Typography, Box, Alert } from "@mui/material";

function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      // PATH MATCHED WITH YOUR CONTROLLER: /api/v1/auth/login
      const res = await axios.post("http://localhost:8080/api/v1/auth/login", { 
        username, 
        password 
      });
      
      // KEY MATCHED WITH YOUR CONTROLLER: res.data.token
      if (res.data.token) {
        sessionStorage.setItem("token", res.data.token);
        setToken(res.data.token);
      }
    } catch (err) {
      setError("Invalid Credentials! Use admin / 12345");
      console.error(err);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 10 }}>
      <Card sx={{ p: 4, boxShadow: 10, borderRadius: 4, textAlign: 'center' }}>
        <Typography variant="h4" color="primary" gutterBottom sx={{ fontWeight: 'bold' }}>
          Welcome Back
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
          Experiment 8: JWT Authentication
        </Typography>
        
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        <TextField fullWidth label="Username" variant="outlined" margin="normal" 
          onChange={(e) => setUsername(e.target.value)} />
        
        <TextField fullWidth label="Password" type="password" variant="outlined" margin="normal" 
          onChange={(e) => setPassword(e.target.value)} />

        <Button fullWidth variant="contained" size="large" sx={{ mt: 3, borderRadius: 2 }} 
          onClick={handleLogin}>
          Login
        </Button>
      </Card>
    </Container>
  );
}

export default Login;