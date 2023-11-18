import "./App.css";
import Header from "./components/Header";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Cards from "./components/Cards";
import cards from "./data";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Grid container spacing={2} marginTop={10}>
          <Grid xs={12} md={6} lg={3}>
            <Cards img={cards[0].img} content={cards[0].content} />
          </Grid>
          <Grid xs={12} md={6} lg={3}>
            <Cards img={cards[1].img} content={cards[1].content} />
          </Grid>
          <Grid xs={12} md={6} lg={3}>
            <Cards img={cards[2].img} content={cards[2].content} />
          </Grid>
          <Grid sx={{ height: "400px" }} xs={12} md={6} lg={3}>
            <Cards img={cards[3].img} content={cards[3].content} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
