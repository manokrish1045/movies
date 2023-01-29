// import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik";
import * as yup from "yup";
import * as React from 'react';
import { API } from './global';
const QuestionValidationschema = yup.object({
    name: yup.string().required("fill this name"),
    email: yup.string().required("fill this email").min(4, "need a big email"),
    Tags: yup.number().required("fill this Tags").min(0).max(10),
    Question: yup.string().required("fill this Question").min(20, "need a big Question"),

})

export function Postquestion() {

    const { handleSubmit, values, handleChange, } = useFormik({
        initialValues: {
            name: "",
            email: "",
            Tags: "",
            Question: "",
        },
        validationSchema: QuestionValidationschema,
        onSubmit: (postQuestion) => {
            console.log("form is valid ", postQuestion)
            addquestion(postQuestion)
        },
    })
    const navigate = useNavigate()
    const addquestion = (postQuestion) => {


        fetch(`${API}/Questions`, {
            method: "POST",
            body: JSON.stringify(postQuestion),
            headers: {
                "content-Type": "application/json",
            },
        }).then((data) => navigate("/Questions"))
    }
    return (
        <form onSubmit={handleSubmit} className="addlist">

            <TextField
                label="Name"
                variant="outlined"
                name='name'
                value={values.name}
            />


            <TextField
                label="email"
                variant="outlined"
                name='email'
                value={values.email}
                onChange={handleChange}

            />

            <TextField
                label="Tags"
                variant="outlined"
                name='Tags'
                value={values.Tags}
                onChange={handleChange}
            />

            <TextField
                label="Question"
                variant="outlined"
                name='Question'
                value={values.Question}
                onChange={handleChange}
            />
            { }



            <Button type='submit' variant="contained">Post Question</Button>

        </form>
    );
}
