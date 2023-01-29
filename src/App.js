
import './App.css';
import { useState } from 'react';
import { Routes, Route, Navigate, useNavigate, } from "react-router-dom"
import {
  Postquestion
} from './Postquestion';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Button from '@mui/material/Button';

import AppBar from '@mui/material/AppBar';
import { Paper } from '@mui/material';
import { Notfound } from './Notfound';









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


              <Button color="inherit" onClick={() => navigate("/Questions")}>Questions</Button>


              <Button color="inherit" onClick={() => navigate("/Questions/add")}>PostQuestions</Button>
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
            <Route path="/films" element={<Navigate replace to="/Questions" />} />

            <Route path="*" element={<Notfound />} />
            <Route path='/Questions/add' element={<Postquestion />}></Route>



          </Routes>
          {/* <Addcolor /> */}
        </div>
      </Paper>
    </ThemeProvider>
  );
}
function Home() {
  return <img className='stack' src='https://techcrunch.com/wp-content/uploads/2021/03/stack-overflow-for-teams.png' alt='Notfound'></img>
}
export default App;
