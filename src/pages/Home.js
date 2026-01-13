
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  Paper,
  Button,
  Avatar
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state?.username;

  const handleLogout = () => {
    navigate("/");
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
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <HomeIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
          Home
        </Typography>
        <Paper elevation={3} sx={{ mt: 2, p: 4, width: "100%", textAlign: "center" }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Welcome {username}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogout}
            sx={{ mt: 2 }}
          >
            Logout
          </Button>
        </Paper>
      </Box>
    </Container>
  );
}

export default Home;
