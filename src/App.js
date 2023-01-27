
import './App.css';
import { useState } from 'react';
import { Routes, Route, Navigate, useNavigate, } from "react-router-dom"
import { Addmovie } from './Addmovie';
import { Movielist } from './Movielist';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Button from '@mui/material/Button';

import AppBar from '@mui/material/AppBar';
import { Paper } from '@mui/material';
import { Notfound } from './Notfound';
import { Moviedeatil } from './Moviedeatil';
import { Basicform } from './Basicform';
import { Editmovie } from './Editmovie';





// const Initial_movie = [
//   {
//     name: "Vikram",
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//     rating: 8.4,
//     summary:
//       "Members of a black ops team must track and eliminate a gang of masked murderers."
//   },
//   {
//     name: "RRR",
//     poster:
//       "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//     rating: 8.8,
//     summary:
//       "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."
//   },
//   {
//     name: "Iron man 2",
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//     rating: 7,
//     summary:
//       "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
//   },
//   {
//     name: "No Country for Old Men",
//     poster:
//       "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//     rating: 8.1,
//     summary:
//       "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
//   },
//   {
//     name: "Jai Bhim",
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//     summary:
//       "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//     rating: 8.8
//   },
//   {
//     name: "The Avengers",
//     rating: 8,
//     summary:
//       "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//     poster:
//       "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
//   },
//   {
//     name: "Interstellar",
//     poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//     rating: 8.6,
//     summary:
//       "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans."
//   },
//   {
//     name: "Baahubali",
//     poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//     rating: 8,
//     summary:
//       "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
//   },
//   {
//     name: "Ratatouille",
//     poster:
//       "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//     rating: 8,
//     summary:
//       "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
//   }
// ];

function App() {

  const [mode, setMode] = useState("light")
  const themeCtx = createTheme({
    palette: {
      mode: mode,
    },
  });
  const navigate = useNavigate()


  return (
    <ThemeProvider theme={themeCtx}>
      <Paper
        sx={{
          minHeight: "100vh",
          borderRadius: "0px",
        }} elevation={0}>
        <div className="App">

          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => navigate("")}>Home</Button>


              <Button color="inherit" onClick={() => navigate("/movies")}>Movies</Button>


              <Button color="inherit" onClick={() => navigate("/movies/add")}>Add movies</Button>
              <Button
                sx={{
                  marginLeft: "auto"
                }}

                // startIcon={mode === "dark" ? <BrightnessIcon /> : <BrightnessIcon />}
                color="inherit" onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                {mode === "light" ? "dark" : "light"} Mode </Button>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/films" element={<Navigate replace to="/movies" />} />
            <Route path="/movies" element={<Movielist />} />
            <Route path="*" element={<Notfound />} />
            <Route path='/movies/add' element={<Addmovie />}></Route>
            <Route path='/movies/:id' element={<Moviedeatil />}></Route>
            <Route path='/movies/edit/:id' element={<Editmovie />}></Route>
            <Route path='/basic-form' element={<Basicform />}></Route>
          </Routes>
          {/* <Addcolor /> */}
        </div>
      </Paper>
    </ThemeProvider>
  );
}
function Home() {
  return <h1>Welcome</h1>
}
export default App;
