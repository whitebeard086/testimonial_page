import { Box } from "@mui/material"

import testimonialImage from "../assets/images/ladies.svg"


const TestimonialImage = () => {
  return (
    <Box>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            width: "580px",
            height: "580px",
            borderRadius: "50%",
            background: "#2E2E2E",
            mt: 10
          }}></Box>
        <Box sx={{ ml: 6, position: "absolute", top: "0"}}>
          <img src={testimonialImage} alt="satisfied-customers" />
        </Box>
      </Box>
    </Box>
  )
}
export default TestimonialImage