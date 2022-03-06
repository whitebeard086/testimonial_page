import { Box, Container } from "@mui/material";

import { TestimonialImage, TestimonialText } from "../components";

const Testimonial = () => {
  return (
    <Box
      sx={{
        width: "100%",
        background: "#222222",
        color: "#FFF",
        mt: -6,
      }}>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <TestimonialImage />
          </Box>
          <Box sx={{ display: "flex" }}>
            <TestimonialText />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default Testimonial;
