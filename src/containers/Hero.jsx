import { Box, Typography } from "@mui/material";

import { HeroImage } from "../components";

const Hero = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ maxWidth: "50%" }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontSize: "48px",
            fontWeight: "700",
            mt: 12,
          }}>
          Amazing
          <br /> Experiences from Our Wonderful Customers
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "400",
            mt: 2,
          }}>
          Here is what customers and vendors are saying about us, you can share your stories with us
          too.
        </Typography>
      </Box>
      <HeroImage />
    </Box>
  );
};
export default Hero;
