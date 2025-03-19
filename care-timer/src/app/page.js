// app/page.js
import styles from "./page.module.css"; // Keep if you need module-specific styles
import { Box, Grid2, Typography, Card, CardActionArea, CardMedia, CardContent } from "@mui/material";

export default function Home() {
  return (
    <Box component="main" className="app-container">
      <Grid2
        container
        className="grid-container"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginInline: "auto",
          maxWidth: "1920px",
          height: "calc(100vh - 63.59px)",
        }}
      >
        {/* Create Account Card */}
        <Grid2
          size={{ xs: 12, md: 4 }}
          sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: 2 }}
        >
          <Card className="card" sx={{ borderRadius: 3 }}>
            <CardActionArea className="card-action">
              <CardMedia
                component="img"
                src="/registerNow.png"
                height="200"
                alt="create account"
              />
              <CardContent className="card-content">
                <Typography variant="h5" component="div">
                  Create an Account
                </Typography>
                <Typography variant="body2">
                  New to baby sitting with us? This is a great place to start. Click here to register!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>

        {/* Sign In Card */}
        <Grid2
          size={{ xs: 12, md: 4 }}
          sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingX: 2 }}
        >
          <Card className="card" sx={{ borderRadius: 3 }}>
            <CardActionArea className="card-action">
              <CardMedia
                component="img"
                src="/signInBaby.png"
                height="200"
                alt="Sign in"
              />
              <CardContent className="card-content">
                <Typography variant="h5" component="div">
                  Sign In
                </Typography>
                <Typography variant="body2">
                  Already got your feet wet and back for another visit? Click here to sign in!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>

        {/* Sign Out Card */}
        <Grid2
          size={{ xs: 12, md: 4 }}
          sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: 2 }}
        >
          <Card className="card" sx={{ borderRadius: 3 }}>
            <CardActionArea className="card-action">
              <CardMedia
                component="img"
                src="/signOutBaby.png"
                height="200"
                alt="Sign out"
              />
              <CardContent className="card-content">
                <Typography variant="h5" component="div">
                  Sign Out
                </Typography>
                <Typography variant="body2">
                  On your way out the door? Don’t forget to sign out before leaving!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid2>
      </Grid2>
    </Box>
  );
}