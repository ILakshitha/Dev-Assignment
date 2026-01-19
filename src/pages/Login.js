import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Alert
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async() => {
     setError("");
    if (!username || !password) {
      setError("Please enter username and password");
      return;
    }
    setLoading(true);
    try {
      // const response = await fetch("https://t5bzetvc0d.execute-api.us-west-2.amazonaws.com/dev/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     "x-api-key": "vkEeGJPk4T4LT6QZ5dWaO6so3ofj0gS82jx2uj3L"
      //   },
      //   body: JSON.stringify({
      //     email: username,
      //     password: password
      //   })
      // });

      // const data = await response.json();

      // if (!response.ok) {
      //   setError(data.message || "Login failed");
      // } else {
      //   navigate("/home", { state: { username: data.name } });
      // }

      if (username === "admin" && password === "password") {
        navigate("/home", { state: { username: "Admin User" } });
      } else {
        setError("Invalid username or password");
      }      
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Paper elevation={3} sx={{ mt: 3, p: 4, width: "100%" }}>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default Login;
