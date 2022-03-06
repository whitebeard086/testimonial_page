import { Box, Button, Chip, Typography } from "@mui/material";

import buttonIcon from "../assets/images/testimonial-line.svg";

const TestimonialText = () => {
  return (
    <Box sx={{ mt: 15, ml: 20 }}>
      <Box>
        <Typography variant="h3" sx={{ fontWeight: "700", fontSize: "32px" }}>
          Tolu & Joy’s Experience
        </Typography>
        <Chip
          label="Customer"
          variant="outlined"
          sx={{ borderRadius: "4px", color: "#FFF", mt: 1 }}
        />
      </Box>
      <Box>
        <Typography variant="body2" sx={{ fontSize: "18px", mt: 4 }}>
          I had the best experience shopping with vasiti. Usability of the website was great, very
          good customer service, an all round great experience. I would definately be coming back! I
          had the best experience shopping with vasiti. Usability of the website was great, very
          good customer service, an all round great experience. I would definately be coming back!
        </Typography>
      </Box>
      <Box>
        <Button
          variant="outlined"
          size="small"
          sx={{
            outline: "none",
            border: "none",
            color: "#FFF",
            position: "relative",
            mt: 4,
            "&:hover": {
              outline: "none",
              border: "none",
              color: "#FF5C00",
            },
          }}>
          Share your own story!
          <Box sx={{ position: "absolute", top: "18px" }}>
            <img src={buttonIcon} alt="share-testimonial" />
          </Box>
        </Button>
      </Box>
    </Box>
  );
};
export default TestimonialText;
