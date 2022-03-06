import { Box, Button, Input, TextField, Typography } from "@mui/material";

import banner from "../assets/images/banner.svg";

const ariaLabel = { "aria-label": "enter your email" };

const Newsletter = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", py: 10 }}>
      <Box sx={{ position: "relative" }}>
        <Box sx={{ position: "absolute", top: "-8rem" }}>
          <img src={banner} alt="Newsletter-Image" />
        </Box>
      </Box>
      <Box sx={{ml: 2, display: "flex", flexDirection: "column", alignItems: "start"}}>
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "start"}}>
          <Typography variant="h5" sx={{mb: 1, fontSize: "40px", width: "100%"}}>Be a member of our community 🎉</Typography>
          <Typography variant="body2" sx={{mb: 4, width: "70%"}}>
            We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world.
          </Typography>
        </Box>
        <Box sx={{ height: "50px", display: "flex", alignItems: "center" }}>
          <Input
            placeholder="enter your email address"
            inputProps={ariaLabel}
            sx={{
              background: "rgba(255, 255, 255, 0.2)",
              color: "#FFF",
              fontSize: "14px",
              borderRadius: "6px 0 0 6px",
              height: "100%",
              fontWeight: "400",
              padding: "0.5rem 4rem 0.5rem 1rem",
            }}
          />
          <Button
            variant="contained"
            disableElevation
            sx={{
              padding: "0.6rem",
              borderRadius: "0 6px 6px 0",
              height: "100%",
              fontSize: "13px",
              color: "#000",
              background: "#FFF",
              px: 4,
              '&:hover': {
                background: "#FFF",
              },
            }}>
            SUBSCRIBE
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default Newsletter;
