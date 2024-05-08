import React from "react";
import { Formik, useFormik } from "formik";
function StudentForm() {
    let StudentForm = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            age: ''
        },
        onSubmit: (values) => {
            console.log(values)
        }
    })
    return <div className="p-2">
        <h2 className="text-center text-info">Student form</h2>
        <div>
            <form onSubmit={StudentForm.handleSubmit} >
                <label>First name :</label> <input type="text" name='firstname' onChange={StudentForm.handleChange} />
                <br />
                <label>Last name :</label> <input type="text" name='laststname' onChange={StudentForm.handleChange} />
                <br />
                <label>Age :</label> <input type="number" name='age' onChange={StudentForm.handleChange} />
                <br />
                <button>Submit</button>
            </form>
        </div>
    </div>
}
export default StudentForm