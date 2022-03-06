import Container from "@mui/material/Container";

import { Footer, Header, Hero, Testimonial } from "./containers";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Container sx={{ marginY:  5 }}>
          <Hero />
      </Container>
      <Testimonial />
      <Footer />
    </div>
  );
};
export default App;
