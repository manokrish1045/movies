// 

import { useFormik } from "formik";
import * as yup from "yup";
const formValidationschema = yup.object({
    email: yup.string().min(8),
    password: yup.string().min(8, "need a strong password").required().max(10, "too much"),
})
export function Basicform() {
    const { handleSubmit, values, handleChange, handleBlur, touched, errors } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: formValidationschema,
        onSubmit: (values) => {
            console.log("form is valid ", values)

        },
    })
    return (
        <div >
            <form className="basicform" onSubmit={handleSubmit}>
                <input
                    name="email"
                    type="email" placeholder="E-MAIL"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                {touched.email && errors.email ? errors.email : null}
                <input
                    name="password"
                    type="text" placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                {touched.password && errors.password ? errors.password : null}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}