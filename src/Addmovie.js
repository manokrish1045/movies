import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik";
import * as yup from "yup";
import * as React from 'react';
import { API } from './global';
const movieValidationschema = yup.object({
    name: yup.string().required("fill this name"),
    poster: yup.string().required("fill this poster").min(4, "need a big poster"),
    rating: yup.number().required("fill this rating").min(0).max(10),
    summary: yup.string().required("fill this summary").min(20, "need a big summary"),
    trailer: yup.string().required("fill this trailer").min(20, "need a big trailer"),
})

export function Addmovie() {

    const { handleSubmit, values, handleChange, handleBlur, touched, errors } = useFormik({
        initialValues: {
            name: "",
            poster: "",
            rating: "",
            summary: "",
            trailer: "",
        },
        validationSchema: movieValidationschema,
        onSubmit: (newMovie) => {
            console.log("form is valid ", newMovie)
            addmovie(newMovie)
        },
    })
    const navigate = useNavigate()
    const addmovie = (newMovie) => {


        fetch(`${API}/movies`, {
            method: "POST",
            body: JSON.stringify(newMovie),
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


            <Button type='submit' variant="contained">Add movie</Button>

        </form>
    );
}
