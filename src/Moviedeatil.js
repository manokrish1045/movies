import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { API } from './global';

export function Moviedeatil() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const getMovie = () => {
        fetch(`${API}/movies/${id}`, {
            method: "GET",
        })
            .then((data) => data.json())
            .then((mv) => setMovie(mv));
    };
    useEffect(() => getMovie());
    const styles1 = {
        color: movie.rating > 8.5 ? "green" : "red",
    };
    const navigate = useNavigate();
    console.log(movie)
    return (
        <div>
            <iframe width="100%" height="800"
                src={movie.trailer}
                title="Master - Official Teaser | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj"
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

            </iframe>
            <div className='movie-detail'>
                <div className="movie-specs">
                    <h1 className="movie-name">{movie.name}</h1>
                    <p style={styles1} className="movie-rating">{movie.rating}⭐</p>
                </div>
                <p className='movie-summary'>{movie.summary}</p>
                <button onClick={() => navigate(-1)}>Back</button>
            </div>
        </div>
    );
}
