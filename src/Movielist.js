import { Movie } from "./Movie";
import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import { API } from "./global";

export function Movielist() {
    const [movieLists, setmovielist] = useState([])
    const getMovies = () => {
        fetch(`${API}/movies`, {
            method: "GET",
        })
            .then((data) => data.json())
            .then((mvs) => setmovielist(mvs));
    }

    useEffect(() => getMovies(), [])

    const deleteMovie = (id) => {
        fetch(`${API}/movies/${id}`, {
            method: "DELETE",
        }).then(() => getMovies())
    }
    const navigate = useNavigate()

    return (
        <div>

            <div className="movie-list">

                {movieLists.map((mv) => (
                    <Movie
                        movie={mv}
                        deleteButton={
                            <IconButton
                                onClick={() => deleteMovie(mv.id)}
                                aria-label="delete" size="large">
                                <DeleteIcon fontSize="inherit" />
                            </IconButton>
                        }
                        editButton={
                            <IconButton
                                color="error"
                                onClick={() => navigate(`/movies/edit/${mv.id}`)}
                                aria-label="edit" size="large">
                                <EditIcon />
                            </IconButton>}
                    />
                ))}
            </div>
        </div>
    );
}
