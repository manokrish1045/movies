import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Counter } from './Counter';
import { useState } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';

// function Addcolor() {
//   const [color, setColor] = useState();
//   const styles = {
//     background: color,
//   }
//   return (
//     <div className='color1'>
//       name<input style={styles} type="text" onChange={(event1) => setColor(event1.target.value)} />
//       {color}
//       <button>add color</button>
//     </div>
//   )
// }
// function colorbox({ clr }) {
//   const clrstyle = {
//     height: "25px",
//     width: "250px",
//     background: clr
//   }
// }

export function Movie({ movie, deleteButton, editButton, }) {
    const styles1 = {
        color: movie.rating > 8.5 ? "green" : "red",
    };
    // const movie = {
    //   name: "Vikram",
    //   poster:
    //     "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
    //   rating: 8.4,
    //   summary:
    //     "Members of a black ops team must track and eliminate a gang of masked murderers."
    // }
    const [show, setshow] = useState(true);
    const navigate = useNavigate();
    return (
        <Card className="container">
            <img src={movie.poster} alt="" className="movie-poster" />
            <CardContent>
                <div className="movie-specs">
                    <h1 className="movie-name">{movie.name}</h1>
                    <p style={styles1} className="movie-rating">{movie.rating}⭐</p>
                </div>

                <IconButton onClick={() => setshow(!show)} aria-label="delete">
                    {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
                <IconButton
                    color='primary'
                    onClick={() => navigate(`/movies/${movie.id}`)}>
                    <InfoIcon />
                </IconButton>
                {show ? <p className="movie-summary">{movie.summary}</p> : null}
            </CardContent>
            <CardActions>
                <Counter />{deleteButton} {editButton}
            </CardActions>

        </Card>
    );
}
