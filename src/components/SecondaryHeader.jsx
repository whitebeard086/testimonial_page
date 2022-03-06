import { Paper, Box, Container, Link } from "@mui/material";

const pages = [
  "MARKETPLACE",
  "WHOLESALE CENTER",
  "SELLER CENTER",
  "SERVICES",
  "INTERNSHIPS",
  "EVENTS",
];

const SecondaryHeader = () => {
  return (
    <div>
      <Paper elevation={2}>
        <Container>
          <Box
            sx={{
              py: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            {pages.map((page, index) => (
              <Link
                href="#"
                key={index}
                underline="hover"
                sx={{ color: "#242120", fontSize: "13px", mx: 4 }}>
                {page}
              </Link>
            ))}
          </Box>
        </Container>
      </Paper>
    </div>
  );
};
export default SecondaryHeader;
