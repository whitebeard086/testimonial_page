import { Box, Container } from "@mui/material";

import { Newsletter, FooterLinks } from "../components";


const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        background: "#222222",
        color: "#FFF",
        mt: 20,
      }}>
      <Container>
          <Newsletter />
          <FooterLinks />
      </Container>
    </Box>
  );
};
export default Footer;
