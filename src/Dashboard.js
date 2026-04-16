import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Paper, Button, Typography, Box, Divider } from "@mui/material";

function Dashboard() {
  const [data, setData] = useState("");
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (!token) window.location.href = "/";
  }, [token]);

  const fetchData = async () => {
    try {
      // PATH MATCHED: /api/v1/auth/protected
      const res = await axios.get("http://localhost:8080/api/v1/auth/protected", {
        headers: { Authorization: "Bearer " + token }
      });
      // KEY MATCHED: res.data.message
      setData(res.data.message);
    } catch (err) {
      setData("Error: Unauthorized Access! Check if Token is valid.");
    }
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    window.location.reload(); 
  };

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Paper sx={{ p: 5, textAlign: 'center', borderRadius: 5, boxShadow: 4 }}>
        <Typography variant="h3" color="secondary" gutterBottom>
          Secure Dashboard
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          Logged in as: <b>Priyal Sabharwal</b>
        </Typography>
        
        <Divider sx={{ mb: 4 }} />

        <Box>
          <Button variant="contained" color="success" size="large" sx={{ mr: 2 }} onClick={fetchData}>
            Fetch Protected Data
          </Button>
          <Button variant="outlined" color="error" size="large" onClick={logout}>
            Logout
          </Button>
        </Box>

        {data && (
          <Box sx={{ mt: 5, p: 3, bgcolor: '#f0f4f8', borderRadius: 2, border: '1px solid #ccc' }}>
            <Typography variant="h6" color="success.main">
              {data}
            </Typography>
          </Box>
        )}
      </Paper>
    </Container>
  );
}

export default Dashboard;