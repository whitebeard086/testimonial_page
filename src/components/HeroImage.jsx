import { Box } from "@mui/material";

import heroImage from "../assets/images/testimonial-image.svg";
import imageBackground from "../assets/images/Ellipse-3.png";

const HeroImage = () => {
  return (
    <Box>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "#FFF8F5",
            position: "absolute",
            zIndex: "-3",
            mt: 13
          }}></Box>
        <Box sx={{ ml: 6 }}>
          <img src={heroImage} alt="satisfied-customers" />
        </Box>
      </Box>
    </Box>
  );
};
export default HeroImage;
