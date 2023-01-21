import "./App.css";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const Title = styled.div`
  background-color: "paper";
  padding: 100px;
`;
const cardNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function App() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <AddAPhotoIcon />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Title>
            <Container maxWidth="sm" gutterBottom>
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Photo Album
              </Typography>
              <Typography
                variant="h6"
                align="center"
                color="darkgray"
                fontSize="14px"
                paragraph
              >
                Hello Every One this a photo Album Hello Every One this a photo
                Album Hello Every One this a photo Album Hello Every One this a
                photo Album Hello Every One this a photo Album Hello Every One
                this a photo Album
              </Typography>
              <div>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      See my Photos
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Secodary actions
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </Title>
        </div>
        <Container maxWidth="lg" gutterTop>
          <Grid container spacing={4}>
            {cardNum.map(() => (
              <Grid item className="cardGrid" xs={12} sm={6} md={4} lg={3}>
                <Card className="card">
                  <CardMedia
                    image="https://source.unsplash.com/random"
                    title="image title"
                    className="cardMedia"
                  />
                  <CardContent className="cardContent">
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography color="darkgray">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ratione harum
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      view
                    </Button>
                    <Button size="small" color="primary">
                      edite
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer>
        <Box sx={{ bgcolor: "lightgray", p: 6 }}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="darkgray">
            Something here to give the footer a purpose!
          </Typography>
          <Typography variant="body2" color="darkgray" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </footer>
    </>
  );
}

export default App;
