import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container, Divider, Grid, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";

const Mui = () => {
  return (
    <>
      <header>
        <AppBar sx={{ background: "olive" }} position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Code Academy
            </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Contact</Button>
            <Button color="inherit">About Us</Button>
          </Toolbar>
        </AppBar>
      </header>

      <main>
        <section id="hero">
          <h2 className="text-center text-xl mt-4">Welcome to MUI code</h2>
          <form className="flex justify-center gap-2 items-center flex-col mt-4">
            <TextField
              type="email"
              id="email"
              label="Email"
              variant="outlined"
            />
            <Button variant="contained" color="primary">
              subscribe <SubscriptionsIcon />
            </Button>
          </form>

          <Divider sx={{ margin: "20px auto", width: "90%" }} />
          <Container maxWidth="xl">
            <Grid container spacing={2}>
              <Grid size={3}>
                <Card>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_lizards.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid size={3}>
                <Card>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_lizards.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid size={3}>
                <Card>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_lizards.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid size={3}>
                <Card>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_lizards.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Mui;
