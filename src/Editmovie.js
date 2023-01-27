import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik";
import * as yup from "yup";
import * as React from 'react';
import { API } from './global';
import { useParams } from "react-router-dom";
const movieValidationschema = yup.object({
    name: yup.string().required("fill this name"),
    poster: yup.string().required("fill this poster").min(4, "need a big poster"),
    rating: yup.number().required("fill this rating").min(0).max(10),
    summary: yup.string().required("fill this summary").min(20, "need a big summary"),
    trailer: yup.string().required("fill this trailer").min(20, "need a big trailer"),
})

export function Editmovie() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const getMovie = () => {
        fetch(`${API}/movies/${id}`, {
            method: "GET",
        })
            .then((data) => data.json())
            .then((mv) => setMovie(mv));
    };
    useEffect(() => getMovie(), []);
    console.log(movie)
    return (
        <div>
            {movie ? <Editmovieform movie={movie} /> : <p>Loading.....</p>}
        </div>
    )
}
function Editmovieform({ movie }) {
    const { handleSubmit, values, handleChange, handleBlur, touched, errors } = useFormik({
        initialValues: {
            name: movie.name,
            poster: movie.poster,
            rating: movie.rating,
            summary: movie.summary,
            trailer: movie.trailer,
        },
        validationSchema: movieValidationschema,
        onSubmit: (updatedmovie) => {
            console.log("form is valid ", updatedmovie)
            updatemovie(updatedmovie)
        },
    })
    const navigate = useNavigate()
    const updatemovie = (updatedmovie) => {


        fetch(`${API}/movies/${movie.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedmovie),
            headers: {
                "content-Type": "application/json",
            },
        }).then((data) => navigate("/movies"))
    }
    return (
        <form onSubmit={handleSubmit} className="addlist">

            <TextField
                label="Name"
                variant="outlined"
                name='name'
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && errors.name}
                helperText={touched.name && errors.name ? errors.name : null} />
            {movie.name}


            <TextField
                label="Poster"
                variant="outlined"
                name='poster'
                value={values.poster}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.poster && errors.poster}
                helperText={touched.poster && errors.poster ? errors.poster : null}

            />

            <TextField
                label="Rating"
                variant="outlined"
                name='rating'
                value={values.rating}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.rating && errors.rating}
                helperText={touched.rating && errors.rating ? errors.rating : null} />

            <TextField
                label="Summary"
                variant="outlined"
                name='summary'
                value={values.summary}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.summary && errors.summary}
                helperText={touched.summary && errors.summary ? errors.summary : null} />
            { }

            <TextField
                label="Trailer"
                variant="outlined"
                name='trailer'
                value={values.trailer}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.trailer && errors.trailer}
                helperText={touched.trailer && errors.trailer ? errors.trailer : null} />


            <Button type='submit' variant="contained" color='success'> Save Changes</Button>

        </form>
    );
}

